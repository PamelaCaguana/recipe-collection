# Recipe Collection

This is a working project for myself, my family, and anyone else who has ever thought to themselves "What was that really tasty dish I made last month? Did I bookmark it? Was it on youtube? Wait, did I screen shot the recipe? Did I really take 1000 photos in the last month? Nevermind I'll just do take out again."

Because making your own food shouldn't require a google deep dive.

## Version 1.1 is Live
This version includes the following features/capabilities:
- Read recipes posted by all users.
- Create an account with an email address using [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
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
 - [express](https://www.npmjs.com/package/express) 
 - [mongoose](https://www.npmjs.com/package/mongoose)  
 - [bcrypt](https://www.npmjs.com/package/bcrypt)  
 - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)  
 - [jwt-decode](https://www.npmjs.com/package/jwt-decode)  
 - [react](https://www.npmjs.com/package/react)  
 - [react-router-dom](https://www.npmjs.com/package/react-router-dom)  
 - [axios](https://www.npmjs.com/package/axios)  
 - [redux](https://www.npmjs.com/package/redux)  
 - [nodemon](https://www.npmjs.com/package/nodemon)  
 - [materialUI](https://mui.com/)  

## Setup:

### Create a `.env` file in the server folder and add the following as `key = value` 
  - PORT= 5000
  - CONNECTION_URL= `your database URI`
  - TEST_KEY= `needed for JWT`  


You will need to generate your own [JWT token](https://jwt.io/). You can use these [instructions](https://www.ibm.com/docs/da/order-management?topic=SSGTJF/configuration/t_GeneratingJWTToken.htm).

## Getting Started

This web app contains two different applications -- a front end, or "client," created with "Create React App," and a back end, or "server," created with Express.

### Client
In order to run the client, you'll run the following commands:

```bash
cd client/
npm i
npm start
```
### Server 
In order to run the server, you'll run the following commands:

```bash
cd server/
npm i
npm start
```
## Website
[WheresThatRecipe](https://wheresthatrecipe.com/)

![Recipe Collection](http://g.recordit.co/oC8JCQBpbo.gif)
