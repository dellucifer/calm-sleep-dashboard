## Assignment for Web Development Intern

### Getting Started
To get started, the user must have npm installed on his/her machine. Steps for the same are as follows:
- Clone the repo using git =>  `git clone https://github.com/dellucifer/calm-sleep-dashboard.git`
- Go into the directory of cloned repository => `cd /calm-sleep-dashboard`
- Now run the project using => `npm start`

### Structure
This repository contains the components and directoris. Usage of important ones is listed below:
- `App.js` => It is the file which integrates all the component of this project i.e Dashboard and Navbar components.
- `Navbar.js` => This component is responsible for the navbar on the top.
- `Dashboard.js` => This is the main component and it resembles the datashboard.

### Usage
After the server has started, the components require the data in the form of `props`. These props are getting passed via the `App.js`. So, if one wants to change the dashboard data, he/she can modify it by modifying the props in the App.js where the dashboard component has been called.
These props includes:
- `Image URL` of the thumbnail.
- `Unique Plays` as an integer.
- `Total Plays` as an integer.
- `Completion Rate` also as an integer but make sure its value lies between 0-100 as it denotes the percentage.
- `title` of the dashboard.

### A Glimpse of the dashboard
<p align="center">
<img src="https://raw.githubusercontent.com/dellucifer/calm-sleep-dashboard/master/public/glimpse.png" alt="loading...">
</p>


You can reach me out via my mail too. Here's it is, <a href="mailto: pg99285@gmail.com" target="_blank">mail me</a>.
