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





