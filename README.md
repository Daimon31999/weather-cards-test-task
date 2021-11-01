 ## Project title: Weather cards.


Идея проекта в том чтобы получать информацию о погодных условиях в локациях ранее зарегистрированных пользователем в приложении. 


Для хранения данных можешь использовать IndexedDB или же хранить всё в виде JSON-a в browser storage. Проект состоит из 4 компонентов.


### 1. Landing Page. Можешь взять что-то готовое и адаптировать под проект.

### 2. Форма авторизации (Valid credentials: admin/123456).  Храни состояние авторизации в localStorage

### 3. Форма добавления локации (авторизованный)  Форма будет состоять из полей:       

Title - text,      

Coordinates (lat,lan) - number,  (could be replaced with city name)     

Description - text,     

Tags -  text, separated by comma / or use a custom component 

### 4. Details Page (авторизованный)    Содержит информацию о погоде, ранее зарегистрированных локаций в виде таблицы или Кардов (card) Weather API docs: https://openweathermap.org/current

Request example: http://api.openweathermap.org/data/2.5/weather?lat=44&lon=44&APPID=0ecc34d6d329fb1c62bcf0bf7778ebb1

API_KEY =  0ecc34d6d329fb1c62bcf0bf7778ebb1



## Requirements: 

You can use:* Libraries, modules that contain icons(font-awesome), stylesheest (bootstrap, mat-bootstrap, other...).* Component for tags.


## Use:

* Guards, 

* Interceptos, 

* Custom Components, 

* Use Lazy Loaded modules, 

* Reactive Forms,

* Form Validations.