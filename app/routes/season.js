module.exports = (app) => {
    /**
     * @swagger
     * /api/add-season:
     *   post:
     *     summary: Insert season data
     *     description: Insert data of a new season into the database.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               idSeason:
     *                 type: integer
     *                 description: Season internal ID.
     *                 example: 1
     *               description:
     *                 type: string
     *                 description: Description of the Season (its name).
     *                 example: Constelations
     *               startDate:
     *                 type: string
     *                 description: Date that Season starts.
     *                 example: 2020-01-01 00:00:00.000
     *               endDate:
     *                 type: string
     *                 description: Date that Season ends.
     *                 example: 2050-01-01 00:00:00.000
     *     responses:
     *       201:
     *         description: Created
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   description: Return of the Season data insert when it's successful.
     *                   example: "Season registered successfully"
     */
    app.post("/api/add-season", (req, res) => {
        app.app.controllers.season.add(app, req, res);
    });
}