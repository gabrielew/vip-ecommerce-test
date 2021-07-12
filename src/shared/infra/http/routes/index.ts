import { Router } from 'express';
import companyRouter from '@modules/empresas/infra/http/routes/company.routes';
import distributionCenterRouter from '@modules/centroDistribuicao/infra/http/routes/distributionCenter.routes';
import productRouter from '@modules/produtos/infra/http/routes/product.routes';
import productsStockPriceRouter from '@modules/produtosEstoquePreco/infra/http/routes/productsStockPrice.routes';
import clientRouter from '@modules/clientes/infra/http/routes/client.routes';
import ClientAddressRouter from '@modules/clientesEnderecos/infra/http/routes/clientAddress.routes';
import orderRouter from '@modules/pedidos/infra/http/routes/order.routes';
import orderItemRouter from '@modules/pedidosItens/infra/http/routes/orderItem.routes';

const routes = Router();

routes.use('/empresas', companyRouter);
routes.use('/centro-distribuicao', distributionCenterRouter);
routes.use('/produtos', productRouter);
routes.use('/produtos-estoque-preco', productsStockPriceRouter);
routes.use('/clientes', clientRouter);
routes.use('/clientes-enderecos', ClientAddressRouter);
routes.use('/pedidos', orderRouter);
routes.use('/pedidos-itens', orderItemRouter);

export default routes;
