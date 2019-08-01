const path = require('path');
const views = path.join(__dirname, '../public');
const config = require("../config.json");
var http = require('http');
var request = require('request');
global.gconfig = config;

var indexAction = function(req, res, next){
    res.sendFile("app.html", {root : views});

};

var configList = function(req,res,next){
    res.json(config.machines);
};

var configPost = function(req,res,next){
    var a =global.gconfig.machines;
    var ipNo = req.query.ipNo;
    var appname = req.query.appname;
    
    for (let i = 0; i < a.length; i++) {
        //console.log("element",a[i]);
        if (a[i].ip_no == ipNo) {
            const element = a[i].configs;
            //console.log("ipNo",element)
            for (let k = 0; k < element.length; k++) {
                const veri = element[k];
                if(veri.appName == appname){
                    console.log("veri.config",veri.configUrl)
                    request.post({
                        //headers: {'content-type' : 'application/x-www-form-urlencoded'},
                        url: veri.configUpdateUrl,
                        form: req.query
                    },function(error,response, body){
                        //console.log(body);
                        res.send(body)
                    });
                }
            }
        }
        
    }
};

var configGet = function(req,res,next){
    var a =global.gconfig.machines;
    var ipNo = req.query.ipNo;
    var appname = req.query.appname;

    for (let i = 0; i < a.length; i++) {
        //console.log("element",a[i]);
        if (a[i].ip_no == ipNo) {
            const element = a[i].configs;
            //console.log("ipNo",element)
            for (let k = 0; k < element.length; k++) {
                const veri = element[k];
                if(veri.appName == appname){
                    console.log("veri.config",veri.configUrl)
                    request.get({url: veri.configUrl},function(error,response, body){
                        //console.log("body",body);
                        res.send(body)
                    });
                }
            }
        }
        
    }
};

var logGet = function(req,res,next){
    var a =global.gconfig.machines;
    var ipNo = req.query.ipNo;
    var appname = req.query.appname;

    for (let i = 0; i < a.length; i++) {
        //console.log("element",a[i]);
        if (a[i].ip_no == ipNo) {
            const element = a[i].configs;
            //console.log("ipNo",element)
            for (let k = 0; k < element.length; k++) {
                const veri = element[k];
                if(veri.appName == appname){
                    console.log("veri.config",veri.configUrl)
                    request.get({url: veri.logUrl},function(error,response, body){
                        //console.log("body",body);
                        res.send(body)
                    });
                }
            }
        }
        
    }
};

var logPost = function(req,res,next){
    var a =global.gconfig.machines;
    var ipNo = req.query.ipNo;
    var appname = req.query.appname;

    for (let i = 0; i < a.length; i++) {
        //console.log("element",a[i]);
        if (a[i].ip_no == ipNo) {
            const element = a[i].configs;
            //console.log("ipNo",element)
            for (let k = 0; k < element.length; k++) {
                const veri = element[k];
                if(veri.appName == appname){
                    console.log("veri.config",veri.configUrl)
                    request.post({
                        //headers: {'content-type' : 'application/x-www-form-urlencoded'},
                        url: veri.logUpdateUrl,
                        form: req.query
                    },function(error,response, body){
                        res.send(body)
                    });
                }
            }
        }
        
    }
};

var reloadConfig = function(req,res){
    var a =global.gconfig.machines;
    var ipNo = req.query.ipNo;
    var appname = req.query.appname;

    for (let i = 0; i < a.length; i++) {
        //console.log("element",a[i]);
        if (a[i].ip_no == ipNo) {
            const element = a[i].configs;
            //console.log("ipNo",element)
            for (let k = 0; k < element.length; k++) {
                const veri = element[k];
                if(veri.appName == appname){
                    console.log("veri.config",veri.configUrl)
                    request.get({url: veri.configReload},function(error,response, body){
                        //console.log("body",body);
                        res.send(body)
                    });
                }
            }
        }
        
    }
};

var reloadLog = function(req,res){
    var a =global.gconfig.machines;
    var ipNo = req.query.ipNo;
    var appname = req.query.appname;

    for (let i = 0; i < a.length; i++) {
        //console.log("element",a[i]);
        if (a[i].ip_no == ipNo) {
            const element = a[i].configs;
            //console.log("ipNo",element)
            for (let k = 0; k < element.length; k++) {
                const veri = element[k];
                if(veri.appName == appname){
                    console.log("veri.config",veri.configUrl)
                    request.get({url: veri.logReload},function(error,response, body){
                        //console.log("body",body);
                        res.send(body)
                    });
                }
            }
        }
        
    }
};

var version = function(req,res,next){
    var a =global.gconfig.machines;
    var ipNo = req.query.ipNo;
    var appname = req.query.appname;

    for (let i = 0; i < a.length; i++) {
        //console.log("element",a[i]);
        if (a[i].ip_no == ipNo) {
            const element = a[i].configs;
            //console.log("ipNo",element)
            for (let k = 0; k < element.length; k++) {
                const veri = element[k];
                if(veri.appName == appname){
                    request.get({url: veri.version},function(error,response, body){
                        //console.log("body",body);
                        res.send(body)
                    });
                }
            }
        }
        
    }
};
module.exports.indexAction = indexAction;
module.exports.configList = configList;
module.exports.configPost = configPost;
module.exports.configGet = configGet;
module.exports.logGet = logGet;
module.exports.logPost = logPost;
module.exports.reloadConfig = reloadConfig;
module.exports.reloadLog = reloadLog;
module.exports.version = version;