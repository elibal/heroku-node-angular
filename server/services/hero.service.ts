import { Request, Response } from 'express';

async function getHeroes(req: Request, res: Response) {
  try {
    const heroes = [{ name: 'a', description: 'aa', id: 1},
                    { name: 'b', description: 'bb', id: 2},
                    { name: 'c', description: 'cc', id: 3},
                    { name: 'd', description: 'dd', id: 5}];
    res.status(200).json(heroes);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function postHero(req: Request, res: Response) {
  const hero = {
    name: req.body.name,
    description: req.body.description,
    id: undefined
  };
  hero.id = Math.random() * 100; // `Hero${hero.name}`;

  try {
    res.status(201).json(hero);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function putHero(req: Request, res: Response) {
  const hero = {
    id: req.params.id,
    name: req.body.name,
    description: req.body.description
  };

  try {
    const partitionKey = hero.id;
    res.status(200).json(hero);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteHero(req: Request, res: Response) {
  const { id } = req.params;

  try {
    res.status(200).json(id);
  } catch (error) {
    res.status(500).send(error);
  }
}

export default { getHeroes, postHero, putHero, deleteHero };
