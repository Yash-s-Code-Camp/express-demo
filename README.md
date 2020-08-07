# express-demo

## Use these commands to start this app on your machine

```cmd
$ git clone https://github.com/Yash-s-Code-Camp/express-demo.git
$ cd express-demo
$ npm install
```

> Change your username, password, db_location and db_name in connection string

```javascript
mongoose.connect('mongodb+srv://<username>:<password>@<db_location>/<db_name>', () => {
    console.log(`Connected to db`)
})
```
```cmd
$ npm start
```
