import 'reflect-metadata';
import FakeRepository from '../repositories/fakes/FakeDistributionCenterRepository';
import FindAllDistributionCenterService from './FindAllDistributionCenterService';

let fakeRepository: FakeRepository;
let findAllDistributionCenter: FindAllDistributionCenterService;

describe('FindAllDistributionCenterService', () => {
  beforeEach(() => {
    fakeRepository = new FakeRepository();
    findAllDistributionCenter = new FindAllDistributionCenterService(
      fakeRepository,
    );
  });
  it('it should return an array of distribution center', async () => {
    const params = { page: 1, limit: 10 };
    const distributionCenter = await findAllDistributionCenter.execute(params);

    expect(distributionCenter.data).toHaveLength(2);
  });

  it('it should return an empty array', async () => {
    const params = { page: 10, limit: 10 };
    const { data } = await findAllDistributionCenter.execute(params);

    expect(data).toHaveLength(0);
  });
});
