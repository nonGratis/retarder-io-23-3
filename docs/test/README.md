# Тестування працездатності системи

## Запуск сервера

За командою:

```sh
node server.js
```

Вивід консолі:
<p align="left">
  <img src="./image-19.png">
</p>

## Тестування RESTfull API через запити HTTTP

### POST

#### /sessions – АВТОРИЗАЦІЯ

На початковій стадії створення РБД було додано деякі профілі користувачів:

<p align="left">
  <img src="./image.png">
</p>

Вхід у систему за допомогою цих даних:
<p align="left">
  <img src="./image-1.png">
</p>

Тестування на некоректні дані:
<p align="left">
  <img src="./image-2.png">
</p>

#### /users – РЕЄСТРАЦІЯ

Реєстрація нового облікового запису в системі:
<p align="left">
  <img src="./image-3.png">
</p>

Демонстрація змін в РБД:
<p align="left">
  <img src="./image-4.png">
</p>

Тестування на некоректні дані (реєстрація наявного користувача):
<p align="left">
  <img src="./image-5.png">
</p>

<p align="left">
  <img src="./image-6.png">
</p>

#### /mediadata – ДОДАВАННЯ МЕДІАДАНИХ

Початкове наповнення таблиці `mediadata` у РДБ:
<p align="left">
  <img src="./image-10.png">
</p>

Виконання відповідного запиту HTTP:
<p align="left">
  <img src="./image-11.png">
</p>

Відповідні зміни у РДБ:
<p align="left">
  <img src="./image-12.png">
</p>

### GET

#### /mediadata:id – ОТРИМАННЯ МЕДІАДАНИХ

Відповідно за відомим ID медіа, було отримані значення з РБД:
<p align="left">
  <img src="./image-15.png">
</p>

### PUT

#### /users:id – ЗМІННА ДАНИХ ОБЛІКОВОГО ЗАПИСУ

Відповідно за відомим ID облікового запису, було змінено його дані:
<p align="left">
  <img src="./image-7.png">
</p>

Зміни на стороні РБД:
<p align="left">
  <img src="./image-8.png">
</p>

#### /users:id – ЗМІННА МЕДІАДАНИХ

Відповідно за відомим ID медіа, було внесенні змінени до РДБ:
<p align="left">
  <img src="./image-13.png">
</p>

Зміни на стороні РБД:
<p align="left">
  <img src="./image-14.png">
</p>

### DELETE

#### /users:id – ВИДАЛЕННЯ ОБЛІКОВОГО ЗАПИСУ

Використовуючи відповідний ID облікового запису, видалеми його з РДБ:
<p align="left">
  <img src="./image-9.png">
</p>

Відповідні зміни у РДБ:
<p align="left">
  <img src="./image-18.png">
</p>

#### /mediadata:id – ВИДАЛЕННЯ МЕДІАДАНИХ

Відповідно за відомим ID медіа, було видалено необхідні медіадані з РДБ:
<p align="left">
  <img src="./image-16.png">
</p>

Та відповідна перевірка у Workbench:
<p align="left">
  <img src="./image-17.png">
</p>