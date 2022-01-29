const database = require("../database/connection");

const pool = database.pool;

exports.getAllClients = () => {
    return new Promise((resolve, reject) => {
        pool.query("select id, nome, telefone, email, foto, flg_ativo from clientes where flg_ativo = 1", (error, results) => {
            if(error) reject(error);
            resolve(results);
        });
    })
}

exports.saveClient = (clientes) => {
    return new Promise((resolve, reject) => {
        pool.query({
            sql:"insert into clientes (nome, telefone, email, foto) values (?, ?, ?, ?)",
            values: [clientes.nome,clientes.telefone,clientes.email,clientes.foto]
        }, (error) => {
            if(error) reject(error);
            resolve();
        });
    })
}

exports.editClient = (id,clientes) => {
    return new Promise((resolve, reject) => {
        pool.query({
            sql:"update clientes set nome = ?, telefone = ?, email = ?, foto = ? where id = ?",
            values: [clientes.nome,clientes.telefone,clientes.email,clientes.foto, id]
        }, (error) => {
            if(error) reject(error);
            resolve();
        });
    })
}

exports.deleteClient = (id) => {
    return new Promise((resolve, reject) => {
        pool.query({
            sql:"update clientes set flg_ativo = 0 where id = ?",
            values: [id]
        }, (error) => {
            if(error) reject(error);
            resolve();
        });
    })
}

exports.getLastId = () => {
    return new Promise((resolve, reject) => {
        pool.query({
            sql: "select (id+1) as id from clientes order by id desc limit 1"
        }, (error, result) => {
            if(error) reject(error);
            resolve(result[0].id);
        });
    })
}
