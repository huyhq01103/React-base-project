# CocCoc QC Frontend

License
-------

Copyright (C) 2020 coccoc.com
All rights reserved.

Description
-----------------
- This is the repository for mobile-lucky-draw-frontend

Run the application in local
--------------------------------
## Step 1
Run ```npm install ``` to install all the dependencies.

## Step 2
- Run ```npm run start ``` to run it in the development environemnt.
- This will open the the StarterKit Landing page in http://localhost:3000/

Or

- Run ```npm run build ``` to run it in the production environment.
- This will generate the JS and CSS files inside `build/static/js` and `build/static/css` folders.
- After that you can open the `index.html` page under `./build` folder in your browser.

Install the application in local via docker and docker-compose
--------------------------------------------------------------
1. Copy file `.docker.env.example` to `.env`
2. Change `APP_PORT` in file `.env` to port you want application to listen
    - We are using external port 8080 for application
    - So make sure that you don't have any service which are listening on this port.
    - If this port is occupied, pls change this port to another port
3. Run `docker-compose up --build`
4. Go to http://localhost:port to check

Deployment
----------

#### Deploy on Development

1. git commit & push changes to `develop` branch.
2. run command ./scripts/bump-version.sh <version> "<message>"
    1. version should be in this format: “/^[0-9]+\.[0-9]+\.[0-9]+\-dev$/”
    2. You can check current version in file `./version`
    3. Ex: ./scripts/bump_version.sh 1.1.0-dev "Add new feature"
4. auto build & deploy docker image at: https://jenkins.itim.vn/job/DEV-build-k8s/

#### Deploy on Production

1. git commit & push changes to `master` branch.
2. run command ./scripts/bump-version.sh <version> "<message>"
    1. version should be in this format: “/^[0-9]+\.[0-9]+\.[0-9]+$/”
    2. You can check current version in file `./version`
    3. Ex: ./scripts/bump-version.sh 1.1.0 "Add new feature"
4. auto build & push docker image to docker hub: ccr.itim.vn/browser/xxx
5. Comment ticket to deployment on prod: 

## Mock API Data
 If you want to add a new mock api, please add data to this file:
```data/index.js```
```
{
    user: {
        name: 'Sample Name'
    },
    get_event_types: {},
    faqs: [],
}
```
 Then we can fetch the data in any component like this:
  ```
  import API from "src/api";
  //More code here...
  const { data: eventsInfo = {} } = await API.get("/get_event_types");
  console.log(eventsInfo);
  ```