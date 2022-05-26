import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  //Verifica se a categoria já existe
  const categoryAlreadyExists = categoriesRepository.findByName(name);

  categoriesRepository.create({ name, description });

  if (categoryAlreadyExists) {
    return res.status(400).json({ error: 'This category already exists!' });
  }
  return res.status(201).send();

});

categoriesRoutes.get('/', (req, res) => {
  const all = categoriesRepository.list();

  return res.json(all);
})

export { categoriesRoutes };