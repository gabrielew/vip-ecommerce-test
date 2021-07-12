insert into empresas(descricao, cnpj, status)
values
("Supermecado Sol", "10234567000178", 1),
("Supermecado Lunar", "40459789000178", 1),
("Supermecado Jupter", "99789789000124", 1);

insert into centro_distribuicao(empresa_id, numero_cd)
values
(1,1),
(1,2),
(2,1),
(2,2),
(2,3),
(3,1);

insert into clientes(nome, sobrenome, email, cpf, empresa_id, verificado)
values
('Thiago', 'Giovanella', 'thiagogiovanella@vipcommerce.com.br', '12345678999', 1, 1),
('Thiago', 'Giovanella', 'thiagogiovanella@vipcommerce.com.br', '12345678999', 2, 1),
('Vinicius', 'Waichert', 'viniciuswaichert@vipcommerce.com.br', '99988877799', 1, 1),
('Vinicius', 'Waichert', 'viniciuswaichert@vipcommerce.com.br', '99988877799', 2, 1),
('Vinicius', 'Waichert', 'viniciuswaichert@vipcommerce.com.br', '99988877799', 3, 1),
('Marcelo', 'Nunes', 'marcelonunes@vipcommerce.com.br', '33221166644', 1, 1),
('Marcelo', 'Nunes', 'marcelonunes@vipcommerce.com.br', '33221166644', 2, 1),
('Marcelo', 'Nunes', 'marcelonunes@vipcommerce.com.br', '33221166644', 3, 1);

insert into clientes_enderecos(cliente_id, logradouro, bairro, cidade, numero, complemento, uf, cep)
values
(1, 'Rua da casa do Thiago', 'Jd Mariana', 'Varginha', '65', '', 'MG', '37000000'),
(2, 'Rua da casa do Vinicius', 'Centro', 'Ubá', '665', 'Terraço', 'MG', '37100000'),
(3, 'Rua da casa do Marcelo', 'Chácara das Rosas', 'Sarzedo', '99', 'Bloco 9', 'MG', '37200000');

insert into produtos(empresa_id, descricao, unidade_medida, bebida_alcoolica, pesavel)
values
(1, 'Coca-cola retornável 2lt','UN', 0, 0),
(2, 'Coca-cola retornável 2lt','UN', 0, 0),
(3, 'Coca-cola retornável 2lt','UN', 0, 0),
(1, 'Arroz Corripil Tipo 1 5kg','UN', 0, 0),
(2, 'Arroz Corripil Tipo 1 5kg','UN', 0, 0),
(3, 'Arroz Corripil Tipo 1 5kg','UN', 0, 0),
(1, 'Cerveja Heineken 600ml','UN', 1, 0),
(2, 'Cerveja Heineken 600ml','UN', 1, 0),
(3, 'Cerveja Heineken 600ml','UN', 1, 0),
(1, 'Cachaça Salinas Ouro 1lt','UN', 1, 0),
(2, 'Cachaça Salinas Ouro 1lt','UN', 1, 0),
(3, 'Cachaça Salinas Ouro 1lt','UN', 1, 0),
(1, 'Feijão Carioquinha Ouro preto 500g','UN', 0, 0),
(2, 'Feijão Carioquinha Ouro preto 500g','UN', 0, 0),
(3, 'Feijão Carioquinha Ouro preto 500g','UN', 0, 0),
(1, 'Macarrão Galo Penne Grano Duro 250g','UN', 0, 0),
(2, 'Macarrão Galo Penne Grano Duro 250g','UN', 0, 0),
(3, 'Macarrão Galo Penne Grano Duro 250g','UN', 0, 0);


insert into produtos_estoque_preco(produto_id, centro_distribuicao_id, empresa_id, estoque, estoque_seguranca, preco_venda, status, codigo_barras)
values
(1, 1, 1, 100, 5, 11.90, 1, 7894561230012),
(1, 2, 1, 30, 5, 11.90, 1, 7894561230012),
(4, 1, 1, 100, 4, 9.90, 1, 7894561239912),
(4, 2, 1, 44, 4, 10.90, 1, 7894561239912),
(7, 1, 1, 100, 4, 9.90, 1, 7894561239444),
(7, 2, 1, 44, 4, 12.90, 1, 7894561239444),
(10, 1, 1, 60, 4, 6.90, 1, 7894561239333),
(10, 2, 1, 60, 4, 7.90, 1, 7894561239333),
(13, 1, 1, 62, 6, 4.99, 1, 7894561239111),
(13, 2, 1, 62, 6, 3.99, 1, 7894561239111),
(16, 1, 1, 60, 4, 6.90, 1, 7894561239222),
(16, 2, 1, 60, 4, 7.90, 1, 7894561239222),

--
(2, 3, 2, 100, 5, 11.90, 1, 7894561230012),
(2, 4, 2, 30, 5, 11.90, 1, 7894561230012),
(2, 5, 2, 30, 5, 11.90, 1, 7894561230012),
(5, 3, 2, 100, 4, 9.90, 1, 7894561239912),
(5, 4, 2, 44, 4, 10.90, 1, 7894561239912),
(5, 5, 2, 100, 4, 9.90, 1, 7894561239912),
(8, 3, 2, 100, 4, 9.90, 1, 7894561239444),
(8, 4, 2, 44, 4, 12.90, 1, 7894561239444),
(8, 5, 2, 44, 4, 12.90, 1, 7894561239444),
(11, 3, 2, 60, 4, 6.90, 1, 7894561239333),
(11, 4, 2, 60, 4, 7.90, 1, 7894561239333),
(11, 5, 2, 60, 4, 6.90, 1, 7894561239333),
(14, 3, 2, 62, 6, 4.99, 1, 7894561239111),
(14, 4, 2, 62, 6, 3.99, 1, 7894561239111),
(14, 5, 2, 62, 6, 3.99, 1, 7894561239111),
(17, 3, 2, 60, 4, 6.90, 1, 7894561239222),
(17, 4, 2, 60, 4, 7.90, 1, 7894561239222),
(17, 5, 2, 60, 4, 7.90, 1, 7894561239222),

--

(3, 6, 3, 10, 5, 13.90, 1, 7894561230012),
(5, 6, 3, 80, 4, 12.90, 1, 7894561239912),
(9, 6, 3, 30, 4, 14.90, 1, 7894561239444),
(12, 6, 3, 60, 4, 8.90, 1, 7894561239333),
(15, 6, 3, 72, 6, 9.99, 1, 7894561239111),
(18, 6, 3, 90, 4, 5.90, 1, 7894561239222);

insert into pedidos(cliente_id, centro_distribuicao_id, empresa_id, valor_frete, id_endereco, retira)
values
(1, 1, 1, 7.00, 1, 0),
(2, 4, 2, 9.00, 2, 0),
(3, 6, 3, 2.99, 3, 0);

insert into pedidos_itens(produto_id, empresa_id, centro_distribuicao_id, pedido_id, quantidade, observacoes)
values
(1, 1, 1, 1, 1, ''),
(4, 1, 1, 1, 2, ''),
(7, 1, 1, 1, 12, 'gelada'),

(2, 2, 4, 2, 2, 'gelada'),
(14, 2, 4, 2, 1, ''),
(16, 2, 4, 2, 2, ''),

(3, 3, 6, 3, 2, 'gelada'),
(9, 3, 6, 3, 24, ''),
(12, 3, 6, 3, 1, ''),
(18, 3, 6, 3, 4, '');

update pedidos set valor_pedido = 67.400, valor_desconto = 0, valor_total = 74.400, data_agendamento_entrega = '2021-09-07 12:00' where id = 1;
update pedidos set valor_pedido = 67.400, valor_desconto = 0, valor_total = 72.470, data_agendamento_entrega = '2021-09-08 19:30' where id = 2;
update pedidos set valor_pedido = 67.400, valor_desconto = 0, valor_total = 46.590, data_agendamento_entrega = '2021-09-09 14:00' where id = 3;
