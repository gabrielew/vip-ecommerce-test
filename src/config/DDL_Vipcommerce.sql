create schema vip_ecommerce;
use vip_ecommerce;

create table empresas(
id int unsigned not null primary key auto_increment,
descricao varchar(100) not null,
cnpj varchar(30) not null,
status tinyint default 1 comment "situacao da empresa. 0 -> desativada, 1-> ativa no sistema"
);

create table centro_distribuicao(
id int unsigned not null auto_increment,
empresa_id int unsigned not null,
numero_cd int not null,
primary key(id,empresa_id),
constraint fk_empresa_id foreign key(empresa_id) references empresas(id) on delete restrict on update cascade,
constraint un_cd_empresa unique(empresa_id, numero_cd)
);

create table produtos(
id int unsigned not null primary key auto_increment,
empresa_id int unsigned not null,
descricao varchar(200) not null,
unidade_medida char(2) comment 'sigla da unidade de medida',
bebida_alcoolica tinyint default 0 comment '0-> não é bebida alcoolica, 1 -> é bebida alcoolica',
pesavel tinyint default 0 comment '0 -> não é pesável, 1 -> é pesável',
constraint fk_empresa_id_produto foreign key(empresa_id) references empresas(id) on delete restrict on update cascade
);

create table produtos_estoque_preco(
id int unsigned not null primary key auto_increment,
produto_id int unsigned not null,
centro_distribuicao_id int unsigned not null,
empresa_id int unsigned not null,
estoque float,
estoque_seguranca float,
preco_venda float,
codigo_barras varchar(15) not null,
status tinyint default 1 comment "0 -> produto desativado, 1 -> produto ativado",
constraint fk_empresa_cd foreign key(centro_distribuicao_id, empresa_id) references centro_distribuicao(id, empresa_id)
on delete restrict on update cascade,
constraint fk_produto_id foreign key(produto_id) references produtos(id) on delete restrict on update cascade
);

create table clientes(
id int unsigned not null primary key auto_increment,
nome varchar(100) not null,
sobrenome varchar(100) not null,
email varchar(100) not null,
cpf varchar(100) not null,
empresa_id int unsigned not null,
verificado tinyint default 0 comment "novo cliente = 0, cliente com e-mail verificado 1",
constraint fk_empresa_id_cliente foreign key(empresa_id) references empresas(id)  on delete restrict on update cascade,
constraint un_cliente_empresa unique(cpf, empresa_id),
constraint un_email_empresa unique(email, empresa_id)
);

create table clientes_enderecos(
	id int unsigned not null primary key auto_increment,
    cliente_id int unsigned not null,
    logradouro varchar(100) not null,
    bairro varchar(100) not null,
    cidade varchar(100) not null,
    numero varchar(7) null,
    complemento varchar(100) not null,
    uf varchar(2) not null,
    cep varchar(20) not null,
    constraint fk_cliente_id_endereco foreign key(cliente_id) references clientes(id) on delete restrict on update cascade
);

create table pedidos(
id int unsigned not null primary key auto_increment,
cliente_id int unsigned not null,
centro_distribuicao_id int unsigned not null,
empresa_id int unsigned not null,
valor_frete float default 0 comment "o frente 0 é o frete grátis",
id_endereco int unsigned null,
retira tinyint default 0 comment "0 -> é entrega, 1 -> vai retirar na loja, neste caso o ID_ENDERECO pode ser null",
data_pedido datetime default current_timestamp,
valor_pedido float,
valor_desconto float,
valor_total float,
data_agendamento_entrega datetime,
data_entrega datetime comment "data da realização da entrega",
constraint fk_cliente_pedidos foreign key(cliente_id) references clientes(id) on delete restrict on update cascade,
constraint fk_empresa_pedido_itens foreign key(centro_distribuicao_id, empresa_id) references centro_distribuicao(id, empresa_id)
on delete restrict on update cascade
);

create table pedidos_itens(
	id int unsigned not null primary key auto_increment,
    produto_id int unsigned not null,
    empresa_id int unsigned not null,
    centro_distribuicao_id int unsigned not null,
    pedido_id int unsigned not null,
    quantidade float,
    observacoes varchar(200),
    constraint fk_pedido_item_produto_id foreign key(produto_id) references produtos(id) on delete restrict on update cascade,
    constraint fk_empresa_pedido_item foreign key(centro_distribuicao_id, empresa_id) references centro_distribuicao(id, empresa_id)
	on delete restrict on update cascade,
    constraint fk_pedido_item_pedido_id foreign key(pedido_id) references pedidos(id) on delete restrict on update cascade
);
