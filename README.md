# Launch API

This project is a TypeScript-based API implemented as [Edge Functions](https://vercel.com/docs/functions/edge-functions). Built with [Hono](https://hono.dev/) & [Prisma](https://prisma.io).

## Project Structure

- `api/`: Contains the main TypeScript file for the API.
- `prisma/`: Contains the Prisma schema and migrations for the database.
- `build.mjs`: The build script for the project.

## Getting Started

1. Clone the repository.
2. Install the dependencies with `yarn install`.
3. Start the development server with `yarn dev`.

## Scripts

- `yarn start`: Starts the Vercel development server.
- `yarn build`: Builds the project using the build script.
- `yarn build:dev`: Builds the project in development mode with esbuild.
- `yarn deploy`: Deploys the project on Vercel.
- `yarn serve`: Serves the built project with nodemon.
- `yarn dev`: Runs the build and serve scripts concurrently.
- `yarn prisma:generate`: Generates Prisma client.
- `yarn prisma:migrate`: Runs Prisma migrations.

## Database Schema

The database schema is defined in `prisma/schema.prisma`.

## Contributing

Contributions are welcome. Please open an issue or submit a PR.

## License

This project is licensed under the MIT License.
