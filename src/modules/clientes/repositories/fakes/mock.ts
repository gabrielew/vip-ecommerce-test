import Client from '@modules/clientes/infra/typeorm/entities/Client';
import faker from 'faker';

const mocks: Client[] = [
  {
    id: faker.random.number(),
    nome: faker.name.firstName(),
    sobrenome: faker.name.lastName(),
    email: faker.internet.email(),
    cpf: String(faker.random.number(11)),
    verificado: 0,
    empresa_id: faker.random.number(),
  },
  {
    id: faker.random.number(),
    nome: faker.name.firstName(),
    sobrenome: faker.name.lastName(),
    email: faker.internet.email(),
    cpf: String(faker.random.number(11)),
    verificado: 0,
    empresa_id: faker.random.number(),
  },
];

export default mocks;
