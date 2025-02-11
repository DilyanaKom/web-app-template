# web-app-template
Steps to build a web application with Node.js, Express, and MongoDB.

## Init project
- [x] 'npm init'
- [x] .gitignore file
- [x] Update type: module for ES Modules
- [x] "dev": "node --watch src/index.js" or "nodemon index.js"
- [x] Create src folder
- [x] Create index.js file
- [x] Download resources (sample resources in this project)

## Handlebars config
- [x] 'npm i express-handlebars'
- [x] Import in index.js
- [x] Register Handlebars with Express
- [x] Set Handlebars as defalt view engine for Express
- [x] Set Express to look for views in './src/views'
- [x] Create Views folder in src
- [x] Add body parser


## Public resources
- [x] Create folder Public in src
- [x] Save css and images there (sample resources in this project)

## Template views
- [x] Create layout folder
- [x] Create Auth folder with login and register views
- [x] Create main.hbs - header, footer, error message div (sample in this project)
- [x] Add  <main>{{{body}}}</main> to main.hbs
- [x] Fix path to css files in main.hbs
- [x] Add hrefs in nagivation
- [x] Remove layout content from templates
- [x] Fix name attributes for forms
- [ ] Dynamic page titles

## Express config
- [x] 'npm i express'
- [x] Import express in index.js
- [x] Start server
- [x] Serve static files from folder Public

## Mongoose
- [x] 'npm i mongoose'
- [x] Import mongoose
- [x] Config db in index.js
- [ ] Display error message when cannot connect to db

## Controllers
- [x] Create contollers folder
- [x] Add contoller file for each service

### Home Controller
- [x] Import Router from Express
- [x] Create get route for home/about
- [x] Export home controller to use in index.js/routes.js

### Other Controllers
- [ ] Add other conrollers depending on task

### Auth Controller
- [x] Get login
- [x] Post login + error handling
- [x] Get register
- [ ] Post register + error handling (auto login on success)

## Services
- [x] Create services folder
- [x] Add auth-service.js
- [ ] Add any other services as per task

### Auth Service
- [x] Import User, bcrypt and jsonwebtoken
- [x] Secret
- [x] Login function
- [x] Register function

## Models
- [x] Create models folder
- [x] Add User.js
- [x] Import Schema and model from Mongoose
- [x] 'npm i bcrypt' and import bcrypt
- [x] 'npm i jsonwebtoken'
- [x] Create user Schema + validations
- [x] Add pass hash before saving
- [x] Create user model
- [x] Export model


## Routes
- [x] Create routes.js file for main routing
- [x] Import Router from Express
- [x] Import homeController, authController, etc.
- [x] Set routes - auth, resources, etc.
- [x] Export routes
- [x] Import and use in index.js

## Error Handling
- [x] Create error-utils.js in utils folder
- [x] Create and export a function for extracting 1 or all error messages





