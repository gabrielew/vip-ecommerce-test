import Product from '@modules/produtos/infra/typeorm/entities/Product';
import faker from 'faker';

const mocks: Product[] = [
  {
    id: faker.random.number(),
    descricao: faker.random.words(),
    unidade_medida: 'UN',
    bebida_alcoolica: 0,
    pesavel: 0,
    empresa_id: faker.random.number(),
  },
  {
    id: faker.random.number(),
    descricao: faker.random.words(),
    unidade_medida: 'UN',
    bebida_alcoolica: 1,
    pesavel: 1,
    empresa_id: faker.random.number(),
  },
];

export default mocks;
