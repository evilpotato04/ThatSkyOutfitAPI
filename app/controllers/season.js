module.exports.add = (app, req, res) => {

    let jsonData = req.body;

    const connection = app.config.dbConnection;
    const seasonDAO = new app.app.models.seasonDAO(connection);

    seasonDAO.add(jsonData, req, res);
}