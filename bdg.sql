#cria bdg
create database bdg;

use bdg;

#A partir daqui cria as tabelas no banco
create table TipoUsuarios(
id 	INT UNSIGNED NOT null auto_increment,
tipo_usuario VARCHAR (15) NOT NULL,
multa_dia DOUBLE NOT NULL DEFAULT '0',
prazo INT UNSIGNED default null,
primary key (id)
);

create table usuarios (
id int unsigned not null auto_increment,
nome varchar (15) not null,
sobrenome varchar (20) not null,
endereco varchar (45) not null,
cidade varchar (45) not null,
sigla_estado varchar (02) not null,
telefone varchar (15) not null,
tipo_usuario_id int unsigned not null,
primary key (id),

constraint fk_Usuarios_TipoUsuarios
foreign key (tipo_usuario_id)
references TipoUsuarios(id)
);

create table Categorias(
id INT unsigned NOT null auto_increment,
categoria VARCHAR (15) NOT NULL,
primary key(id)
);

create table livros(
id int unsigned not null auto_increment,
usuario_id int unsigned default null,
titulo varchar (45) not null,
escritor varchar (45) not null,
editora varchar (45) not null,
ano_publicacao int unsigned default null,
numero_edicao int unsigned default null,
paginas int unsigned default null,
categoria_id int unsigned default null,
preco double not null default '0',
primary key (id),

constraint fk_livros_usuarios
foreign key (usuario_id)
references usuarios(id),

constraint fk_categorias_livros
foreign key (categoria_id)
references categorias(id)
);

GRANT ALL PRIVILEGES ON * . * TO
'josias'@'localhost';
FLUSH PRIVILEGES;

select * from usuarios;