# express-demo

## Use these commands to start this app on your machine

```sh
$ git clone https://github.com/Yash-s-Code-Camp/express-demo.git
$ cd express-demo
$ npm install
```

> If you have already cloned it then use this command to update

```sh
$ git pull origin
```

> Create a file 'db.js' in root directory and write following code

```javascript
const db = {

    //Replace with your username, password, cluster and db_name
    username: '<username>',
    pass: '<password>',
    cluster: '<cluster>',
    database: '<db_name>'
}

module.exports = db
})
```

> To run the server

```sh
$ npm start
```

> API end-points

```
[GET] - /students/all
[GET] - /students/id/:id

[GET] - /teacher/all
[GET] - /students/id/:id

[POST] - /students/add
[POST] - /teachers/add

[PUT] - /students/id/:id
[PUT] - /teachers/id/:id

[DELETE] - /students/id/:id
[DELETE] - /teachers/id/:id

```
