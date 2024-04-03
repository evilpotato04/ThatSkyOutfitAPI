function seasonDAO(connection){
    this._connection = connection;
}

seasonDAO.prototype.add = function(json, req, res){
    let sql = "INSERT INTO Season VALUES (?,?,?,?)"
    let params = [json.idSeason, json.description, json.startDate, json.endDate]

    this._connection.run(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ "error": err.message })
            return;
        }

        res.status(201).json({
            "message": "Season registered successfully"
        })
    })
}

module.exports = () => {
    return seasonDAO;
}