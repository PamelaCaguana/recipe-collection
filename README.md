# Recipe Collection

This is a working project for myself, my family, and anyone else who has ever thought to themselves "What was that really tasty dish I made last month? Did I bookmark it? Was it on youtube? Wait, did I screen shot the recipe? Did I really take 1000 photos in the last month? Nevermind I'll just do take out again."

Because making your own food shouldn't require a google deep dive.

## Version 1.1 is Live
This version includes the following features/capabilities:
- Read recipes posted by all users.
- Create an account using an email address.
- Add and edit recipes with images and links.
- Like and delete recipes.
- Pagination to include full recipes in easy to read layout.
- Search through recipes titles and tags.

## Currently working on V1.2
- Comment Section.
- Layout improvements on recipe details page.
- Add allergy options and icons.
- Make form its own page.
- Reformat tag input in form.
- Add recipe breakdown.
- Stabilize search section.
- Add the ability to search by user.
- Add the ability to create a favorite recipe list and/or the ability to pin recipes.
- Highlight different recipes on the homepage.

## Package Dependencies
express, nodemon, mongoose, bcrypt, jsonwebtoken, jwt-decode, react, react-router-dom, axios, redux, materialUI

## Setup:
- run ```npm i && npm start``` for both client and server side to start the app

Create a `.env` file in the server folder and add the following as `key = value` 
  - PORT= 5000
  - CONNECTION_URL= `your database URI`
  - TEST_KEY= `needed for JWT`

[WheresThatRecipe](https://wheresthatrecipe.com/)

![Recipe Collection](http://g.recordit.co/oC8JCQBpbo.gif)
