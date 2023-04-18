# e-commerce-react-react-redux-UI-UX

An e-commerce app built on MERN stack (MongoDB, Express, React and Node) with Stripe Checkout to handle payments.
Features present in the app :-
 Authentication using JSON Web Tokens (JWT).
 Option to add, edit, view and delete all the items in our store.
 Option to add items or remove items from the cart for the user.
 Display the total bill of the cart and update it as soon as the cart is updated by the user.
 Using Local Storage to store the JWT so that we only allow logged-in users to buy items.
 Option to pay using Stripe Checkout and thus creating a new order and emptying the cart after payment is successful.
 Option to view all your past orders along with the bill amount for each.
 
  ####How To install and run the above project:
     1.Open the package.json file and confirm all dependancies that are used to serve as a backend prerequisite
     
     2. Ensure inside project directory locate a file called server.js and check it keenly to examine the project requirements and dependancies that you need to 
     
     add since they are named during calling the app in backend cors.
     
     3.Inside the project directory where both the server.js file and the package.json file exits, run npm install ,this command will install all dependancies
     
      that are useful to start the backend server.
      
      4.After project installation you can start the server by typing this command nodemon run server, remember you are inside backend server.
      
      5.After running the backend effectively, let us jump into the frontend part, remember this is where react.js and react redux are installed as dependancies 
      
      of this project.
      
      6.Inside the client foder, after checking all the dependancies i have applied in the package.json file, run npm install to install all dependancies
      
      7.Remember the above command adds node_modules which is [a directory in a Node.js project that contains all the dependencies
      
      (i.e. third-party packages or modules) that the project needs to run. When you install a package using Node Package Manager (NPM) or Yarn, 
      
      it gets saved in the node_modules directory.]
      
      8.All is done , to finalise everything, you need to configure redux extension  to your vscode, follow the below instructions:
      
      
         Make sure you have the VSCode extension "Redux DevTools" installed in your VSCode editor.
         

        Open your React project in the VSCode terminal by navigating to the project directory.

        Install the "redux-devtools-extension" package by running the following command:
        
        npm install --save-dev redux-devtools-extension
        
     9.Its almost done!! to add the above redux extension to your best browser, remember am using chrome browser, 
     
     you can check for other browser types of your choice how to:
     
           REMEMBER TO GO THROUGH ALL THE PROCEDURRES HOW TO DO IT HERE FOR CHROME BROWSERS
                   
        first of all , read and understand : 
        
The Redux DevTools extension for Chrome is a browser extension that provides a user interface for debugging and monitoring Redux state changes in your application. 

With this extension, you can visualize your Redux store in real-time, track actions and their payloads, and even time travel through state changes to track down bugs.

To install the Redux DevTools extension in Chrome, follow these steps:

Open the Chrome Web Store in your browser.

Search for "Redux DevTools" in the search bar.

Click on the "Add to Chrome" button to install the extension.

Once the extension is installed, you should see a new icon in your Chrome toolbar.

To use the extension, simply navigate to your Redux-powered application and open the Redux DevTools panel by clicking on the extension icon.

Note that in order to use the Redux DevTools extension, your application must be using the Redux state management library.

Additionally, you may need to configure your application to enable the extension, depending on the specific implementation.

Consult the Redux documentation or your application's documentation for more information.

  FINALLY :
  
  inside the project directory inside client folder, you can run npm start to start your project
  
  Remember this project is under development, any contribution to it may add bigger value and also may extend its usability
  
  Good luck in your coding journey, happy coding, happy hackers too!!!
