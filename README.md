# firebase-functions-rest-api

READY-TO-USE repo for real-world firebase cloud functions rest api

#### Features
- hot-reloading in development mode
- deployment (staging, production)
- simple, configurable, and extendable

## SET UP + HOW TO USE
1. Create 2 projects in [firebase console](https://firebase.google.com/) (1 for staging, 1 for production)
2. Install firebase-tools globally

    ```
    npm install -g firebase-tools
    ```
    or with yarn
    ```
    yarn global add firebase-tools
    ```
    **note: if faild, try this command**
    ```
    yarn config set ignore-engines true
    ```
3. Login firebase in terminal
    ```
    firebase login
    ```
4. Go to file .firebaserc in this directory, add your project-id
    ```
    "staging": "<project-id>",
    "production": "<project-id>"
    ```
    or you can use firebase cli
    ```
    firebase use --add
    ```
5. Add service account file to `./functions/src/`

   You can find service account from your project [here](https://firebase.google.com/docs/admin/setup#add_firebase_to_your_app)

   After that, change databaseURL to your staging and production project in `./src/functions/service/constant.js`
6. Run this command in console
    ```
    yarn watch
    ```
    _this will watch file changes in_ `./functions/src`

    open another **console**, then run
    ```
    yarn serve
    ```
    ** note: recommend to use node v6.11.5, node > 8 may fail **
    _create firebase emulator which enables local http function test_
7. Make changes in `./functions/src/api/controllers` or another files
8. Open browser | postman with
    ```
    http://localhost:5000/<staging-project-id>/us-central1/api/v1/auth/me
    ```
9. If you want to test functions locally on production services, go to

    `./src/functions/service/localEnv.js`
    ```
    change 'staging' => 'production'
    ```
10. set up config for 1st time (cloud functions use Google App Engine)
    by running

    ```
    yarn set:staging-config
    ```
    then
    ```
    yarn set:production-config
    ```

## Deployment


deploy to staging project
```
yarn deploy:staging
```

or deploy to production project
```
yarn deploy:production
```



