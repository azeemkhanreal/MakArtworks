const getOne = (model) => async (req, res) => {
  try {
    const doc = await model.findById(req.params.id);
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createOne = (model) => async (req, res) => {
  try {
    const body = req.body;
    const doc = await model.create(body);
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAll = (model) => async (req, res) => {
  try {
    const docs = await model.find();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateOne = (model) => async (req, res) => {
  try {
    const doc = await model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const removeOne = (model) => async (req, res) => {
  try {
    const doc = await model.findByIdAndRemove(req.params.id);
    res.status(201).json({ ok: 1 });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

const controllers = (model) => ({
  getOne: getOne(model),
  createOne: createOne(model),
  getAll: getAll(model),
  updateOne: updateOne(model),
  removeOne: removeOne(model),
});

module.exports = controllers;
