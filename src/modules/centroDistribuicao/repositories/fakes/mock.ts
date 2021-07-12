import DistributionCenter from '@modules/centroDistribuicao/infra/typeorm/entities/DistributionCenter';
import faker from 'faker';

const mocks: DistributionCenter[] = [
  {
    id: faker.random.number(),
    numero_cd: faker.random.number(),
    empresa_id: faker.random.number(),
  },
  {
    id: faker.random.number(),
    numero_cd: faker.random.number(),
    empresa_id: faker.random.number(),
  },
];

export default mocks;
