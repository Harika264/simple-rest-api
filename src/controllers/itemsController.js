// In-memory store (replace with a database in production)
let items = [
  { id: 1, name: "Apple", description: "A red fruit", createdAt: new Date().toISOString() },
  { id: 2, name: "Banana", description: "A yellow fruit", createdAt: new Date().toISOString() },
];
let nextId = 3;
 
// GET /api/items
const getAll = (req, res) => {
  res.json({ success: true, count: items.length, data: items });
};
 
// GET /api/items/:id
const getOne = (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ success: false, message: "Item not found" });
  res.json({ success: true, data: item });
};
 
// POST /api/items
const create = (req, res) => {
  const { name, description } = req.body;
  if (!name) return res.status(400).json({ success: false, message: "Name is required" });
 
  const newItem = { id: nextId++, name, description: description || "", createdAt: new Date().toISOString() };
  items.push(newItem);
  res.status(201).json({ success: true, data: newItem });
};
 
// PUT /api/items/:id
const update = (req, res) => {
  const index = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ success: false, message: "Item not found" });
 
  const { name, description } = req.body;
  items[index] = { ...items[index], ...(name && { name }), ...(description !== undefined && { description }) };
  res.json({ success: true, data: items[index] });
};
 
// DELETE /api/items/:id
const remove = (req, res) => {
  const index = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ success: false, message: "Item not found" });
 
  items.splice(index, 1);
  res.json({ success: true, message: "Item deleted" });
};
 
module.exports = { getAll, getOne, create, update, remove };
 
