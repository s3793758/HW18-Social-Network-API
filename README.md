# Social Network API

![Mongoose](https://img.shields.io/badge/6.4.0-0?label=Mongoose&style=for-the-badge&labelColor=white&color=black) ![Express](https://img.shields.io/badge/4.18.1-0?label=Express&style=for-the-badge&labelColor=white&color=black) ![mongoDB](https://img.shields.io/badge/2.2.1-0?label=MongoDB&style=for-the-badge&labelColor=white&color=black)

## Introduction

RESTful social network back end allows developers to perform CRUD API calls.

This CLI application uses npm packages `Express`, `Mongoose` and `nodemon`.

## Installation

### 0. Required

| Programs   | Download links                                    |
| ---------- | ------------------------------------------------- |
| `Node`     | https://nodejs.org/en/download/                   |
| `MongoDB`  | https://www.mongodb.com/docs/manual/installation/ |
| `Insomnia` | https://insomnia.rest/download                    |

### 1. Git clone and go inside

```sh
git clone https://github.com/leoelicos/social-network-api.git

cd 02-Homework
```

### 2. Install dependencies, (optionally) run seed

```sh
cd ..

npm install

```

## Usage

1. Start the server: `npm start`

2. Access the APIs with Insomnia

## Video Demo

Full Demo [Video] https://drive.google.com/file/d/11k0bfYXNqj6kMVapmXi5hh0ciK_pG3UH/view

## Social Network API

### Root endpoint and API endpoint

| Root endpoint           | Endpoint |
| ----------------------- | -------- |
| `http://localhost:3001` | `/api`   |

## Example of API response

Request:

```sh
GET http://localhost:3001/api/users/62b889b433eb59d6a552eb3e
```

Response:

```sh
[
	{
		"_id": "62d4a4170c0db909162f3ae7",
		"username": "Mike",
		"email": "freeee@gmail.com",
		"thoughts": [
			"62d4a46b0c0db909162f3af8"
		],
		"friends": [
			"62d4a5fe0c0db909162f3b2c"
		],
		"__v": 4
	},
	{
		"_id": "62d4a4220c0db909162f3ae9",
		"username": "Mark",
		"email": "mark@gmail.com",
		"thoughts": [
			"62d4a6540c0db909162f3b3b"
		],
		"friends": [],
		"__v": 1
	},
	{
		"_id": "62d4a42c0c0db909162f3aeb",
		"username": "Sarah",
		"email": "hisarah@test.com",
		"thoughts": [
			"62d4a48a0c0db909162f3afe",
			"62d4a4930c0db909162f3b02",
			"62d4a4bc0c0db909162f3b0c"
		],
		"friends": [],
		"__v": 5
	},
	{
		"_id": "62d4a5fe0c0db909162f3b2c",
		"username": "test",
		"email": "test@gmail.com",
		"thoughts": [],
		"friends": [],
		"__v": 0
	}
]

```

## Screenshots

### Screenshot: Insomnia GET Users

![gif] (18-nosql-homework-demo-01.gif)

## Credits

- BCS Resources

## License

&copy; Muhamad Sahid <mas152q@gmail.com>

Licensed under the [MIT License](./LICENSE).
