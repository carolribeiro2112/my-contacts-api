const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CategoriesRepository.findAll();

    response.json(categories);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoriesRepository.create({ name });

    response.json(category);
  }

  async show(request, response) {
    const { name } = request.params;
    const category = await CategoriesRepository.findByName(name);

    if (!category) {
      return response.status(404).json({ error: 'Category not found' });
    }

    response.json(category);
  }
}

module.exports = new CategoryController();
