# Node.js Shop

This basic online shop is a node.js application powered by Express framework and EJS templating engine. It's the main project from [this Udemy Course](https://www.udemy.com/course/nodejs-the-complete-guide/) and also an important part of my journey through Node-land. It covers the main features one would expect from a web store, such as user authentication and own products managing, products browsing, shopping cart and order history.

![Shop Preview](https://i.imgur.com/nqbbtdk.png)

---

## Demo

Here is a working live demo: https://node-complete-leo.herokuapp.com/

---

## General Info

- The project is built as a stand alone node server, without a separate frontend deployment.
- Every view is rendered server-side while style and browser-logic files are served statically.
- The project structure follows the MVC pattern and is conceptually organized around three areas: _auth_, _admin_ and _shop_ (e.g. user authentication, own products administration and general web shop).
- Domain object models _User_, _Product_ and _Order_ interface with noSQL database MongoDB.
- Sessions are used to authenticate requests for protected resources and these are also stored on MongoDB, in the same database.
- Product images are stored on the server and image paths on the database
- Invoice PDFs are generated and stored on the server

---

## Features

- Authentication
  - simple email & password signup/login
  - password reset
  - auto login with sessions

---

## Technologies

## Screenshots

![Example screenshot](./img/screenshot.png)

## Technologies

- Tech 1 - version 1.0
- Tech 2 - version 2.0
- Tech 3 - version 3.0

## Setup

Describe how to install / setup your local environement / add link to demo version.

## Code Examples

Show examples of usage:
`put-your-code-here`

## Features

List of features ready and TODOs for future development

- Awesome feature 1
- Awesome feature 2
- Awesome feature 3

To-do list:

- Wow improvement to be done 1
- Wow improvement to be done 2

## Status

Project is: _in progress_, _finished_, _no longer continue_ and why?

## Inspiration

Add here credits. Project inspired by..., based on...

## Contact

Created by [@flynerdpl](https://www.flynerd.pl/) - feel free to contact me!
