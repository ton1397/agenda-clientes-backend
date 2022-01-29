drop database agenda_clientes;

create database if not exists agenda_clientes;

use agenda_clientes;

create table clientes(
    id int auto_increment primary key,
    nome varchar(100),
    email varchar(100),
    telefone varchar(11),
    foto varchar(255),
    flg_ativo tinyint(1) default 1
);