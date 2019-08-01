var homeController = require('../controllers/homeController');

module.exports = function (app) {
    app.get("/", homeController.indexAction);
    app.get("/app/list",homeController.configList);
    app.post("/config/post", homeController.configPost);
    app.post("/config/get", homeController.configGet);
    app.post("/log/get", homeController.logGet);
    app.post("/log/post",homeController.logPost);
    app.post("/config/reload",homeController.reloadConfig);
    app.post("/log/reload",homeController.reloadLog);
    app.post("/version",homeController.version);
}