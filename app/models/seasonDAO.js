function seasonDAO(connection) {
    this._connection = connection
}

seasonDAO.prototype.add = function(req, res) {
    let sql = "INSERT INTO Season (Name,StartDate,EndDate) VALUES (?,?,?)"
    let params = [req.body.description, req.body.startDate, req.body.endDate]

    this._connection.run(sql, params, (err, result) => {
        if (err) {
            res.status(500).json({ "status": 500, "error": "Internal Server Error: " + err.message })
            return
        }

        res.status(201).json({ "status": 201, "message": "Season registered successfully" })
    })
}

seasonDAO.prototype.get = function(description, startDate, endDate, res, callback) {
    let sql = "SELECT * FROM Season WHERE 1 = 1 "
    let params = []
    
    if (description != null) {
        sql += "AND Name = ? "
        params.push(description)
    }

    if (startDate != null) {
        sql += "StartDate = ? "
        params.push(startDate)
    }
    
    if (endDate != null) {
        sql += "EndDate = ? "
        params.push(endDate)
    }

    this._connection.all(sql, params, (err, rows) => {
        if (err) {
            res.status(500).json({ "status": 500, "error": "Internal Server Error: " + err.message })
            return
        }

        callback(rows)
    })
}

module.exports = () => {
    return seasonDAO
}