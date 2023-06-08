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
After: Attempting to restore the app to the previous version that I was getting from DB I went back and restored what I could. I'm still not all the way there yet, but I re-added components and fixed the server. js. I'm in a previous place where I couldn't get the app to run, but I suppose this is good debugging practice. Adding back the componets on the react side On second thought, I might just delete the react and start all over again.

2023-05-20
 1.Before: deleted the client, realized it was a mistake, then restored it. Attepting to restore to a previous working version.
After: I attempted to recover code in the Elisa app but noticed that the git never had the React client folder. Went back to the crudPractice app. Trying to recover from here. Need a break.. will continue later today.

2023-05-30
1. Before: I'm at the crudPractice app and I'm remembering why I decided to take a break. It's a bit overwhelming with no bread crums to follow home.Scratch that-- I think your discord message with links might show mw the way(fingers crossed). Hopefully the after notes will be good news.
After: Well, I felt like I couldn't focus today or was just overwhelmed, or maybe both. I was reading the links I got sent and tried changing the form data in different files since there are a couple index.html files and so many .js's. I will give it another go tomorrow morning. ATM I feel like starting over since whenever I get lost, I just go back to the beginning and start again till I get it right.

2023-05-31
1.Before: I'm going to attempt to get the Elisa app going, I can't decide if I should try this on fixing the FormData on the crudPractice app or just diving in on the Elisa app. I'm running on 4 hours of sleep and everything is foggy but I will still give it a shot.
After: I decided to give it a go with the crudPractice app. I then used GPT to help reorient myself and learn more about the changes that needed to be made to the server. I added Cors and made changes to index.html to handle the FormData. Then I tweaked server.js and App.js to handle the form. Currently, the app is submitting the form and pasting it into the browser address field. When I come back to this this afternoon, I will try to debug the routes.
*continued: At least I see the form, it's not posting to db. Cover me, I'm going in!...well that was unsuccessful, going for a hail mary in the elisa app lol. On second thought I will just wait till we talk
Searched for solutions problem might be in index.js. Getting errors in the DOM. Will start here tommarrow

2023-06-02
** Did an attemt to do “Arrange, Act, Assert” notes on the code wars solution123.js
Getting nested form for some reason, look inside the dom at errors manana

2023-06-03
Elisa/crudPractice app*
Arrange: When submiting the form, the form appears to be being posted in the borwser address bar.
    - I don't know the solution steps yet but I'm using the the DOM errors and network tab to help me locate what is going wrong. Once finding the errors I will google them and track down where the issue is. 
    - I'm trying to get to a point where I could get my app in more or less working order so I could start applying the new AAA methodolgy. I can't seem to find what I needs to be fixed or changed(spent all morning). I keep running into the same error no matter what I change. I've got the dom open and tring to debug from there.
    App.js:15 SyntaxError: Unexpected token '<', "DOCTYPE "... is not valid JSON".
    Will pick up from here when I get back to it. Hopfully this evening.

Act:

Assert:

2023-06-04
-Elisa app
Arrange: I forgot to mention on the previous day that I'm back to seriously getting the Elisa app working. Currently working on a solution to the error: App.js:15 SyntaxError: Unexpected token '<', "DOCTYPE "... is not valid JSON".
Okay, after bashing my head into the Elisa app for half a day, I finally got an idea of where to start fixing things. It has to do with the port and how the front end and back end are merged. I really wanted to get back to this spot so I could start practicing the new methodology.

2023-06-05
Arrange:The problem I'm having is that the front end and backend are not communicating correctly. I imagine it has to do with the FormData and that it's sending the wrong data "type'. IIRC it was sending HTML instead of JSON. I'm about to fire it and start debugging. This brings up a question: should I be doing the AAA methodolgy before I work on my issue? since ATM I don't know what the exact problem is till I fire it up.
-Find out what is the reason on whats causing the PORT issue. Since when I start react it says the port is already in use and it creates a new port but when it does, it stops communicating with the backend.
-When I start react it says the port is in use and I get the "DOCTYPE "... is not valid JSON" error. But when I manually change it back to the same port the server is running on, it works and the error goes away, but then I get this error: Uncaught SyntaxError: Unexpected token '<' (at main.js:1:1)
- Both servers are running correctly independly but are not communicating with each other.

Act:

Assert:

2023-06-06
You are not going to like this but I'm techniclly staying on task. I decided to clean up and update the code to make it more relaitble and easier to read. I found that when I break things up into thier own compartments it makes it easier for me to not get distracted. I'm getting distracted to not get distracted; if that makes any sense.

2023-06-06
Okay so I just came back to "cleaner" version and it's to late in the day to work on it. So I'm going to try to debug the Elisa app and fix the JSON problem.