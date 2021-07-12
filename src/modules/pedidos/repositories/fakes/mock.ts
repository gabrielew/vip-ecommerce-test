import Order from '@modules/pedidos/infra/typeorm/entities/Order';
import faker from 'faker';

const discountValue = faker.random.number(10);
const orderValue = faker.random.number(100);
const totalValue = orderValue - discountValue;

const mocks: Order[] = [
  {
    id: faker.random.number(),
    valor_frete: faker.random.number(),
    retira: faker.random.number(),
    valor_pedido: orderValue,
    valor_desconto: discountValue,
    valor_total: totalValue,
    data_pedido: faker.date.recent(),
    data_agendamento_entrega: faker.date.future(),
    data_entrega: faker.date.future(),
    id_endereco: faker.random.number(),
    centro_distribuicao_id: faker.random.number(),
    cliente_id: faker.random.number(),
    empresa_id: faker.random.number(),
  },
  {
    id: faker.random.number(),
    valor_frete: faker.random.number(),
    retira: faker.random.number(),
    valor_pedido: orderValue,
    valor_desconto: discountValue,
    valor_total: totalValue,
    data_pedido: faker.date.recent(),
    data_agendamento_entrega: faker.date.future(),
    data_entrega: faker.date.future(),
    id_endereco: faker.random.number(),
    centro_distribuicao_id: faker.random.number(),
    cliente_id: faker.random.number(),
    empresa_id: faker.random.number(),
  },
];

export default mocks;
