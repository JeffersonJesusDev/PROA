 CREATE DATABASE db_cds;
 USE db_cds;
 
create table tb_artista(
	pk_id_art int auto_increment primary key not null, 
	nome_art varchar(100) NOT NULL
);

create table tb_gravadora(
	pk_id_grav int auto_increment primary key not null,
    nome_grav varchar(50)
);

create table tb_categoria(
	pk_id_cat int auto_increment primary key not null,
    nome_cat varchar(50) not null
);

create table tb_estado(
	pk_id_est char(2) primary key not null,
    nome_est char(50) not null 
);

ALTER TABLE tb_estado RENAME COLUMN pk_id_est TO pk_sigla_est;

create table tb_cidade(
	pk_id_cid int auto_increment primary key not null,
    nome_cid varchar(100) not null
);

alter table tb_cidade 
add column fk_sigla_est char(2);

alter table tb_cidade
add constraint fk_sigla_est 
foreign key (fk_sigla_est) references tb_estado(pk_sigla_est);

select * from tb_estado;

create table Cliente(
	pk_id_cli int auto_increment primary key not null,
    nome_cli varchar(100) not null,
    end_cli varchar(200) not null,
    renda_cli Decimal(10,2) not null,
    sexo_cli CHAR(1) NOT NULL DEFAULT 'F' CHECK (sexo_cli IN ('F', 'M'))
);

alter table Cliente 
add column fk_id_cid int;

alter table Cliente
add constraint fk_id_cid
foreign key (fk_id_cid) references tb_cidade(pk_id_cid);

create table tb_conjuge(
	pk_id_cli int auto_increment primary key not null,
    nome_conj varchar(100) not null,
    renda_conj decimal(10,2) not null,
    sexo_conj char(1) not null default 'M' CHECK (sexo_conj in ('F', 'M'))
);

drop table tb_conjuge;

alter table tb_conjuge
add constraint fk_pk_id_cli
foreign key (pk_id_cli) references Cliente(pk_id_cli);

select * from tb_conjuge;
describe Cliente;

create table Funcionario(
	pk_id_func int auto_increment primary key,
    nome_func varchar(100) not null,
    end_func varchar(200) not null,
    sal_func decimal(10,2) not null,
    sexo_func char(1) not null default 'F' check (sexo_func in ('F', 'M'))
);

create table Dependente(
	pk_id_dep int auto_increment not null primary key,
    pk_id_func int not null,
    nome_dep varchar(100) not null,
    sexo_dep char(1) not null default 'F' check (sexo_dep in ('F', 'M'))
);

alter table Dependente
add constraint fk_pk_id_func
foreign key (pk_id_func) references Funcionario(pk_id_func);

create table tb_titulo(
	pk_id_tit int auto_increment not null primary key,
    pk_id_cat int not null,
    pk_id_grav int not null,
    nome_cd varchar(100) not null,
    val_cd decimal(10,2) not null,
    qtd_estq int not null
);

alter table tb_titulo
add constraint fk_pk_id_cat
foreign key (pk_id_cat) references tb_categoria(pk_id_cat);

alter table tb_titulo
add constraint fk_pk_id_grav
foreign key (pk_id_grav) references tb_gravadora(pk_id_grav);

create table Pedido(
	pk_id_ped int auto_increment not null primary key,
    pk_id_cli int not null,
    pk_id_func int not null,
    data_ped datetime not null,
    val_ped decimal(10,2) not null
);

alter table Pedido
add constraint fk_id_cli
foreign key (pk_id_cli) references Cliente(pk_id_cli);

alter table Pedido
add constraint fk_id_func
foreign key (pk_id_func) references Funcionario(pk_id_func);


CREATE TABLE titulo_pedido (
    pk_id_ped INT,
    pk_id_tit INT,
    PRIMARY KEY (pk_id_ped, pk_id_tit),
    qtd_cd int not null,
    val_cd Decimal(10,2) not null
);

alter table titulo_pedido
add constraint fk_id_ped_titulo_pedido
foreign key (pk_id_ped) references Pedido(pk_id_ped);

alter table titulo_pedido
add constraint fk_id_tit_titulo_pedido
foreign key (pk_id_tit) references tb_titulo(pk_id_tit);


create table tb_titulo_artista(
	pk_id_tit int not null,
    pk_id_art int not null, 
    primary key(pk_id_tit, pk_id_art)
);

alter table tb_titulo_artista
add constraint pk_fk_id_tit_titulo_artista
foreign key (pk_id_tit) references tb_titulo(pk_id_tit);

alter table tb_titulo_artista
add constraint pk_fk_id_art_titulo_artista
foreign key (pk_id_art) references tb_artista(pk_id_art);

