# Elisa-
Hyper tension health tracker 

---requirements rough draft:

-Authentication and authorization:  A drop down menu on users. Maybe even a session that is stored on phone/browser
-Data quality/Human error: Number/Number drop menu for time of day?
-Information security: Not an issue at this point
-Interoperability: Available through the browser and on the phone
-System errors: Alert user string
-Uses express for the server
-Uses MongoDB for the database
-Uses React for the frontend
-Uses Node.js for runtime environment
-User_id: doesn't need to be too complicating for auth 
-One input for blood pressure 123/123-- 3 digit Number slot with a static forward slash followed by another 3 digit Number slot
-Three tasks for time of day that would include time of day that includes input for blood pressure.
-Date
-Medication check box
 -Tile to turn green on click when medication check box isClicked.

src
|
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- config            # all the global configuration, env variables etc. get exported from here and used in the app
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # re-exporting different libraries preconfigured for the application
|
+-- providers         # all of the application providers
|
+-- routes            # routes configuration
|
+-- stores            # global state stores
|
+-- test              # test utilities and mock server
|
+-- types             # base types used across the application
|
+-- utils             # shared utility functions

src/features/awesome-feature
|
+-- api         # exported API request declarations and api hooks related to a specific feature
|
+-- assets      # assets folder can contain all the static files for a specific feature
|
+-- components  # components scoped to a specific feature
|
+-- hooks       # hooks scoped to a specific feature
|
+-- routes      # route components for a specific feature pages
|
+-- stores      # state stores for a specific feature
|
+-- types       # typescript types for TS specific feature domain
|
+-- utils       # utility functions for a specific feature
|
+-- index.ts    # entry point for the feature, it should serve as the public API of the given feature and exports everything that should be used outside the feature


____________________________________________________________________________________________________________
                                                Notes

**Write out the problem in plain language (write it in english, no pseudocode)
**Write out the solution steps in plain language

2023-05-18
1. Before: I think this is a good place to add notes for now. I am attempting to pick up where I left off two weeks ago. Wish me luck.
After: attempting to restore the app to the previous version that I was getting from DB, I went back and restored what I could. I'm still not all the way there yet, but I re-added components and fixed the server. js. I'm in a previous place where I couldn't get the app to run, but I suppose this is good debugging practice. Adding back the components on the react side On second thought, I might just delete the react and start all over again.

2023-05-20
1. Before: deleted the client, realized it was a mistake, then restored it. Attepting to restore to a previous working version.
After: I attempted to recover code in the Elisa app but noticed that the git never had the React client folder. I went back to the crudPractice app. Trying to recover from here. I need a break. I will continue later today.

2023-05-30
1. Before: I'm at the crudPractice app, and I'm remembering why I decided to take a break. It's a bit overwhelming with no bread crums to follow home. Scratch that—I think your discord message with links might show me the way (fingers crossed). Hopefully, the notes after will be good news.
After: Well, I felt like I couldn't focus today or was just overwhelmed, or maybe both. I was reading the links I got sent and tried changing the form data in different files since there are a couple index.html files and so many .js's. I will give it another try tomorrow morning. ATM I feel like starting over since whenever I get lost, I just go back to the beginning and start again till I get it right.

2023-05-31
1. Before: I'm going to attempt to get the Elisa app going. I can't decide if I should try this on fixing the FormData on the crudPractice app or just dive in on the Elisa app. I'm running on 4 hours of sleep, and everything is foggy, but I will still give it a shot.
After: I decided to give it a go with the crudPractice app. I then used GPT to help reorient myself and learn more about the changes that needed to be made to the server. I added Cors and made changes to index.html to handle the FormData. Then I tweaked server.js and App.js to handle the form. Currently, the app is submitting the form and pasting it into the browser address field. When I come back to this this afternoon, I will try to debug the routes.
*continued: At least I see the form; it's not posting to DB. Cover me; I'm going in! ...well, that was unsuccessful, going for a hail mary in the Elisa app, lol. On second thought, I will just wait until we talk.
Searched for solutions to problems that might be in index.js. Getting errors in the DOM Will start here tomorrow.

2023-06-02
** I attempted to do "Arrange, Act, Assert" notes on the code wars solution123.js.
Getting nested form for some reason? Look inside the dom at errors manana.

2023-06-03
Elisa/crudPractice app*
Arrange: When submitting the form, the form appears to be being posted in the browser address bar.
    - I don't know the solution steps yet, but I'm using the DOM errors and network tabs to help me locate what is going wrong. Once I find the errors, I will google them and track down where the issue is.
    - I'm trying to get to a point where I can get my app in more or less working order so I can start applying the new AAA methodology. I can't seem to find what needs to be fixed or changed (I spent all morning). I keep running into the same error no matter what I change. I've got the DOM open and am trying to debug from there.
    App.js:15 SyntaxError: Unexpected token '<', "DOCTYPE "... is not valid JSON".
I will pick up from here when I get back to it. hopefully this evening.

Act:

Assert:

2023-06-04
-Elisa app
Arrange: I forgot to mention on the previous day that I'm back to seriously getting the Elisa app working. Currently working on a solution to the error: App.js:15 SyntaxError: Unexpected token '<', "DOCTYPE "... is not valid JSON".
Okay, after bashing my head into the Elisa app for half a day, I finally got an idea of where to start fixing things. It has to do with the port and how the front end and back end are merged. I really wanted to get back to this spot so I could start practicing the new methodology.

2023-06-05
Arrange: The problem I'm having is that the front end and backend are not communicating correctly. I imagine it has to do with the FormData and that it's sending the wrong data "type'. IIRC it was sending HTML instead of JSON. I'm about to fire it and start debugging. This brings up a question: should I be doing the AAA methodolgy before I work on my issue? since ATM I don't know what the exact problem is until I fire it up,
-Find out what the reason is for the PORT issue. Since when I start react, it says the port is already in use and it creates a new port, but when it does, it stops communicating with the backend.
-When I start react it says the port is in use, and I get the "DOCTYPE "... is not valid JSON" error. But when I manually change it back to the same port the server is running on, it works and the error goes away, but then I get this error: Uncaught SyntaxError: Unexpected token '<' (at main.js:1:1)
- Both servers are running correctly independently but are not communicating with each other.


Act:


Assert:

2023-06-06
You are not going to like this, but I'm technically staying on task. I decided to clean up and update the code to make it more readable and easier to read. I found that when I break things up into their own compartments, it makes it easier for me to not get distracted. I'm getting distracted to not get distracted, if that makes any sense.


2023-06-06
Okay, so I just came back to the "cleaner" version, and it's too late in the day to work on it. So I'm going to try to debug the Elisa app and fix the JSON problem.


2023-06-07
Arrange: Trying to determine if my HTML is hitting the correct route, the FormData is sending the wrong data "type'. It's sending HTML instead of JSON.
  - First, I must locate where the server is sending the wrong data type.
  - A suggestion I got was to check the server logs. I have no idea how I go about doing that.
  - Inspect the DOM and use the network tap to help find the problem.


Act: To be determined

Assert:

2023-06-08
--Before: Have new errors, woot! The debugging made me feel a bit better about my progression as a dev. Getting a few errors in the DOM.
  - Errors in the dom about unique keys
  -  The name property is not being displayed. Both of these errors seem to be related.
1.Problem 1
Arrange
  - Problem: The name property is not displayed in the list.
  - Solution: Check the network tab in the DOM to see if the name property is being rendered. Follow the data flow by adding console.logs.


Act:
  - I checked the HTML, and instead of a name, I'm getting ::marker == $0
  -  I don't know how to solve it. I need to take a step back.


Assert:

*** Fixed all grammer errors in my notes

2023-06-09
--Before: Continue from "I checked the HTML, and instead of a name, I'm getting ::marker == $0"
Arrange:
 - Problem: Name property is not displayed in the list. Check the network tab in the DOM to see if the name property is being rendered. Getting a duplicate error
 - Solution: Check the client side component List.js and see if the key property is being rendered.

Act: Change the component List.js to fix the key property to render correctly. I also changed the list to display the name and quote property to display separately for readability.

Assert: Verified that the server and react app started successfully with no errors, and verified list displays the name and quote separately.

2023-06-10
**Want to add a delete button to the list.
Arrange: Don't know if I want to add the delete function as a component or just code it into List.js and server.js

Act: I will just start coding and see if I get to work and go from there.
Getting errors. I need to take a step back.

Assert:
*** I forgot to push my client to git, oof
**Problem 2.
Arrange: Problem: Getting err "a bootstrap:27 Uncaught Error: Cannot find module 'url'" in the DOM.
         Solution: Google err and look at dev tools

Act:

Assert:
