import IClientRepository from '@modules/clientes/repositories/IClientRepository';
import ClientAddress from '@modules/clientesEnderecos/infra/typeorm/entities/ClientAddress';
import Company from '@modules/empresas/infra/typeorm/entities/Company';
import Order from '@modules/pedidos/infra/typeorm/entities/Order';
import OrderItem from '@modules/pedidosItens/infra/typeorm/entities/OrderItem';
import Product from '@modules/produtos/infra/typeorm/entities/Product';
import ProductsStockPrice from '@modules/produtosEstoquePreco/infra/typeorm/entities/ProductsStockPrice';
import { PaginationReturn, Params } from '@shared/interfaces';
import { getRepository, Repository } from 'typeorm';
import Client from '../entities/Client';
import { IntegrationModelOne } from './interfaces';

class ClientRepository implements IClientRepository {
  private ormRepository: Repository<Client>;

  constructor() {
    this.ormRepository = getRepository(Client);
  }

  public async findAll(params: Params): Promise<PaginationReturn<Client>> {
    const { page, limit } = params;
    const [data, total] = await this.ormRepository.findAndCount({
      skip: page,
      take: limit,
      relations: ['empresa_id'],
    });

    return { data, total };
  }

  public async findByModel(company_id: number): Promise<IntegrationModelOne[]> {
    const query = await getRepository(Client)
      .createQueryBuilder('clientes')
      .leftJoinAndSelect(
        ClientAddress,
        'clientes_enderecos',
        'clientes_enderecos.cliente_id = clientes.id',
      )
      .leftJoinAndSelect(Order, 'pedidos', 'pedidos.cliente_id = clientes.id')
      .leftJoinAndSelect(
        OrderItem,
        'pedidos_itens',
        'pedidos_itens.pedido_id = pedidos.id',
      )
      .leftJoin(Product, 'produtos', 'pedidos_itens.produto_id = produtos.id')
      .innerJoinAndSelect(
        ProductsStockPrice,
        'produtos_estoque_preco',
        'produtos_estoque_preco.centro_distribuicao_id = pedidos_itens.centro_distribuicao_id',
      )

      .leftJoin(Company, 'empresas', 'clientes.empresa_id = empresas.id')
      .where('empresas.id = :company_id', { company_id })
      .select([
        'clientes.nome',
        'clientes.sobrenome',
        'clientes.email',
        'clientes.cpf',
        'clientes_enderecos.logradouro',
        'clientes_enderecos.numero',
        'clientes_enderecos.bairro',
        'clientes_enderecos.complemento',
        'clientes_enderecos.cidade',
        'clientes_enderecos.uf',
        'clientes_enderecos.cep',
        'pedidos.valor_total',
        'pedidos.data_pedido',
        'pedidos.data_agendamento_entrega',
        'pedidos_itens.produto_id',
        'produtos.descricao',
        'produtos_estoque_preco.preco_venda',
        'pedidos_itens.quantidade',
        'pedidos_itens.observacoes',
      ])
      .getRawMany();

    const items = await getRepository(OrderItem).find({
      where: {
        empresa_id: company_id,
      },
    });

    const model: IntegrationModelOne[] = [];

    query.map(item => {
      return model.push({
        nome_completo: `${item.clientes_nome} ${item.clientes_sobrenome}`,
        email: item.clientes_email,
        cpf: item.clientes_cpf,
        endereco: {
          logradouro: item.clientes_enderecos_logradouro,
          numero: item.clientes_enderecos_numero,
          bairro: item.clientes_enderecos_bairro,
          complemento: item.clientes_enderecos_complemento,
          cidade: item.clientes_enderecos_cidade,
          uf: item.clientes_enderecos_uf,
          cep: item.clientes_enderecos_cep,
        },
        pedido: {
          valor_total: item.pedidos_valor_total,
          data_pedido: item.pedidos_data_pedido,
          data_agendamento_entrega: item.pedidos_data_agendamento_entrega,
          quantidade_itens: items.length,
          itens: items.map(element => ({
            produto_id: item.pedidos_itens_produto_id,
            descricao: item.produtos_descricao,
            valor_produto: item.produtos_estoque_preco_preco_venda,
            quantidade_pedida: element.quantidade,
            observacoes: element.observacoes,
          })),
        },
      });
    });

    return model;
  }

  public async findByModel2(type: string, company_id: number): Promise<any> {
    if (type === 'clientes') {
      return getRepository(ClientAddress).find({
        relations: ['cliente_id'],
      });
    }
    if (type === 'pedidos') {
      return getRepository(Order).find();
    }

    return getRepository(OrderItem).find({ where: { empresa_id: company_id } });
  }
}

export default ClientRepository;
