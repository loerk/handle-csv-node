## About The Task

Environment

This exercise should be solved with Node.js >= 16 and its available features. TypeScript
implementation is preferred over plain JavaScript, but no requirement.
The solution should include the full source code and any script or instruction necessary
for executing/running the app. There are no restrictions regarding used libraries.

Exercise: Political Speeches
The goal of this exercise is to calculate some statistics from given input data about
political speeches. The application should handle CSV files (UTF-8 encoded), structured
as below:

Speaker, Topic, Date, Words
Alexander Abel, Education Policy, 2012-10-30, 5310
Bernhard Belling, Coal Subsidies, 2012-11-05, 1210
Caesare Collins, Coal Subsidies, 2012-11-06, 1119
Alexander Abel, Internal Security, 2012-12-11, 911

The application should provide an HTTP endpoint which accepts one or more given URLs (http and https) via query parameters at the path:

`GET /evaluation?url=url1&url=url2`

The provided CSV files at these URLs should be downloaded, processed and evaluated to answer the following questions:

1.  Which politician gave the most speeches in 2013?

2.  Which politician gave the most speeches on the topic „Internal Security"?

3.  Which politician used the fewest words (in total)?

Expected Output:
JSON:
`{ "mostSpeeches": null, "mostSecurity": "Alexander Abel", "leastWordy": "Caesare Collins" }`

(for unambiguous solution the result for this field should be null)

<p  align="right">(<a  href="#readme-top">back to top</a>)</p>

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This app is running on Node 18.9.0

```sh

npm install npm@latest -g

```

### Installation

1.  Clone the repo

```sh

git clone git@github.com:loerk/handle-csv-node.git

```

2.  Install NPM incl. devDependencies

```sh

npm install --include dev

```

This will install the latest versions of the following packages

[express](https://www.npmjs.com/package/express)
[cors](https://www.npmjs.com/package/cors)
[dotenv](https://www.npmjs.com/package/dotenv)
[csvtojson](https://www.npmjs.com/package/csvtojson)
[nodemon](https://www.npmjs.com/package/nodemon) as devDependency

3.  Create a .env File in the Root and define your preferred Port (e.g 5001)

```sh

PORT=5001

```

4.  run the following command to start the server

```sh

npm start

```

<p  align="right">(<a  href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

please enter
Example GET Request:

```sh
http://localhost:5001/evaluation?url=https://www.npmjs.com/package/dotenv
```

This request returns a JSON object with either an error message or the following result of the mockData analysis

![Result JSON](https://github.com/loerk/handle-csv-node/blob/main/result.png?raw=true)

<p  align="right">(<a  href="#readme-top">back to top</a>)</p>
