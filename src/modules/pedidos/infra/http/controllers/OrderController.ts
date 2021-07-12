import FindAllOrdersService from '@modules/pedidos/services/FindAllOrdersService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class OrderController {
  async index(request: Request, response: Response): Promise<Response> {
    try {
      const { limit, page } = request.query;

      const findAllService = container.resolve(FindAllOrdersService);
      const findAll = await findAllService.execute({
        limit: Number(limit),
        page: Number(page),
      });

      return response.status(200).json({
        data: findAll.data,
        page: Number(page),
        total: findAll.total,
      });
    } catch (err) {
      return response.status(400).json(err);
    }
  }
}
