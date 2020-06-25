## :diamond_shape_with_a_dot_inside: Introduction
AVEO is an Angular web application which consumes the YouTube v3 Data API to create a minimal user-interface where YouTube videos can be viewed. 

## :diamond_shape_with_a_dot_inside: Technology Stack

* [Angular](https://angular.io/)
* [Node.js](https://nodejs.org/)
* [Javascript](https://www.javascript.com)
* [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
* [YouTube v3 Data API](https://developers.google.com/youtube/v3)

## :diamond_shape_with_a_dot_inside: Accessing YouTube API

- Log in or create an account on https://developers.google.com/.
- Go to this link https://console.developers.google.com/project and click on the blue CREATE PROJECT.
!(https://rapidapi.com/blog/wp-content/uploads/2019/03/google-apis-create-project.png)
- Fill in the name you want to assign to your project.
- Head over to [Google API Console](https://console.developers.google.com/) and search for YouTube Data API v3 in search bar.
- Select YouTube Data API v3 and click on the ENABLE button.
- Click on <b>"Create Credential"</b> and configure the settings. Select the following options displayed on this page, 
    * YouTube Data API v3
    * Web browser
    * Public data.
  Lastly, click the button with “What credentials do I need”.
- Copy the API Key and paste it in the index.html file under the script tag.

## :diamond_shape_with_a_dot_inside: Installation
1. Clone the repository by going by pushing the following command on Git Bash:
```
git clone https://github.com/IpshitaSingh/AVEO.git
```
2. Install the Node modules using the following command on Node.js command prompt:
```
npm install
```
3. Run the project using the following command:
```
ng serve -o
```
