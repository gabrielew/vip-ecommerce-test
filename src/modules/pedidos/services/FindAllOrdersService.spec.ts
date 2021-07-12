import 'reflect-metadata';
import FakeRepository from '../repositories/fakes/FakeOrderRepository';
import FindAllOrdersService from './FindAllOrdersService';

let fakeRepository: FakeRepository;
let findAllOrdersService: FindAllOrdersService;

describe('FindAllOrdersService', () => {
  beforeEach(() => {
    fakeRepository = new FakeRepository();
    findAllOrdersService = new FindAllOrdersService(fakeRepository);
  });
  it('it should return an array of orders', async () => {
    const params = { page: 1, limit: 10 };
    const products = await findAllOrdersService.execute(params);

    expect(products.data).toHaveLength(2);
  });

  it('it should return an empty array', async () => {
    const params = { page: 10, limit: 10 };
    const { data } = await findAllOrdersService.execute(params);

    expect(data).toHaveLength(0);
  });
});
