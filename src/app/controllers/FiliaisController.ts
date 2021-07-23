import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Filiais } from "../models/filiais";
class FiliaisController {
  async deleteFilial(req: Request, res: Response) {
    const results = await getRepository(Filiais).delete(req.params.id);
    return res.json(results);
  }
  async updateFilial(req: Request, res: Response) {
    const user = await getRepository(Filiais).findOne(req.params.id);
    if (user) {
      getRepository(Filiais).merge(user, req.body);
      const results = await getRepository(Filiais).save(user);
      return res.json(results);
    }
    return res.status(404).json({ msg: "Usuário não encontrado" });
  }
  async getFiliais(req: Request, res: Response) {
    const companyFilias = await getRepository(Filiais).find();
    return res.json(companyFilias);
  }
  async getFilial(req: Request, res: Response) {
    const companyFilias = await getRepository(Filiais).findOne(req.params.id);
    return res.json(companyFilias);
  }
  async store(req: Request, res: Response) {
    const repository = getRepository(Filiais);
    const { name } = req.body;
    const userExists = await repository.findOne({ where: { name } });
    if (userExists) {
      return res.sendStatus(409);
    }
    const Filiasall = await repository.create({
      name,
    });
    await repository.save(Filiasall);
    return res.json(Filiasall);
  }
}

export default new FiliaisController();
