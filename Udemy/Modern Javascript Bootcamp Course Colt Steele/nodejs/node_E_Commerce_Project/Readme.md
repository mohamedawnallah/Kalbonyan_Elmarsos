### E-commerce App

📌 Request -> Node Js Server -> File-based data store

📌 File-based data store -> Nodejs Server -> HTML Doc

📌 Project Setup:
    1. Create a new Project Directory
    2. Generate a package.json file
    3. Install a few dependencies to help us write our project
    4. Create a 'start' script to run our project

📌 npm run <script>

📌 Express allow us to set up a full-featured web server that can receive network requests and respond to them (The same as Node Js Standard Library Server but there are more features and edge cases included)

📌 Route Handlers

📌 When we enter a url in a browser our browser formulating a network request Its components:
-`host`
-`Port`
-`Path`
-`Method`
    To Your Operating System then to Network devices e.g NIC
    , To DNS Server (Host Name, IP Address) If it is host
    , That means me (local computer) Ports on your computer 
        you can have many websevers 
    , Operating system runs website whatever its port is
    , Express Listens to that port and It cares about HTTP Request not all matter but `PATH`, `METHOD`
    , Router Object has multiple router handlers 
     
📌 Automatic Submission, Looking for Input Elements Into Form and collect all names values from form 

📌 When we make a form request method type with POST request it is appended into request body instead of url bar

📌 Buffer is an array of raw information in javascript

📌 You can get form data that is embededd into body Manually but It will be a repetitive task and don't achieve DRY Principle

📌 Middle Ware Function is a function that does some pre-processing on the `req` and `res` objects that is utimately usable through Express

📌 Express created before promises .

📌 next callback function means all the processing is done

📌 req object has access to method 

📌 Globally Applying Middlewares

📌 Express server interfaces with Data storage for storing users and products list by storing it on the hardware 
users.json
products.json

📌 - Will error if we try to ope/write the same file twitce at the same time
   - Won't work if we have multiple servers running on different machines
   - We have to write to the FS everytime we want to update some data

📌 In Server Design and data management There are two main approaches for managing data:
1.Repository Approach
    - A single class (repository) is responsible for data access
       All records are stored and used as a  plain JS object
2.Active Record Approach
    - Every Record is an instance of a model class that has its own methods to CRUD operations

📌 The PlainObject type is a JavaScript object containing zero or more key-value pairs. 

📌 Better Json Formatting using JSON.stringify(<records>, null, <indentation-levels>)

📌 toString('hex') In a String Hex Format

📌 SignUp Validation Logic 

📌 Cookies are very small string of characters That servers want the browser to store

📌 Request Cookies

📌 Cookies are in encrypted format

📌 Cookies Based Authentication

📌 Dealing With COOKIES using cookie-session npm library

📌 Signing out the user

📌 Password Hashing Algorithm

📌 It IS NEVER Now to take the output of Hashing Algorithm, injecting it through Hashing Algorithm, and give you the same input earlier

📌 Rainbow Table Attack

📌 Salt is a random string of characters that is going to prevent the user from giving us a password that is too common

📌 Salting + Hashing Passwords

📌 Project Structure will be divided into Routes, Repositories, and Views Directory

📌 Adding Better Form Validation

📌 An express.js middleware for validator.s

📌 Validation vs Sanitization

📌 Sanitization modifies each field in place applying each of sanitizers in the order they were specified

📌 Route Handler is a dedicated Javascript function to receive incoming requests

📌 Exposing Public Directories


📌 There is a default value method in form which is `GET` taking all the information  of form and added to url and send url to backend

📌 method define how it is gonna be transmitted but `enctype` encoding type how form data is gonna be encoded

📌 the default value for enctype is
`application/x-www-form-urlencoded`

📌 Form Data Multipart Submission

📌 Multipart Request each part represents a different input out of the form

📌 Load Balancer receives incoming requests and divide them on one instance of server instances

📌 Different Methods of Image Storage:
🚀 Co-Located Hard Disk 
🚀 Database (The cost)
🚀 Stream Through to Centralized Datastore from cloud provider
🚀 Presigned URL 
    - The best
    - Browser makes an initial request to Servers but severs don't take the responsibility of uploading images to data store but it retures presigned Url to the browser. It has some configurations and temporary access to the browser to upload the image itself to Data store of any cloud provider you've assigned to the project before
    -Secure, Cost-Effective

📌 A presigned URL is a URL that you can provide to your users to grant temporary access to a specific S3 object

📌 Express is already written before promises and async/await

📌

📌

📌

📌

📌

📌

📌

📌

📌

📌

📌

📌

📌
