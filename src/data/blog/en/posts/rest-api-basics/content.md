
REST is an architectural style for designing networked applications using resources and standard HTTP semantics. This article covers core principles and practical guidance for building RESTful APIs.

## Core principles

**Resources:** model entities as resources with unique URLs.
**HTTP verbs:** use methods semantically (GET for read, POST to create, PUT/PATCH to update, DELETE to remove).
**Statelessness:** each request contains all necessary information; servers do not keep client state between requests.

## Design tips

- Use nouns for endpoints (e.g., `/users/123/orders`).
- Return appropriate status codes (201 Created for new resources, 204 No Content for successful delete).
- Version your API (e.g., `/v1/`) to allow non-breaking changes.

## Security and performance

- Use HTTPS for encryption.
- Support pagination and filtering to avoid large responses.


## Example: Simple RESTful API with Express

```js
const express = require('express');
const app = express();
app.use(express.json());

let users = [{ id: 1, name: 'Alice' }];

// GET all users
app.get('/users', (req, res) => res.json(users));

// GET a user by ID
app.get('/users/:id', (req, res) => {
	const user = users.find(u => u.id == req.params.id);
	if (user) res.json(user);
	else res.status(404).json({ error: 'User not found' });
});

// POST create a new user
app.post('/users', (req, res) => {
	const newUser = { id: Date.now(), ...req.body };
	users.push(newUser);
	res.status(201).json(newUser);
});

app.listen(3000, () => console.log('API running on port 3000'));
```

*This example shows how to build a minimal RESTful API for user management.*

## Summary

RESTful design emphasizes clarity, predictability, and leveraging HTTP semantics. Many systems benefit from REST, though other styles (GraphQL, gRPC) may suit specific needs.
