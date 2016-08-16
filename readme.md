# Project 2 - Beer & Food Pairing CRUD Web Application

---

### Description
Do you have that favorite go-to beer that you always pair with pizza? Are you looking to expand your beer and food palate. Then let beerpairing do the work for you. Choose your type of beer and we'll recommend a few places close to you that will best fit your flavor palate.

Applying the CRUD methodology (create, read, update, destroy) beerpairing allows a user to create an account, update their account, search for specific types of beers, and find restaurants that serve dishes that are paired well for the chosen beer's flavor profile. 

---

### Technology Used
The following technologies were used for this CRUD web application:

* HTML
* CSS
* Materialize
* Javascript
* jQuery
* Node.js
* NPM - express, pg-promise, mustache-express, bodyparser, dotenv, session, request
* PostgreSQL 
* API - Google Maps Geocoding 
* API - Google Places Web Services

---

### User Stories
1. As a user, you can search for beers in order to get a full listing of beer criteria
2. As a user, you can select a specific beer from your search in order to find matching food pairs
3. As a user, you can find restaurants that match the food pair in order to locate restaurant options
4. As a user, you can create and update your account to access
5. As a user, you can delete beers from our extensive database if beers are no longer offered

---

### Pseudocode
**Minimal Viable Product:**

* From user login screen option to login or to create new account
* If login with credentials then check database for email and hash password compared to databased hashed password
* If no match of either field then show error message
* If create new account then new accounts page
* Once user creates new account then save information to database and hash password prior to saving in database
* Then send user back to login page to login with new credentials
* Logged in user saves email and zipcode to session information and redirect to homepage
* Homepage provides search options which pull information from database and shows results
* User selects beer and more information is provided about the beer
* Based on zipcode both API's are called from the server side and returns restaurants that best match beer flavor profile

---

### Wireframes

![Wireframe](http://i.imgur.com/GPRsA1Z.png)

---

### Issues & Resolutions

* Understanding how express.Router redirects functionality from app.js to other files and becomes a middle-management system to create cleaner file structuring
* Understanding of routing and rendering versus file pathways
* Hashed passwords using bcrypt and calling on additional functionality to make comparisons
* Managing API keys safely with environmental variables
* Using environmental variables safely on the server side instead of using them on the client side and possibly compromising data
* Calling API's from the server side and reformatting it correctly after parsing for use with mustache

---

### Sources

* [BreweryDB](http://www.brewerydb.com/)
* [Bryan Mytko Demo Express Auth](https://github.com/bryanmytko/demo-express-auth)
* [Google Geocoding API](https://developers.google.com/maps/documentation/javascript/geocoding)
* [Google Places API](https://developers.google.com/places/)
* [Heroku Documentation](https://devcenter.heroku.com/)
* [jQuery API](http://api.jquery.com/)
* [Materialize](http://materializecss.com/)
* [Mozilla Developers Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [NPM bcrypt](https://www.npmjs.com/package/bcrypt)
* [NPM dotenv](https://www.npmjs.com/package/dotenv)
* [NPM express route](https://www.npmjs.com/package/express-route)
* [NPM require](https://www.npmjs.com/package/request)
* [Open Beer DB](https://openbeerdb.com/)
* [PostgreSQL](https://www.postgresql.org/docs/)

