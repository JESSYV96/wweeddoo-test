## DEMO

https://wweeddoo.herokuapp.com/

## Installation

Clone this project into a folder :

```
https://github.com/JESSYV96/wweeddoo-test.git
```

Then, for each apps, install dependencies with :

```
yarn install:project
```

Before, run the app, you must set the variables environments, use the file env.dist, to create your own .env

## Run the app 
Developent mode, run the following commands on different terminal (at root project) :

1) For API
```
yarn start:dev 
```
2) For Client

```
yarn client:dev
```

Production mode (at root project) :

```
heroku local web
```
or 

```
yarn build && yarn start:prod
```

And open the browser and go to http://localhost:4000/


To run on this project, you need to authenticate, here a list of user :


| Email                  | Password |
| ---------------------- | :------: |
| jessy.v@email.fr       |  jessy   |
| john.smith@email.fr    |   john   |
| pascal.dupont@email.fr |  pascal  |
