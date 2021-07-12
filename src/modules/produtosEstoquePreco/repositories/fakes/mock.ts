import ProductsStockPrice from '@modules/produtosEstoquePreco/infra/typeorm/entities/ProductsStockPrice';
import faker from 'faker';

const mocks: ProductsStockPrice[] = [
  {
    id: faker.random.number(),
    estoque: faker.random.float(),
    estoque_seguranca: faker.random.float(),
    preco_venda: faker.random.float(),
    codigo_barras: faker.random.word(),
    status: 0,
    centro_distribuicao_id: faker.random.number(),
    produto_id: faker.random.number(),
    empresa_id: faker.random.number(),
  },
  {
    id: faker.random.number(),
    estoque: faker.random.float(),
    estoque_seguranca: faker.random.float(),
    preco_venda: faker.random.float(),
    codigo_barras: faker.random.word(),
    status: 0,
    centro_distribuicao_id: faker.random.number(),
    produto_id: faker.random.number(),
    empresa_id: faker.random.number(),
  },
];

export default mocks;
