This project came about because I wanted to gain a better understanding of React and its structure - specifically, its use outside the job-specific implementation that I've been working with since June 2016 - and because I like cocktails.

At work, I'm using React with [Freezer.js](https://github.com/arqex/freezer), Less and the [Tachyons](http://tachyons.io/) library on a daily basis. I therefore decided to only use vanilla CSS3 in this project, and to build the first version of it without an designated state-management framework such as Freezer. (This or Redux may be refactored in at a later date, depending on how far I decide to take the app.)

This is the first time I've started a React project from scratch, although I did take advantage of the [Create React App](https://github.com/facebookincubator/create-react-app) boilerplate. It currently uses [json-server](https://github.com/typicode/json-server) to simulate a full RESTful API and [react-router](https://github.com/ReactTraining/react-router) for routing purposes.

*Please be aware this project is a work in progress, and as such certain areas may not work at any given time if I'm updating them.*

## Getting up and running

First clone the project to your local machine. You'll also need to have Node installed and set up.

If you don't use json-server:

```sh
npm install -g json-server
```

In the src folder, first run:

```sh
json-server -p 8080 db.json
```

This will start the mock JSON server used by the project on localhost port 8080.

Then in the project folder, run:

```sh
npm start
```

Which, as usual with create-react-app projects, will start the project at [http://localhost:3000](http://localhost:3000).

# Potential additional functionality

In no particular order and in what is certainly not a comprehensive list, I'm thinking about adding the following (eventually):

* Add a new drink
* Infinite scroll for results lists
* Search for a specific drink
* Allow user to select up to three ingredients, then provide only drinks that use all selected ingredients
* When viewing a drink, suggest similar drinks using same ingredients
* Loading/transition UX

