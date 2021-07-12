import 'reflect-metadata';
import FakeRepository from '../repositories/fakes/FakeClientAddressRepository';
import FindAllClientAddressesService from './FindAllClientAddressesService';

let fakeRepository: FakeRepository;
let findAllClientAddressesService: FindAllClientAddressesService;

describe('FindAllClientAddressesService', () => {
  beforeEach(() => {
    fakeRepository = new FakeRepository();
    findAllClientAddressesService = new FindAllClientAddressesService(
      fakeRepository,
    );
  });
  it('it should return an array of client address', async () => {
    const params = { page: 1, limit: 10 };
    const products = await findAllClientAddressesService.execute(params);

    expect(products.data).toHaveLength(2);
  });

  it('it should return an empty array', async () => {
    const params = { page: 10, limit: 10 };
    const { data } = await findAllClientAddressesService.execute(params);

    expect(data).toHaveLength(0);
  });
});
