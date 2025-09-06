# itihaas-client

#### The frontend application for Itihaas (itihaas-api)

## About Itihaas

Itihaas is a comprehensive application where users can view/read/learn and cite about Indian History. The application will cover all relevant events within the geographical extent of the Indian subcontinent and in the timeline between 7000 BCE (Mehrgarh Civilization, Indus Valley Civilization) and 1947 (Indian Independence). The entire process for the consequent fully functional application is divided into the following steps, in the written order.

## Information Categories

- Dynasties / Kingdoms
- Rulers / Kings
- Wars

## Features

- Access individual or list of dynasties with customized or full data collection.
- Access dynasties list with extended information via queries.
- Access individual or list of rulers with customized or full data collection.
- Access rulers list with extended information via queries.
- Access individual or list of wars with customized or full data collection.
- Access wars list with extended information via queries.
- Perform advanced filtering and sorting via the client app ([itihaas.dev](https://itihaas.dev)), or via HTTP requests with `itihaas-api` through dynasties, rulers, and wars to access information.
- Gain access to open-source articles, further reading sources, and additional data regarding an entity (dynasty/war/ruler).
- View chronological structure of Indian history.
- Search feature: Perform seamless search via the client app ([itihaas.dev](https://itihaas.dev)), or through HTTP requests with `itihaas-api`, while customizing requests for additional information within search.
- Platform Growth: Provides a platform to help Itihaas grow by user submissions for new entries, existing fixes and bugs and updating current info within the catalog database.

## Open API (Itihaas API)

[`itihaas-api`](https://github.com/sunillshastry/itihaas-api) provides free to use REST API for public usage. The REST API comes with pre-built rate-limiting, RESTful pattern, and requires user registration for API key. Please check the [documentation](https://github.com/sunillshastry/itihaas-api) to learn more about `itihaas-api`.

## Local Setup

### Using Node

Create a local build/development setup with Node using the following steps.

1. Make sure `Node` (minimum v20) is installed on your system. You can install it for your device from the [Official Node](https://nodejs.org/) website. Alternatively, you can install it via [Homebrew](https://formulae.brew.sh/formula/node).
2. You can confirm if the `Node` installation was successful by running the following command on your terminal. As long as it starts with "v20" you are ready for the next step.

   ```bash
   node --version
   ```

3. Clone the project, and navigate into the directory.

   ```bash
   git clone https://github.com/sunillshastry/itihaas-client.git
   ```

   ```bash
   cd itihaas-client
   ```

4. In the root directory of the project, create a `.env` file. This `.env` file will contain our environment variables that are necessary to get the app started and running smoothly.

   ```bash
   touch .env
   ```

5. With the `.env` file created at the root directory level, you can now add the necessary environment variables for the app to run, you can find a template example of the `.env` in this GitHub repository, you can see the example template from the project's [`env.example`](https://github.com/sunillshastry/itihaas-client/blob/master/.env.example). The snippet below is what your `.env` file must look like.

   ```bash
   VITE_SERVER_HOST=0.0.0.0
   VITE_SERVER_PORT=3000

   VITE_PREVIEW_HOST=0.0.0.0
   VITE_PREVIEW_PORT=3001

   VITE_APP_ENV=development

   VITE_BASE_SERVER_URI=http://localhost:8080/api/v1
   VITE_BASE_PROD_URI=http://localhost:6500/api/v1

   VITE_RECAPTCHA_V2_SITE_KEY=abcd1234

   VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID=abcd1234

   ```

6. With the `.env` file successfully created and filled with the content provided from the [`.env.example`](https://github.com/sunillshastry/itihaas-client/blob/master/.env.example) template, run the following command at root level of the project to install all package dependencies for the project. This step may take a moment, depending on your network. (`npm` is part of `Node` and is installed automatically with `Node`)
   ```bash
   npm install # At project's root level (Ex: /itihaas-client/)
   ```
7. Upon successful installation with `npm`, you will see a new directory created in the project folder, titled `node_modules`, this directory contains all the code for the project's dependencies.
8. Finally, to setup a local development view of the project, run the following command.
   ```bash
   npm run dev
   ```
9. The `dev` command will start and run the project in development mode and can be accessed to view at `http://localhost:3000/`
10. You can now access and view the project in development mode at `http://localhost:3000/`

#### Build Method

Alternative to running the project in development mode, you can perform a full build and view the production mode result by a few different steps. Follow the above guide and install all package dependencies using `npm install` and then follow the provided steps below to mimic a production build mode.

1. After running the `npm install` command and with a successful `node_modules` directory at the root level of the project directory, run the following command:

   ```bash
   npm run build # Making a full build over a dev server
   ```

2. This will build the project for production (using [Vite's](https://vite.dev/guide/build.html) build configuration), and create a dedicated folder titled `dist` which will contain the optimized and minified codebase with dependent assets.
3. To preview/serve the `dist` directory locally and view, run the following command

   ```bash
   npm run preview
   ```

4. The `preview` command will also start and spin up a server at port `3001`. You can access and view the build at `http://localhost:3001/`

### Using Docker

If you do not have `Node` installed, or prefer not to install it. You can run and setup the project in development mode using Docker. This method requires to have Docker installed. You can install Docker for your device and OS from the official [Docker](https://www.docker.com/) website. Once you have it installed successfully, you can run the following command to make sure Docker is correctly installed on your system.

```bash
docker --version
```

With Docker installed, you can run the project in development mode by following the provides steps below:

1. Clone the project, and navigate into the directory.

   ```bash
   git clone https://github.com/sunillshastry/itihaas-client.git
   ```

   ```bash
   cd itihaas-client
   ```

2. In the root directory of the project, create a `.env` file. This `.env` file will contain our environment variables that are necessary to get the app started and running smoothly.

   ```bash
   touch .env
   ```

3. With the `.env` file created at the root directory level, you can now add the necessary environment variables for the app to run, you can find a template example of the `.env` in this GitHub repository, you can see the example template from the project's [`env.example`](https://github.com/sunillshastry/itihaas-client/blob/master/.env.example). The snippet below is what your `.env` file must look like.

   ```bash
   VITE_SERVER_HOST=0.0.0.0
   VITE_SERVER_PORT=3000

   VITE_PREVIEW_HOST=0.0.0.0
   VITE_PREVIEW_PORT=3001

   VITE_APP_ENV=development

   VITE_BASE_SERVER_URI=http://localhost:8080/api/v1
   VITE_BASE_PROD_URI=http://localhost:6500/api/v1

   VITE_RECAPTCHA_V2_SITE_KEY=abcd1234

   VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID=abcd1234

   ```

4. Upon correctly creating the `.env` file and filling it with the content provided from the [`.env.example`](https://github.com/sunillshastry/itihaas-client/blob/master/.env.example) template; Using `docker-compose` tool (which is also installed with Docker), run the following command

   ```bash
   docker compose up --build
   ```

   Or

   ```bash
   docker-compose up --build
   ```

5. This will spin up a new [Docker Container](https://www.docker.com/resources/what-container/) using the base image configuration provided with the project's `Dockerfile` (You can view the project's `Dockerfile` [here](https://github.com/sunillshastry/itihaas-client/blob/master/Dockerfile)).
6. With successful Docker build, you can now access and view the project on `localhost` at port `3000`, i.e., at `http://localhost:3000/`.
7. Once you have finished viewing the project, you should run the following command:

   ```bash
   docker compose down
   ```

   Or

   ```bash
   docker-compose down
   ```

8. The above command will stop the running container, optional network connections used by the project and free up used resources.

## Developer

The following information may be beneficial to developers wishing to consume the Itihaas API for personal use.

### Schemas

There are three database collections: a collection of all rulers, a collection of all the dynasties, and a collection of all the wars, each `Ruler`, `Dynasty`, and `War` will have the following structure.

- String (A typical text value)
- Object (Information embedded within `{ ... }`)
- Number (encoded as string values)

The Schema for Rulers, Dynasties, and Wars is extensive; not all values will be included for every Ruler/Dynastry/War, the amount of data/information depends on what is available from credible sources that I can find (mostly Wikipedia). Any missing or unavailable field will automatically have a `null` value by default.

### Dynasty.Schema

```typescript
{
	_id: string; // Unique identifier value
	slug: string; // Unique identifier value
	name: string;
	otherNames: string[];
	timeline: {
		begin: string,
		end: string,
	},
	capitals: string[];
	languages: string[];
	religions: string[];
	area: {
		lowest: number | string,
		highest: number | string,
	};
	population: number | string;
	currencies: string[];
	locations: string[];
	rulers: string[];
	wars: string[];
	description: {
		oneline: string,
		long: string[],
	};
	sources: string[];
	furtherReading: {
		publisher: string,
		link: string,
		_id: string; // Unique identifier (for readings)
	}[];
	articles: {
		title: string,
		authors: string[],
		publisher: string,
		link: string
		_id: string; // Unique identifier (for articles)
	}[];
}
```

### Ruler.Schema

```typescript
{
	_id: string; // Unique identifier value
	slug: string; // Unique identifier value
	name: string;
	otherNames: string[];
	born: string;
	died: string;
	dynasty: string;
	religion: string;
	predecessor: string;
	successor: string;
	family: {
		father: string;
		mother: string;
		children: string[];
		wives: string;
	} | null;
	wars: string[];
	timeline: {
		begin: string;
		end: string;
	} | null;
	description: {
		oneline: string;
		long: string[];
	};
	sources: string[];
	furtherReadings: {
		publisher: string;
		link: string;
		_id: string; // Unique identifier (for readings)
	}[];
	articles: {
		publisher: string;
		authors: string[];
		title: string;
		link: string;
		_id: string; // Unique identifier (for articles)
	}[];
}
```

### War.Schema

Not Available at the moment; Will be updated in due time. Sorry for the inconvenience

## Timelines

The following contains the timeline information for dynasties that existed in the Indian Subcontinent (incl. North and South Indian empires) and the historical wars that were fought. These are just the templates: I have tried to do in-depth on every single topic listed below to hone the database with as much information as possible within the scope of the technical requirements.

#### Prehistoric and Early Civilizations

- Mehrgarh Civilization (7000 BCE to 2500 BCE)
- Indus Valley Civilization (3300 BCE to 1300 BCE)

#### Vedic and Early Kingdoms

- Vedic Age Civilization (1500 BCE to 600 BCE)
- Kuru Dynasty
- Panchala Dynasty
- Kosala Dynasty
- Magadha Dynasty
- Shaishunaga Dynasty
- Nanda Dynasty
- Maurya Dynasty
- Shunga Dynasty
- Kanva Dynasty
- Mitra Dynasty

...and more.

## Tech Stack

Below, you will find the full, transparent tech stack used for the frontend application for Itihaas.

> To view the tech stack for the backend, please visit [here](https://github.com/sunillshastry/itihaas-api).

- **Core**: React, TypeScript, Vite Build Tool.
- **Libraries**: TanStack Query, React Hook Form, React Router, Zod, Context API.
- **Styling**: CSS, Tailwind, shadcn-ui.
- **Linting and Formatting**: ESLint, TSLint, Prettier, Babel, Husky, lint-staged.
- **Tests**: Jest, React Testing Library.
- **Containerization/Infrastructure**: Docker, docker-compose.

## License

Licensed under the [GNU General Public License v3.0](https://github.com/sunillshastry/itihaas-client/blob/master/LICENSE).
