## :diamond_shape_with_a_dot_inside: Introduction
AVEO is an Angular web application which consumes the YouTube v3 Data API to create a minimal user-interface where YouTube videos can be viewed. 


## :diamond_shape_with_a_dot_inside: Technology Stack

* [Angular](https://angular.io/)
* [MongoDB](https://www.mongodb.com)
* [Express.js](https://www.expressjs.com)
* [Node.js](https://www.nodejs.org/)
* [Javascript](https://www.javascript.com)
* [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
* [YouTube v3 Data API](https://developers.google.com/youtube/v3)


## :diamond_shape_with_a_dot_inside: Accessing YouTube API
### Why?
The YouTube Data API uses a quota to ensure that developers use the service as intended and do not create applications that unfairly reduce service quality or limit access for others. After the quota has been exceeded, the API stops working. Therefore, it is required for anyone who wants to use this project to get their own API key.
### How?
- Log in or create an account on https://developers.google.com/.
- Go to this link https://console.developers.google.com/project and click on the blue CREATE PROJECT button.
- Fill in the name you want to assign to the project.
- Search for YouTube Data API v3 through the search bar.
- Select YouTube Data API v3 and click on the ENABLE button.
- Click on <b>"Create Credential"</b> and configure the settings. Select the following options displayed on this page, 
    * YouTube Data API v3
    * Web browser
    * Public data
  Lastly, click the button with “What credentials do I need?”.
- Copy the API Key and paste it in the index.html file under the script tag.
![Code](https://github.com/IpshitaSingh/AVEO/blob/master/FrontEnd/src/assets/4readme.png)


## :diamond_shape_with_a_dot_inside: Installation
1. Clone the repository by pushing the following command on Git Bash:
```
git clone https://github.com/IpshitaSingh/AVEO.git
```
2. Install Node modules using the following command on Node.js command prompt:
```
npm install
```
3. Update the API key in index.html
4. Navigate to FrontEnd folder and run the project using the following command:
```
ng serve -o
```
5. Navigate to BackEnd folder and run the Express server using the following command:
```
node index.js
```