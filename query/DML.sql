create database login;
use login;

create table USER(
	id mediumint NOT NULL AUTO_INCREMENT,
    nome varchar(100) NOT NULL,
	senha varchar(100) NOT NULL,
    cpf varchar(11) NOT NULL,
    email varchar(100) NOT NULL,
    cep varchar(8) NOT NULL,
    endereco varchar(150) NOT NULL,
    numero int NOT NULL,
    complemento varchar(100) NOT NULL,
    bairro varchar(100) NOT NULL,
    cidade varchar(100) NOT NULL,
    estado varchar(50) NOT NULL,
    nascimento date NOT NULL,
    PRIMARY KEY (id)
);