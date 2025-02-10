# web-app-template
Steps to build a template for web application built with Node.js, Express, and MongoDB.

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

## Public resources
- [x] Create folder Public in src
- [x] Save css and images there (sample resources in this project)

## Template views
- [x] Create layout folder
- [x] Create main.hbs - header, footer, error message div (sample in this project)
- [x] Add  <main>{{{body}}}</main> to main.hbs
- [x] Fix path to css files in main.hbs
- [x] Add hrefs in nagivation
- [x] Remove layout content from templates

## Express config
- [x] 'npm i express'
- [x] Import express in index.js
- [x] Start server
- [x] Serve static files from folder Public

## Controllers
- [x] Create contollers folder
- [x] Add contoller file for each service

## Home Controller
- [x] Import Router from Express
- [x] Create get route for home/about
- [x] Export home controller to use in index.js/routes.js

## Routes
- [x] Create routes.js file for main routing
- [x] Import Router from Express
- [x] Import homeController
- [ ] Set routes - auth, resources, etc.
- [x] Export routes
- [x] Import and use in index.js



