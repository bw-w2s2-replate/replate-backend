# replate-backend
 * [Technical Design Document](https://docs.google.com/document/d/1wSq4LByT5i4Z4KL_k2MvN4oLEToGGLGJb64NITssmUM/edit#)
# This readme is about Back-End part of the replate project
List of dependencies used in the project,

dependencies:

    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^7.0.0",
    "express": "^4.16.4",
    "helmet": "^3.16.0",
    "jsonwebtoken": "^8.5.1",
    "knex": "^0.16.3",
    "sqlite3": "^4.0.6"

devDependencies:

	"cross-env": "^5.2.0",
    "nodemon": "^1.18.10"

The following are the details about creation and testing Database, End points and function models used in the project:

The default end point to test the server can be done by making GET request to the '/' endpoint of the running server. 
Using knex migration tools, created a database, created 3 tables with the necessary columns, created seeds to test them.
Created CRUD functions model file(userModel) which should make requests to the users table; created 2 GET endpoints: one for getting all data from users table, another for getting by specified id; I have tested my changes to make sure that the endpoints are functioning/working. You can test them with Postman by making GET requests to /api/users/all and /api/users/:id
Created POST endpoint to add a user to the users table; I have tested my changes to make sure that the endpoint is functioning/working. You can test it with Postman by making POST requests to /api/users/create.
Created PUT endpoint to update the users table; I have tested my changes to make sure that the endpoint is functioning/working. You can test it with Postman by making PUT requests to /api/users/:id
Created DELETE endpoint to delete the specified user from the users table; I have tested my changes to make sure that the endpoint is functioning/working. You can test it with Postman by making DELETE requests to /api/users/:id

Created CRUD functions model file(requestsModel) which should make requests to the requests table; created 2 GET endpoints: one for getting all data from requests table, another for getting by specified id; I have tested my changes to make sure that the endpoints are functioning/working. You can test them with Postman by making GET requests to /api/requests/all and /api/requests/:id
Created POST endpoint to add a request to the requests table; I have tested my changes to make sure that the endpoint is functioning/working. You can test it with Postman by making POST requests to /api/requests/create.
Created PUT endpoint to update the requests table; I have tested my changes to make sure that the endpoint is functioning/working. You can test it with Postman by making PUT requests to /api/requests /:id
Created DELETE endpoint to delete the specified request from the requests table; I have tested my changes to make sure that the endpoint is functioning/working. You can test it with Postman by making DELETE requests to /api/requests /:id

Additional major changes done by VeraSimon:

Added working config from previous project for production PostgreSQL setup. Current migrations do not require any known changes for successful run of migration files.
PostgreSQL config is known working on multiple previous projects. Confirmed existing development config still worked as expected with a manual run on localhost. 
