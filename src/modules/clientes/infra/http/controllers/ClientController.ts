import FindAllClientsService from '@modules/clientes/services/FindAllClientsService';
import FindByModelService from '@modules/clientes/services/FindByModelService';
import FindByModel2Service from '@modules/clientes/services/FindByModel2Service';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class ClientController {
  async index(request: Request, response: Response): Promise<Response> {
    try {
      const { limit, page } = request.query;

      const findAllService = container.resolve(FindAllClientsService);
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

  async findByModel(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const findByModelService = container.resolve(FindByModelService);

      const findByModel = await findByModelService.execute(Number(id));

      return response.status(200).json(findByModel);
    } catch (err) {
      return response.status(400).json(err);
    }
  }

  async findByModel2(request: Request, response: Response): Promise<Response> {
    try {
      const findByModel2Service = container.resolve(FindByModel2Service);

      const findByModel2 = await findByModel2Service.execute(
        String(request.query.type),
        Number(request.query.company_id),
      );

      return response.status(200).json(findByModel2);
    } catch (err) {
      return response.status(400).json(err);
    }
  }
}
