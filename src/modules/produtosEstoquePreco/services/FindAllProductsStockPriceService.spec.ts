import 'reflect-metadata';
import FakeRepository from '../repositories/fakes/FakeProductsStockPriceRepository';
import FindAllProductsStockPriceService from './FindAllProductsStockPriceService';

let fakeRepository: FakeRepository;
let findAllProductsStockPriceService: FindAllProductsStockPriceService;

describe('FindAllProductsStockPriceService', () => {
  beforeEach(() => {
    fakeRepository = new FakeRepository();
    findAllProductsStockPriceService = new FindAllProductsStockPriceService(
      fakeRepository,
    );
  });
  it('it should return an array of products stock price', async () => {
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
