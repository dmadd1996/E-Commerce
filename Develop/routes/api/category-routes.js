const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [Product]
  })
    .then((categories) => res.json(categories))
    .catch((error) => res.status(500).json(error))
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
    // be sure to include its associated Products
    include: [Product]
  })
  .then((categories) => res.json(categories))
  .catch((error) => res.status(500).json(error))
});

router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
    .then(ecommerce_db => res.json(ecommerce_db))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(ecommerce_db => {
      if (!ecommerce_db[0]) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(ecommerce_db);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
        id: req.params.id
    }
})
    .then(ecommerce_db => {
        if (!ecommerce_db) {
            res.status(404).json({ message: 'No category found with this id' });
            return;
        }
        res.json(ecommerce_db);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
