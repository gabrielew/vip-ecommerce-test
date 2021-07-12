import 'reflect-metadata';
import FakeRepository from '../repositories/fakes/FakeCompanyRepository';
import FindAllCompaniesService from './FindAllCompaniesService';

let fakeRepository: FakeRepository;
let findAllCompaniesService: FindAllCompaniesService;

describe('FindAllCompaniesService', () => {
  beforeEach(() => {
    fakeRepository = new FakeRepository();
    findAllCompaniesService = new FindAllCompaniesService(fakeRepository);
  });
  it('it should return an array of companies', async () => {
    const params = { page: 1, limit: 10 };
    const companies = await findAllCompaniesService.execute(params);

    expect(companies.data).toHaveLength(2);
  });

  it('it should return an empty array', async () => {
    const params = { page: 10, limit: 10 };
    const { data } = await findAllCompaniesService.execute(params);

    expect(data).toHaveLength(0);
  });
});
