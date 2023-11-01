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

**Project Presentation and Slides:** [2-min Presentation]() | [Slides]()

**Overview(gif)**

## Instructions to Build and Use

## Project Design

Design documents can be found in the [docs](docs) folder, including:

1. [Project Description](docs/project_description.txt)
2. [User Personas and User Stories](docs/user_personas_and_stories.txt)
3. [Design Mockup](docs/design_mockup.pdf) overview:

<img width="523" alt="design mockup overview" src="https://github.com/yuqihu1103/SteadySobriety/assets/133090163/e11567d2-612c-4429-9078-e846fb4e50d8">

## Technology Stack

Backend:

1. DB: models - users, sober-logs, forum-posts; support CRUB operations on each model
2. routes: register(post)/login(post)/logout(get), sober-log (post/get), forum-posts(post/get)
3. (unit tests) or test with postman before deploying
4. deploy backend service (Render)

Frontend:

1. start app with vite
2. components: to be designed, should serve essential functions above
3. deploy application

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) for details.
