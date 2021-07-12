import 'reflect-metadata';
import FakeRepository from '../repositories/fakes/FakeOrderItemRepository';
import FindAllOrderItemsService from './FindAllOrderItemsService';

let fakeRepository: FakeRepository;
let findAllOrderItemsService: FindAllOrderItemsService;

describe('FindAllOrderItemsService', () => {
  beforeEach(() => {
    fakeRepository = new FakeRepository();
    findAllOrderItemsService = new FindAllOrderItemsService(fakeRepository);
  });
  it('it should return an array of order items', async () => {
    const params = { page: 1, limit: 10 };
    const products = await findAllOrderItemsService.execute(params);

    expect(products.data).toHaveLength(2);
  });

  it('it should return an empty array', async () => {
    const params = { page: 10, limit: 10 };
    const { data } = await findAllOrderItemsService.execute(params);

    expect(data).toHaveLength(0);
  });
});
