const api = require("./controller.js");
const bp = require("body-parser");

function routes(app)
{
    app.use(bp.json());
    app.get("/authors", api.allAuthors);
    app.get("/authors/:id", api.showAuthor);
    app.post("/authors", api.createAuthor);
    // app.post("/reviews/:id", api.rateAuthor);
    app.put("/authors/:id", api.updateAuthor);
    app.delete("/authors/:id", api.deleteAuthor);
    return app;
}

module.exports = routes;