# AllYouCanTap

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Launch the servers on your local machine

For this project I was using Windows 8, so to run the MongoDB server, I used the software (MongoDB Compass Comunity)[https://www.mongodb.com/download-center?filter=enterprise&utm_source=google&utm_campaign=EMEA_France_CorpEntOnly_Brand_Beta_FM&utm_keyword=%2Bmongodb%20%2Bcompass&utm_device=c&utm_network=g&utm_medium=cpc&utm_creative=208952627434&utm_matchtype=b&_bt=208952627434&_bk=%2Bmongodb%20%2Bcompass&_bm=b&_bn=g&jmp=search&gclid=CjwKCAjw9e3YBRBcEiwAzjCJuo-thvzVsJ4zf_nWpNz42UwUFA1kh8A1bOh-k2--4iAQrG0z_GhYiRoCy7cQAvD_BwE#compass]

Run the software, create a database and name it `tapboard`. Be sure the url will be `mongodb://localhost:27017`.

Then create 2 collections in it: `users` and `scores`.

Go with 2 cmds into this app project.

With the first one, run `ng serve --open` for the core application, then with the second run `npx nodemon server`.

Now that your 3 servers are running, go to `http://localhost:4200` to use the app.

# Features

When the user arrives on the application, he can only go to the home page. While he is not authenticated, he will be redirected to this page.

If the user is authenticated, he cannot go to the homepage and is by default redirected to `/tap`.

## Homepage

On the homepage, he can either login or register its account. 

### Login

If the combinaison of email / password doesn't exist in the database, an error message is displayed. 

If the combinaison is exact, a JSON web token is saved for his session as well as the user's informations (First name, last name and email).

### Register

The user must enter his first name, his last name, his email and his password. He also has to confirm he agrees with the conditions of the website. 

If the email the user entered already exists, an error message is displayed. 

If not, the user is added to the database and the session is saved like on a login success. 

## Logged

On all the "logged" pages, you have a menu at the top of the page with 2 buttons: one to go from one page to the other, and one to logout. 

The logout button deletes the session of the user and redirects him to the homepage. 

### Tap

The `/tap` url is the page where the user can play the game. A big image representing a button is displayed in the center and a bar representing the timer of the game. 

The image toggles between on and off on mouseDown / mouseUp.

Once the user has clicked on the button, he has 10 seconds to click has many times as possible on the button to have a the biggest score possible. 

Once the timer's out, the user's score is registered and he is redirected to the `/scores` page. 

### Scores

The `/scores` url is the page showing all the scores registered and by whom, starting by the most recent. 