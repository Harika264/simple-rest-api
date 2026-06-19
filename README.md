# Simple REST API

A clean, simple REST API built with **Node.js** and **Express**.

## Setup

```bash
npm install
npm run dev     # development (auto-reload)
npm start       # production
```

Server starts at `http://localhost:3000`

---

## API Endpoints

### Health Check
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Check if API is running |

### Items (`/api/items`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/items` | Get all items |
| GET | `/api/items/:id` | Get a single item |
| POST | `/api/items` | Create a new item |
| PUT | `/api/items/:id` | Update an item |
| DELETE | `/api/items/:id` | Delete an item |

---

## Examples

**Create an item**
```bash
curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -d '{"name": "Orange", "description": "A citrus fruit"}'
```

**Get all items**
```bash
curl http://localhost:3000/api/items
```

**Update an item**
```bash
curl -X PUT http://localhost:3000/api/items/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Green Apple"}'
```

**Delete an item**
```bash
curl -X DELETE http://localhost:3000/api/items/1
```

---

## Project Structure

```
src/
├── index.js                  # App entry point
├── routes/
│   └── items.js              # Route definitions
├── controllers/
│   └── itemsController.js    # Business logic
└── middleware/
    └── errorHandler.js       # Error handling
```

## Next Steps

- Add a database (MongoDB, PostgreSQL, SQLite)
- Add authentication (JWT)
- Add input validation (Joi, Zod)
- Add tests (Jest, Supertest)
