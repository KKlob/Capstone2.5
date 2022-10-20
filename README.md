# Capstone2.5
Political Informant Application - Restructured into Express Backend w/ PostgreSQL DB + React Frontend Client
- ToDo: 
  - Both PA_Server and pi-client need their own readmes 
  - Add instructions for running locally
  - Construct DB schema + implement
    - Models
    - Utility functions to handle queries for app
  - Write Utility functions to handle data gathering + cleanup + storage in DB
  - Write Login/Loggout/Create User functions
  - Finish backend
  - Start work on Front-End

## Technical Overview
Full-stack application utilizing an Express REST API handling a PostgreSQL DB while delivering a React SPA on the homepage.

### Tech Stack
- Front-End
  - React
  - Redux - Store user info if logged in
  - React-Bootstrap
- Back-End
  - Express.js - REST API + delivers Front-End via homepage route "/"
  - Sequelize - Manage PostgreSQL DB management
  
Deployed via Fly.io: [pi-server.dev](https://pi-server.fly.dev/)

### General Flow
- The backend will hold all congressional member data and user information for the application via DB.
  - Congressional Member data fetched from APIs:
    - [ProPublica Congress API](https://projects.propublica.org/api-docs/congress-api/)
      - Limited to 5000 Requests per day
    - [Congress.gov API](https://api.congress.gov/#/)
      - Used to get Member Photo URL
        - Currently getting CORS error - Server Side issue - Will implement later
  - Congressional Member data will be sanatized before being stored. Will only be served via GET requests.
  - All non-API routes will redirect to the "/" route
- The inital homepage (doubling as a catch-all non-api routes) delivers the React Front-end to the client.
- The Front-End will make GET requests to the express server for congressional member information.
- Front-End POST requests for user login/logout and future features (ex: follow congressional member button + follow page for logged in users)

### Database Schema
T B D
- Working on this 10/20/2022
