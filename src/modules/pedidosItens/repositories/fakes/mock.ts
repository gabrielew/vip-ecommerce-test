import OrderItem from '@modules/pedidosItens/infra/typeorm/entities/OrderItem';
import faker from 'faker';

const mocks: OrderItem[] = [
  {
    id: faker.random.number(),
    centro_distribuicao_id: faker.random.number(),
    empresa_id: faker.random.number(),
    pedido_id: faker.random.number(),
    produto_id: faker.random.number(),
    observacoes: faker.random.words(),
    quantidade: faker.random.number(),
  },
  {
    id: faker.random.number(),
    centro_distribuicao_id: faker.random.number(),
    empresa_id: faker.random.number(),
    pedido_id: faker.random.number(),
    produto_id: faker.random.number(),
    observacoes: faker.random.words(),
    quantidade: faker.random.number(),
  },
];

export default mocks;
