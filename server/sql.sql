create database pesquisaCep;

use pesquisaCep;

CREATE Table cep (
    id int not null auto_increment,
    cep varchar(12) not null,
    primary key (id)
);


select * from cep;

INSERT INTO cep (cep) VALUES ('01001000');