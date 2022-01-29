//const clientModel = require("../models/clientModel");
const clientModel = require("../models/clientModel");

exports.lastId = () => {
    return new Promise((resolve, reject)=>{
        clientModel.getLastId().then(result=>{
            resolve(result[0].id);
        }).catch(erro=>{
            reject(erro)
        });
    })
}