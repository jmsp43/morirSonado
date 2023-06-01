
This application is a food ordering service for a family-owned and run Dominican food spot called Morir Soñando. As of 6/1/23, I am soft-launching this application via vercel (backend hosted on render), with the caveat that I will be returning to work on most of the features listed. Right now, this application can:

- Create a new order and show it (along with all other orders) on the reciept page
- Show all menu items and one menu item at a time when clicked
- Update menu item names, descriptions, and prices
- Delete orders 


# View the application here!
https://morir-sonando.vercel.app/


## AAU
As a user, when this project is completed you will be able to:

[] create an account
[] sign in
[] sign out
[] order as a guest
[] view individual items from the menu
[] add items to your order
[] delete items from your order
[] see your order price change on screen in real time
[] add a delivery address
[] change delivery address
[] delete delivery address
[] see a receipt on screen after placing your order

There will be multiple "pages":

[] Authentication page for registering
[] Authentication page for logging in
[x] Ordering page with menu
[] Reciept page for after order is placed
[] Error landing page
[] Catering page with interest form
[x] Home landing page
[x] Cart viewing page
[x] Admin versions of all of these pages where an administrator can edit menu items, view all orders placed, delete orders from queue, etc

Stretch goals for after Per Scholas Presentation:
[] loyalty points for every order you're signed in for
[] state management using Redux
[] accessibility features with aria
[] responsive mobile design


## Why I chose this project

Morir Soñando means to die dreaming, and it's the colloquial name of a common Dominican drink (a sweet blended beverage of orange juice and milk/condensed milk). As a kid, I couldn't stand them and thought they were beyond nasty. Now though, being far away from home in a new city with no one that reminds me of my culture and upbringing, I've been craving a Morir Soñando all the time, along with many of the dishes I grew up eating. When I go home to visit, my titi and my suegra cook up a storm with all of my favorites (pernil, sancocho, mondongo, flan de queso, etc), and honestly if either (or both!) of them were to ever go into the restaurant business, they would make an absolute killing. My homesickness and my love of my cultural foods is why I decided on this project, and despite how difficult building this has actually turned out to be, I hope that when you open it, it sparks joy in you like it does for me.

## Dependencies and Instructions

run ' npm i ' in your terminal to install any neccessary dependencies

## Technologies Used

- JavaScipt
- React
- MongoDB
- Mongoose
- Express
- Node
- Axios


## Achievements

I am proud that I have been able to achieve a functional, relatively aethetically pleasing full-stack application in less than a week.

## Challenges/Unsolved Issues

My edit and delete routes refused to cooperate until the last second, with the main issue being syntax errors. Connecting my frontt-end and back-end applications proved to be much more difficult than I inititally anticipated (which is why I planned a much bigger application to be done by 6/1). That being said, I had no issues with my index and show routes, mainly my edit and delete routes. I learned that even if a function requires an argument, if you 'call' (aka have an argument of that function) that function in your JSX, the application will see that and want to run that function immediately, forever.Example: In my Delete button, On Click it was supposed to be running my deleteAnOrder function with the argument of 'id', but because it was in my JSX, React seen that and assumed that I was calling it not only when I click the button, but every time the page loads. The fix for that was to call my deleteAnOrder function within an anonymous callback function inside my onClick property. 

As for unsolved issues and future features, I have listed above all of the feautures that I have yet to implement but plan to in the near future.

## Acknowledgements
Big thank yous to everyone who helped me along the way!
Thank you to Kasper (for real, especially Kasper), Tishana, and Dylan for your patience and support!
Thank you to Yonas, Joshua, and Amari for last minute help and bug fixes!
Thank you to Imani and Tamara for your support!
Thank you to Chad for breaking down back-end concepts throughout this module!