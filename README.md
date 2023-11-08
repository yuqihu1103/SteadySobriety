# SteadySobriety

**Authors:** [Yuqi Hu](https://yuqihu1103.github.io/) and [Zhiqian Zhang](https://zhiqian-zhang.github.io/ZhiqianZhang-Peronal-Website/)

**Class:** [CS5610 at Northeastern](https://johnguerra.co/classes/webDevelopment_fall_2023/)

**Deployment:** https://steady-sobriety.onrender.com/

**Project Objectives:**

SteadySobriety is a web application designed to provide essential tools and support for individuals seeking to overcome alcohol abuse
and maintain lasting sobriety. This platform offers a range of features that help users on their journey towards a healthier,
alcohol-free life. After registering and logging in, user can log the time of their last drink. User can keep track of their current
and longest sobriety streak and compare with other users on the scoreboard. We'll also add a discussion forum in the future.
By combining user-friendly interfaces, data tracking, community engagement, and motivational elements, SteadySobriety strives to be a
valuable resource in the battle against alcohol addiction.

## Project Demo and Presentation

**Project Demo Video:** [3-min Demo]()

**Project Presentation and Slides:** [2-min Presentation]() | [Slides](https://docs.google.com/presentation/d/1bwjb_-aFty6QstsUDy_j1427GTJmW1Us-pnAwRehrSU/edit#slide=id.g297f0f13694_0_108)

**Overview(gif)**

## Instructions to Build and Use

### Installation

Clone this repository
```
https://github.com/yuqihu1103/SteadySobriety.git
```

Change your current working directory to the project directory.

All the following commands assumes you are in the project root directory.
```
cd path/to/the/repo/SteadySobriety
```

Run the following command to install dependencies for both frontend and backend and build the frontend.

Same as running `npm install && cd front && npm install && npm run build`.
```
npm run build
```

Start the backend server, which will be running on http://localhost:3000.
```
npm start
```

### Database

To use this application locally, you need to have a Mongo server running on localhost:27017, or configured in the MONGOMONGODB_URI environment variable. 

Run the following command to initializing the database. It will create a SteadySobriety databases with collections users and sober_logs, each populated with 1000 synthetic records.
```
npm run initDB
```

You can also run our script to generate new mock data before initializing database
```
node db/mock_data/mock_data.js
```


## Project Design

Design documents can be found in the [docs](docs) folder, including:

1. [Project Description](docs/project_description.txt)
2. [User Personas and User Stories](docs/user_personas_and_stories.txt)
3. [Design Mockup](docs/design_mockup.pdf) overview:

<img width="523" alt="design mockup overview" src="https://github.com/yuqihu1103/SteadySobriety/assets/133090163/e11567d2-612c-4429-9078-e846fb4e50d8">

## Technologies

**Backend**: Node + Express, MongoDB

**Frontend**: React, Vite

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) for details.
