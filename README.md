# NoteTaker

## Description
This project is designed to allow a user to write and save notes, delete notes they've written before to allow better organization for their tasks. This application uses an express backend and saves and retrieves notes from a JSON file. The application is hosted on Heroku. 

## Usage
This project requires node, express, and uuid. Tests were done using postman and localhost. Upon page load with the "/" route, the user is directed to the home page (index.html). From there, the user clicks a button that will route them to the "/notes" page, which will allow the user to input text, save, view, and delete any other note files (notes.html). 
The user can view the API routes using "/api/notes", and can add a parameter for their note ID after that. The note ID is generated by the uuid. If the user browses any other route not recognized, they are automatically directed back to the home page. 

## Screenshots
![Capture](https://user-images.githubusercontent.com/73862470/107314700-3ea15880-6a63-11eb-9552-3368baa5ea89.PNG)
![Capture2](https://user-images.githubusercontent.com/73862470/107314708-4103b280-6a63-11eb-9074-ec163777b95b.PNG)
![Capture3](https://user-images.githubusercontent.com/73862470/107314710-4234df80-6a63-11eb-976a-69f56cc35d05.PNG)
![Capture4](https://user-images.githubusercontent.com/73862470/107314711-43660c80-6a63-11eb-870d-f8879a41bf48.PNG)
![Capture1](https://user-images.githubusercontent.com/73862470/107314705-3fd28580-6a63-11eb-81bd-7b94882c08e1.PNG)

## Links
Questions? My email: matthewguillen777@gmail.com </br>
Link to repository: https://github.com/GuilleMGN/TemplateEngine </br>
Link to deployed application: <a href="https://limitless-cove-32044.herokuapp.com/" target="_blank" rel="noopener noreferrer">Note Taker</a>

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
