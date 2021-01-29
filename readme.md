# Appcues Developer Infrastructure Sample App
A simple Node.js application using the [Express framework](https://github.com/expressjs/express) for use in the Appcues Developer Infrastrcuture project.
## Running the App
Running the application can be done by installing Node then running
```
npm install
```
followed by
```
npm start
```

It is also possible to run the application with Node directly by running 

```
node ./bin/www
```
## Testing 
The application listens on port `3000` by default. When the application is running a request to `http://localhost:3000` will return the words `Index response` as the response body.
### Unit Tests
The application has a single unit test written with [Jest](https://github.com/facebook/jest).
The test can be run with the command
```
npm run test
```
or simply
```
jest
```
...
## License
[MIT](./LICENSE)
