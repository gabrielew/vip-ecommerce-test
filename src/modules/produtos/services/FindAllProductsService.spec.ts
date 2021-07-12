import 'reflect-metadata';
import FakeRepository from '../repositories/fakes/FakeProductRepository';
import FindAllProductsService from './FindAllProductsService';

let fakeRepository: FakeRepository;
let findAllProductsService: FindAllProductsService;

describe('FindAllProductsService', () => {
  beforeEach(() => {
    fakeRepository = new FakeRepository();
    findAllProductsService = new FindAllProductsService(fakeRepository);
  });
  it('it should return an array of products', async () => {
    const params = { page: 1, limit: 10 };
    const products = await findAllProductsService.execute(params);

    expect(products.data).toHaveLength(2);
  });

  it('it should return an empty array', async () => {
    const params = { page: 10, limit: 10 };
    const { data } = await findAllProductsService.execute(params);

    expect(data).toHaveLength(0);
  });
});
