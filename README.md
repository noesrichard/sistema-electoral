This system allows the registration of users and candidates to carry out a voting process.

The database is a JSON file that can be served as a REST API using the json-server package. The frontend consists of an application developed with Angular and Material Angular.

To run json-server with the database in db.json:

1. Install json-server globally using the following command:
   ```
   npm install -g json-server
   ```

2. Run json-server to watch for changes in the db.json file:
   ```
   json-server --watch src/data/db.json
   ```

To run the Angular app, follow these steps:

1. If necessary, install the Angular CLI globally:
   ```
   npm install -g @angular/cli
   ```

2. Inside the project, install the dependencies by running the following command:
   ```
   npm install
   ```

3. Start the Angular development server and open the application in the browser:
   ```
   ng serve -o
   ```
