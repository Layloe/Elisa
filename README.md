
# Elisa
health tracker 

npm install express mongoose ejs dotenv
npm install --save-dev nodemon

"start": "nodemon server.js"

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

2023-06-11
** Created a Air Quality Checker app

2023-06-13
**Having git issues
Arrange: 
    -Problem: The client side has its own git folder.
    -Solution: Move files inside the client folder to a temporary folder, then push. After pushing, delete the client folder, then push again. Finally, rename the temporary folder to the client folder.

Act:
    -Move files inside the client folder to a temporary folder, then push. After pushing, delete the client folder, then push again. Finally, rename the temporary folder to the client folder.

Assert:
    -Yes: success!

2023-06-14
*Problem 1

Arrange: Problem: Getting err "a bootstrap:27 Uncaught Error: Cannot find module 'url'" in the DOM.
Solution: Google err and look at dev tools for ideas in what direction to go into

Act:

Assert:

2023-06-17

Arrange: Problem: Getting err "a bootstrap:27 Uncaught Error: Cannot find module 'url'" in the DOM.
Solution: Create a new repo from scratch and test if still getting same errors.

Act: -Create testing repo
     -Create file structure
     -Copy and paste code from Elisa app onto new files
     -Generate new React app
     -Install packages
     -Cross fingers
     -Run app

Assert: Did not work oof, but it did possibly point me the right direction with package.json. Doing everything from scratch took quite a bit of time. Next time I will clone and then start to debug

2023-06-18
** Reviewed similar projects I built in the past to get an idea of what direction to go. Also, I found a doc that's a readme that had requirements when first spitballing about the app. I like this style of breaking down tasks. Included the Requirements.txt in the app for review.

2023-06-19

Arrange:
     Problem: Getting err "a bootstrap:27 Uncaught Error: Cannot find module 'url'" in the DOM and a bunch of nodemodule errors.
     Solution: Search for solutions on interwebs and past projects
     **! Really thinking about the structure and code of my app and I'm really thinking of refactoring my code.

Act:
     -Search for past projects that have MVC structure
     -Review and compare past projects
     -Once compared eliminate the ones that wont be useful
     -Pick one or two projects that will be useful guide
     -Figure out what's the best way to do this with github 
     -Start refactoring the code from backend 
     -Get backend running
     -Start refactoring the code from my frontend

Assert:

2023-06-20
** Apps to review: MVCfs, smile,elisa-testing
Arrange: Start refactoring the code from backend an changing the naming of declorations to fit health tracker.

Act:

Assert:

2023-06-21
** Apps to review: MVC, smile, elisa-testing

Arrange: When I started reviewing past projects and classes from 100devs, I realized why I was having such a hard time building and debugging since it's not the way I learned to code. It's all bout dat MVC. One major problem I think I'm going to have is in the views with React. Never really practiced attaching it to MVC. We used EJS/hanlde bars..I can ride my bike with no handle bars, no handle bars

Act:

Assert:

2023-06-22
**Start the refactoring backend first then move on to the front end.
Assert: -Tried to fork on github had some problems(I'm the owner) going to skip this for now. I want to start building
        -Definitely going with MVC structure
        -Might use bootstrap/handle bars/ejs temp?
        -Reviewing 100devs classes
        -Decide what MVC project to use 2121 or wolf
        -Look at code to figure out what would work best to later reactify the code

Act:

Arrange:

2023-06-24
**Start building today

	-Pushed MVC structure code
-Still have some bugs to work out
-Still have some properties to add
-Later will have to reactify this

2023-06-26
**My code is bugging out, become an exterminator
Problem 1

Arrange:Problem: Property on form is not posting a name
	 Solution: Follow the route and search in views and model folder; use dev tools to verify

Act: Make sure the view has the matching property names
       -Change the value to include the correct names

Assert: Success! Verified that server and views app both posted name successfully 

Problem 2

Arrange:
	-Getting error when deleting item
	-MongooseError: Model.findByIdAndRemove() no longer accepts a callback
	-When I get back start googling/dev tools/ error

Act:  Googled error and found out the syntax I was using was outdated.Deleted call back and made the syntax into a promise.Updated with ‘then()’ and ‘catch()’ in my edit.js controller.

Assert:Success! Verified that server and views both deleted entries successfully.

Problem 3 

Arrange: Need to connect to the right db
	Solution: Change the model exports and add Elisa to DB_CONNECTION

Act: Did everything above but in different orders and a bit more trial and error 🙂

Assert::Success! Verified that the server made entries successfully to the Elisa db.

Want to discuss how hard it will be to reactfy my front end and if there are possible  suggestions that I could be doing now to help with that. Ex. Stuff to avoid for the future, or maybe things that I could do now to help in the future.

Possibly discuss if I should start having an online presence and ways to go about it.

Start fixing and updating my portfolio to actually showcase my current projects. 

Signed up for the free trial copilot, thoughts on it. Still have no idea how to use it. But from what I hear it can really help speed up 



2023-06-27
** #100Devs github teams class
Learned more about GitHub and how it can help workflow
Learned about the process and steps of working on a team.
Have homework to practice using GitHub.
Apparently we are going to start working in teams in July to get the experience of learning and  working on a project with GitHub. 
With practice I could see how this will help me in the future 
Apparently 100Devs is trying to figure out ways to learn and get paid at the same time. 
I'm not sure if we will be working open source or actual paying clients 


2023-06-28
** Had a meeting with my sensei Eric, we went over strategies on where my attention should be going 
	-Linkedin: online presence
	-Elisa app: Strategies on how to incorporate different views

2023-06-29
**Read some dudes blog (wink*)  that was very insightful

2023-06-30
**Searches for examples on the direction I want the app to go
    -Changing the closed and open to medication tooken 
    -Ways I might reactify

2023-07-02
** Finshing Cat app.

2023-07-03
**Finished Cat app.
-need to debug
-thinking on how I'm going to apply this to the Elisa app.  

2023-07-05
**Fixing delete bug on cat app
2023-07-05
**Fixing delete route bug
Arrange: Problem- Getting a ‘Cannot POST /delete/64a2f02ada10692eee434923’ error
	   Soulution- Review code for spelling errors
		      - Check the dom and google for hints

Act: 
	-Follow route and verify that route is configured correctly
-Check for spelling errors along the way
 

Assert: Success! Turned out to be a spelling error; forgot an ‘e’ in delete in the routes

*Added a bit of styling to background

2023-07-09
**Added authentication to cat app

2023-07-10
**Debugged cat app: Had an issue with the userController.
	-I will be incorporating some of this app into my Elisa app.

2023-07-15
**Start incorporating passport into Elisa app; trying out new extensions supposably help with ADHD
    -Added time of day drop down

2023-09-15
 Arrange: The get post route isn't working.When React trys to get /posts from the backend it errors with a 404

 Act: Follow the post route all the way through to see what might be causing the 404. The home controller and the home route are a good place to start tinkering. Wondering if we should just combine connectApi.js and home.js controllers.
 - in the controller home.js ivestigate what getIndex does and if it's set up get.
 -*try checking out the the blog server.js
 -Decide wether I should keep using app.use in my server.js or do the app.get to simplify things(make sure to check out the structure of the folder and how to best use the get)

 Assert:

2023-09-16
**left off on blog backend and testing new MVP structure mainly focusing on routes

2023-09-25
start investigating http://localhost:3000/posts and why I'm gettting this error
history.ts:487 No routes matched location "/posts" 

2023-09-26
Updated useEffect with http://localhost:2121/posts. 
Need to debug "Uncaught TypeError: posts.map is not a function," error
Start deconstructing the routes. One by one and fixing the errors as they come.

Can't decide if should start cleaning up my code and making it dry so I could easily read it or just getting it running. As Im typing this I think getting it running would be best.
    -possible reason I could be getting error is the model doesn't match the current react code. But before I change the react components to accept new model. I want to make sure that's the error or else I could just be making harder for future self.

* Start incorperating my current projects on my profolio.

2023-09-29
Start breaking down the app onto simple components, compare current app to older app. Start off with debugging the map error and fix the cards to fit the model. Main thing here is to get all posts from db.
Keep breaking it down till we get successfull get.
    *Use anime-doro with the new castlevania(so good btw) 25min on 25min off

2023-09-30
Anime-doro was a failure, I ended up watching all eight episodes but I will say I had a cold. That's it!
Okay picking off where we left off the map error and history.ts:487 No routes matched location "/posts" error
    -fixed HomePage.js cards to match the schema 
        _id:
        timeOfDay:
        bloodPressure:
        severity:
        assignedTo:
        status:
        date:

2023-10-05
Going to try to debug my HomePage.js and try to get all posts to display. Asked for a hint to point me in the right direction and an area of focus will be the error catching.
 -When I get back to this later today compare my current backend to other backends I built. 
 -Use postman   
    
2023-10-06
-removed if else in return statement
-got my HomePage to posts by addding setPosts(res.data.ticketList)
- modify other pages trying the same idea

2023-10-08
- following the /posts route from start to finish to try to debug
- decide what routes page I need to use
- after make sure the controller logic matches
- just noticed I have to make a day of the week title(push this till after I get MVP up and running)
 - when I pick back up start at postRoutes.js, one route here is forsure working. this is were I need to tinker to get all my routes up and running. Also I commented out postController.js. Need to edit postRoutes to work with postController. Speration of concerns and all that.
 - in App.js, test to make sure all routes match and work with server.js

 2023-10-10
 -yep, having interwebs isssues

 2023-10-11
 - Fixing routes, followed home route and edited routes/home.js
 -NewPostPage.js seems to be my point of focus. Changed somethings that I don't have enough time to explian but when I come back pick up here.
 - Also home page is now not diplaying posts oof, no biggie. Focus on getting to post to API.

 2023-10-12
 -continued fixing postRoutes
 -changed code crashed my server. Compare new changes to old and how they interact with the api

 2023-10-13
 -focuing on connectApi.js to stop my server from crashing.
 -found a solution to stop db from crashing
 -come back to NewPostPage.js to fix posting errors

 2023-10-16
 debuggin routes
 -failed gracefully 

  2023-10-17
 debuggin routes
 -still failed gracefully 
 -currently fixing router to work with controller
 -un comment postRoutes to get server running correctly
 -new errors woot!

 2023-10-18
 -commented out most of the duplicate code on postRoutes and got new errors.
 -pick up at the postController.js

 2023-10-19
 -made changes to postController.js in attempt to debug posting to my db
 -added content type to NewPostPage.js to test
 -google errors when coming back
 -when server.js is spread out, learn to see how it's spread out by comparing it to other projects
*figure out why it posted a bagillion times to db

20-10-22
-going to address the mutible post issue
-dropped the collection formdatas from mongodb
-adding console logs n stuff
-in my NewPostController I'm not getting back the console.log after making the inital post. This is a good place to start debugging.
-the request console.log up. Good place to pick up here.

2023-10-23
-frontend is broken ?_? was working yesterday oof
-go to git to see history on how I broke it

2023-10-24
-finally found why my frontend was crashing by using githubs timeline
-was an auto added import statment on NewPostPage.js
- now back on fixing multi posts to api