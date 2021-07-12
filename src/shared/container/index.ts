import { container } from 'tsyringe';
import ICompanyRepository from '@modules/empresas/repositories/ICompanyRepository';
import CompanyRepository from '@modules/empresas/infra/typeorm/repositories/CompanyRepository';
import IDistributionCenterRepository from '@modules/centroDistribuicao/repositories/IDistributionCenterRepository';
import DistributionCenterRepository from '@modules/centroDistribuicao/infra/typeorm/repositories/DistributionCenterRepository';
import IProductRepository from '@modules/produtos/repositories/IProductRepository';
import ProductRepository from '@modules/produtos/infra/typeorm/repositories/ProductRepository';
import IProductsStockPriceRepository from '@modules/produtosEstoquePreco/repositories/IProductsStockPriceRepository';
import ProductsStockPriceRepository from '@modules/produtosEstoquePreco/infra/typeorm/repositories/ProductsStockPriceRepository';
import IClientRepository from '@modules/clientes/repositories/IClientRepository';
import ClientRepository from '@modules/clientes/infra/typeorm/repositories/ClientRepository';
import IClientAddressRepository from '@modules/clientesEnderecos/repositories/IClientAddressRepository';
import ClientAddressRepository from '@modules/clientesEnderecos/infra/typeorm/repositories/ClientAddressRepository';
import IOrderRepository from '@modules/pedidos/repositories/IOrderRepository';
import OrderRepository from '@modules/pedidos/infra/typeorm/repositories/OrderRepository';
import IOrderItemRepository from '@modules/pedidosItens/repositories/IOrderItemRepository';
import OrderItemRepository from '@modules/pedidosItens/infra/typeorm/repositories/OrderItemRepository';

container.registerSingleton<ICompanyRepository>(
  'CompanyRepository',
  CompanyRepository,
);

container.registerSingleton<IDistributionCenterRepository>(
  'DistributionCenterRepository',
  DistributionCenterRepository,
);

container.registerSingleton<IProductRepository>(
  'ProductRepository',
  ProductRepository,
);

container.registerSingleton<IProductsStockPriceRepository>(
  'ProductsStockPriceRepository',
  ProductsStockPriceRepository,
);

container.registerSingleton<IClientRepository>(
  'ClientRepository',
  ClientRepository,
);

container.registerSingleton<IClientAddressRepository>(
  'ClientAddressRepository',
  ClientAddressRepository,
);

container.registerSingleton<IOrderRepository>(
  'OrderRepository',
  OrderRepository,
);

container.registerSingleton<IOrderItemRepository>(
  'OrderItemRepository',
  OrderItemRepository,
);
