const clientModel = require("../models/clientModel");
const multer  = require('multer');
const fs = require("fs")
exports.storage = multer.diskStorage({
    destination: (req, file, callback) => {
        clientModel.getLastId().then((result)=>{
            const dir = (req.method == "PUT") ? `./src/assets/${req.params.id}` : `./src/assets/${result}`;
            if(!fs.existsSync(dir)){
                fs.mkdirSync(dir)
            }
            callback(null,dir);
        }).catch(error=>{
            console.log(error);
        })
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

exports.get = (req, res, next) => {
    clientModel.getAllClients().then(results=>{
        for (let i = 0; i < results.length; i++) {
            let url_foto = `http://localhost:3000/static/${results[i].id}/${results[i].foto}`
            results[i].foto = url_foto
        }
        res.status(200).send({result: results});
        next();
    }).catch(erro=>{
        res.status(400).send({error: erro});
        next();
    });
}

exports.post = (req, res, next) => {
    clientModel.saveClient(req.body).then(()=>{
        res.status(200).send({message: "Ok"});
        next();
    }).catch(erro=>{
        res.status(400).send({error: erro});
        next();
    });
}

exports.put = (req, res, next) => {
    clientModel.editClient(req.params.id,req.body).then(()=>{
        res.status(200).send({message: "Ok"});
        next();
    }).catch(erro=>{
        res.status(400).send({error: erro});
        next();
    });
}

exports.delete = (req, res, next) => {
    clientModel.deleteClient(req.params.id).then(()=>{
        res.status(200).send({message: "Ok"});
        next();
    }).catch(erro=>{
        res.status(400).send({error: erro});
        next();
    });
}