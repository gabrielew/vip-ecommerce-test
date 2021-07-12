import Company from '@modules/empresas/infra/typeorm/entities/Company';
import faker from 'faker';

const mocks: Company[] = [
  {
    id: faker.random.number(),
    descricao: faker.random.word(),
    cnpj: '32454237231213',
    status: 1,
  },
  {
    id: faker.random.number(),
    descricao: faker.random.word(),
    cnpj: '32454237231123',
    status: 0,
  },
];

export default mocks;
