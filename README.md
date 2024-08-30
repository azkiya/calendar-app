
# Calendar App
Mini project for create event using big calendar
![Demo](https://github.com/azkiya/calendar-email/blob/main/demo.gif)

## Run Locally

Clone the project

```bash
  git clone https://github.com/azkiya/calendar-email
```

Go to the project directory

```bash
  cd calendar-email
```

Install dependencies for client & server

```bash
  npm install
```

Preparation

```bash
  create account mailjet to get api key & secret key
  create credential mongodb
```

Setting environment Server

```bash
  create file .env minimal require from env.example in folder server, 
```

Start the server

```bash
  npm start
```

Start the client

```bash
  npm start
```
### End Point
list of end point

| task | method|end point |
| ------ | ------ | ------ |
| list event  | GET | [localhost:4000/api/events] |
| create event | POST | [localhost:4000/api/events] |
| send email | POST | [localhost:4000/api/send-email] |
| register user | POST | [localhost:4000/api/register] |
| login | POST | [localhost:4000/api/login] |
| logout | GET | [localhost:4000/api/logout] |

## Tech Stack

**Server:** NodeJs

**Framework** ExpressJs

**Database** MongoDB

**Client:** React

## Authors

- [@fany](https://github.com/azkiya)

## Documentation
- [Maijet](https://dev.mailjet.com/email/guides/getting-started/#send-your-first-email)