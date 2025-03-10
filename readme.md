# Search Engine API

A location search engine API built with Node.js and Express, featuring PostgreSQL integration and comprehensive testing capabilities.

## Features

- **Express Framework**: Fast and minimalist web framework for Node.js
- **PostgreSQL Integration**: Uses `pg` package for database connectivity
- **CORS Support**: Built-in Cross-Origin Resource Sharing support
- **Environment Configuration**: Uses `dotenv` for environment variable management
- **Testing Framework**: Jest testing with Babel support
- **Development Tools**: Nodemon for automatic server restart during development

## Installation

1. Clone the repository

   ```bash
   git clone https://github.com/PriaAdmaja/simple-search-engine.git
   cd simple-search-engine
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:

   ```env
   DB_CONNECTION=your_db_connection
   DB_HOST=your_db_host
   DB_PORT=your_db_port
   DB_DATABASE=your_db_main
   DB_USERNAME=your_db_username
   DB_PASSWORD=your_db_password
   PORT=your_project_port
   ```

4. Start the server

```bash
npm start
```

## Development

For development with automatic restart:

```bash
npm run dev
```

## Testing

Run tests using Jest:

```bash
npm test
```

## Dependencies

### Main Dependencies

- `express`: ^4.21.2
- `cors`: ^2.8.5
- `dotenv`: ^16.4.7
- `pg`: ^8.13.3 (PostgreSQL client)

### Development Dependencies

- `jest`: ^29.7.0 (Testing framework)
- `nodemon`: ^3.1.9 (Development server)
- `@babel/preset-env`: ^7.26.9 (Babel configuration)
- `babel-jest`: ^29.7.0 (Jest Babel integration)

## Project Structure

project-root/
│
├── src/
│ ├── cache/ # Caching system implementation
│ └── routes/ # Route definitions
├── tests/ # Test files
├── index.js # Main application entry point
├── .env.example # Environment variables template
├── package.json # Project dependencies and scripts
└── README.md # This file

## Configuration

The server can be configured using environment variables:

- `PORT`: The port number the server listens on (default: 8000)
- PostgreSQL connection details (to be added to `.env`)

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

ISC License

Copyright (c) 2023 Pria Admaja

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
