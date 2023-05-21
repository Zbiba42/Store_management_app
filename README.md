# Store management app

This is a Store managment app that include crud function for products ,clients and orders .

The app was made using electron + React.js and pocketbase and other dependencies take a look at => [package.json](package.json) for all the dependencies that were used.

# Installing Node dependencies

Run `npm i` to install all the dependencies.

# Runing the app localy in developement mode

## Runing Pocketbase db migrations

The [pb_migrations](api/pb_migrations) folder contain migrations scripts that will create all the collections necessary for the app to work.
Go the [api directory](api) and run `./pocketbase migrate`.

## Starting Pocketbase server

run `./pocketbase serve` to start pocketbase server.

## Starting the app

Run `npm run electron:serve` to start the react app in a desktop app development server.
you can also run `npm start` to start it in the browser

## building the app
## building the app
