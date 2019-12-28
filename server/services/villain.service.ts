import { Request, Response } from 'express';

async function getVillains(req: Request, res: Response) {
  try {
    const villains = [
    { name: 'x', description: 'xx', id: 2},
    { name: 'y', description: 'yy', id: 3},
    { name: 'z', description: 'zz', id: 4}];
    res.status(200).json(villains);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function postVillain(req: Request, res: Response) {
  const villain = {
    name: req.body.name,
    description: req.body.description,
    id: undefined
  };
  villain.id = `Villain${villain.name}`;

  try {
    res.status(201).json(villain);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function putVillain(req: Request, res: Response) {
  const villain = {
    id: req.params.id,
    name: req.body.name,
    description: req.body.description
  };

  try {
    res.status(200).json(villain);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteVillain(req: Request, res: Response) {
  const { id } = req.params;

  try {
    res.status(200).json(id);
  } catch (error) {
    res.status(500).send(error);
  }
}

export default { getVillains, postVillain, putVillain, deleteVillain };
