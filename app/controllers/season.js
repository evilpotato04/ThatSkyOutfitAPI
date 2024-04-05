module.exports.add = (app, req, res) => {

    validateData(app, req, res, valid => {
        if (!valid) return

        const connection = app.config.dbConnection
        const seasonDAO = new app.app.models.seasonDAO(connection)

        seasonDAO.add(req, res)
    })
}

let validateData = (app, req, res, callback) => {
    let errorMessage = null

    if (errorMessage == null && typeof req.body.description != "string") errorMessage = "description field is invalid"
    if (errorMessage == null && typeof req.body.startDate != "string") errorMessage = "startDate field is invalid"
    if (errorMessage == null && typeof req.body.endDate != "string") errorMessage = "endDate field is invalid"

    if (errorMessage == null && req.body.description == "") errorMessage = "description field can't be blank"
    if (errorMessage == null && req.body.startDate == "") errorMessage = "startDate field can't be blank"
    if (errorMessage == null && req.body.endDate == "") errorMessage = "endDate field can't be blank"
    
    validateDuplicity(app, req, res, valid => {
        if (errorMessage == null && !valid) 
            errorMessage = "This Season already exists in database"
    
        if (errorMessage != null)
            res.status(406).json({ "status": 406, "error": errorMessage })
        
        errorMessage == null ? callback(true) : callback(false)
    })
}

let validateDuplicity = (app, req, res, callback) => {
    const connection = app.config.dbConnection
    const seasonDAO = new app.app.models.seasonDAO(connection)

    seasonDAO.get(req.body.description, null, null, res, (listSeasons) => {
        listSeasons.length == 0 ? callback(true) : callback(false)
    })
}