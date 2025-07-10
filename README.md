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
- **Libraries**: TanStack Query, React Hook Form, React Router.
- **Styling**: CSS, Tailwind.
- **Linting and Formatting**: ESLint, TSLint, Prettier, Babel.
- **Tests**: Jest.

## License

Licensed under the [GNU General Public License v3.0](https://github.com/sunillshastry/itihaas-client/blob/master/LICENSE).
