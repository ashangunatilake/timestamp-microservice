# Timestamp Microservice

This is a solution to the [Timestamp Microservice](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice) challenge from freeCodeCamp's Back End Development and APIs certification.

## Features

- Accepts a `GET` request to `/api/:date?` where `date` can be a UNIX timestamp or an ISO-8601 formatted date.
- Returns a JSON object with the following properties:
  - `unix`: The UNIX timestamp of the date.
  - `utc`: The UTC string representation of the date.
- If no `date` is passed, it returns the current date and time.
- Handles invalid dates gracefully by returning a JSON object with an error message.

## Example Usage

```bash
GET /api/2015-12-25
GET /api/1451001600000
GET /api
```

## Example Output

```bash
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```
For invalid dates:

```bash
{
  "error": "Invalid Date"
}
```

## How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/ashangunatilake/timestamp-microservice.git
```

2. Navigate to the project directory:
```bash
cd timestamp-microservice
```

3. Install dependencies:
```bash
npm install
```

4. Start the server:
```bash
npm start
```
