# Courtauld Volunteer App

For the past year, the Courtauld Institute has relied on volunteers to catalogue and digitize a huge collection of photographs and art for their Courtauld Connects initiative. They are preparing to more than triple the current number of volunteers in order to accelerate the multi-year project.

We are building an app to enhance the volunteer experience at the Courtauld Institute of Art.
The prototype can be seen here: https://invis.io/M6FOAXI45BJ

## User stories

* Volunteers and staffs can see and share up to date information on the digitization project’s progress and upcoming events, etc.
* Volunteers can share their interesting finds with staff and other volunteers.
* Volunteers and staff can view a directory of volunteers.

## Set Up

1. Clone this Repo.
2. `cd` into the CourtauldInstitute folder
3. npm install dependencies in repo folder, server folder and client folder

```
> npm install
> cd server
> npm install
> cd ..
> cd client
> npm install
> cd ..
```

4. Create a local database
5. Create a config.env file in the repo folder with your database url in this format:`DATABASE_URL = postgres://[yourusername]:[yourpassword]@localhost:5432/[yourdbname]`
6. Run `> node server/database/db_build.js` to build the test database
7. Run `> npm run dev` Two servers should start up and our browser will automatically load the application.

## Tech Stack

Front end: React, React router, Redux, Styled components
Backend: Express
Database: PostgreSQL

## Progress Summary and To Do

We have set up the basic scaffolding of our components, but much of the functionality still needs to be written and implemented (i.e. filtering the feed, searching the feed, etc.)

What we have done so far...

* Dashboard page
* Updates feature
* Directory feature
* Profile feature

What we still need to do...

* Log in features
* Implement authentication (using passport local strategy)
* Discoveries feature (will be almost identical to Updates, but without )
* Progress Update Component fed from Google Sheets
* More CSS
* Tests
* Forms
  * Staff should be able to add new users via email invitation
  * Users should be able to add update/discoveries
  * Users profile page- they should be able to edit
