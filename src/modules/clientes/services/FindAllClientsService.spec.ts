import 'reflect-metadata';
import FakeRepository from '../repositories/fakes/FakeClientRepository';
import FindAllClientsService from './FindAllClientsService';

let fakeRepository: FakeRepository;
let findAllProductsStockPriceService: FindAllClientsService;

describe('FindAllClientsService', () => {
  beforeEach(() => {
    fakeRepository = new FakeRepository();
    findAllProductsStockPriceService = new FindAllClientsService(
      fakeRepository,
    );
  });
  it('it should return an array of clients', async () => {
    const params = { page: 1, limit: 10 };
    const products = await findAllProductsStockPriceService.execute(params);

    expect(products.data).toHaveLength(2);
  });

  it('it should return an empty array', async () => {
    const params = { page: 10, limit: 10 };
    const { data } = await findAllProductsStockPriceService.execute(params);

    expect(data).toHaveLength(0);
  });
});
