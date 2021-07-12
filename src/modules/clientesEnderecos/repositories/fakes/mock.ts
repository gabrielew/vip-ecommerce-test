import ClientAddress from '@modules/clientesEnderecos/infra/typeorm/entities/ClientAddress';
import faker from 'faker';

const mocks: ClientAddress[] = [
  {
    id: faker.random.number(),
    logradouro: faker.address.streetName(),
    bairro: faker.address.streetAddress(),
    cidade: faker.address.city(),
    numero: String(faker.random.number()),
    complemento: faker.address.secondaryAddress(),
    uf: faker.address.stateAbbr(),
    cep: faker.address.zipCode(),
    cliente_id: faker.random.number(),
  },
  {
    id: faker.random.number(),
    logradouro: faker.address.streetName(),
    bairro: faker.address.streetAddress(),
    cidade: faker.address.city(),
    numero: String(faker.random.number()),
    complemento: faker.address.secondaryAddress(),
    uf: faker.address.stateAbbr(),
    cep: faker.address.zipCode(),
    cliente_id: faker.random.number(),
  },
];

export default mocks;
