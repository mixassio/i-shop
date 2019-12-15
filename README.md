# i-shop

# Типовой интернет магазин

Стэк:

- NodeJS
- TypeScript
- NestJS
- Mysql
- Redis
- Docker (Docker-compose)

Основные сервисы:

1. Приложение магазина
2. БД
3. adminer для доступа в БД

Как развернуть:

1. git clone https://github.com/mixassio/i-shop.git && cd i-shop
2. make app-build
3. make app

На 3000 порту стартует приложение, на 8080 порту стартует админер, база MySQL стартует на стандартном порту 3306 в контейнете.

Типовой сценарий через curl или postman

1. Зарегистрировать нового пользователя

```
curl
  -d '{ "username" : "Gosha", "email": "gosha@mail.ru", "password": "to
psecrete"}'
  -H "Content-Type: application/json"
  -X POST http://localhost:3000/auth/register


{"username":"Gosha","email":"gosha@mail.ru","password":null,"id":2}%
```

2. Залогиниться и получить токен

```
curl
  -d '{ "username" : "Gosha", "password": "topsecrete"}'
  -H "Content-Type: application/json"
  -X POST http://localhost:3000/auth/login


{"expires_in":3600,"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikdvc2hhIiwiaWF0IjoxNTc2NDE5MDgxLCJleHAiOjE1NzY0MjI2ODF9.KY1sw5sNyZK6XmtvFz5oGp0OMIrpX3vhsB_WeVuPPKI"}%
```

3. Посмотреть список пользователей (только с токеном)

```
curl
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikdvc2hhIiwiaWF0IjoxNTc2NDE5MDgxLCJleHAiOjE1NzY0MjI2ODF9.KY1sw5sNyZK6XmtvFz5oGp0OMIrpX3vhsB_WeVuPPKI"
  -X GET http://localhost:3000/users


[
  {"id":1,"username":"Misha","password":null,"passwordHash":"$2b$10$eO1X0QBY1gSod27/C8b4cOr.Fyw2ZYx6qavEQB7x8HOaer1EaRqL6","email":"misha@mail.ru"},

  {"id":2,"username":"Gosha","password":null,"passwordHash":"$2b$10$seh91ZDl4/JVPlHpmPZOROHQxy.z9wK38Eq1YXwJBTTTskOOKTkDG","email":"gosha@mail.ru"}
]
```

4. Создать продукт

```
curl
  -d '{ "key" : "PHONE1", "title": "iphone 11"}'
  -H "Content-Type: application/json"
  -X POST http://localhost:3000/products

{"key":"PHONE1","title":"iphone 11","id":2}%
```

5. Посмотреть список товаров

```
curl
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikdvc2hhIiwiaWF0IjoxNTc2NDE5MDgxLCJleHAiOjE1NzY0MjI2ODF9.KY1sw5sNyZK6XmtvFz5oGp0OMIrpX3vhsB_WeVuPPKI"
  -X GET http://localhost:3000/products

[{"id":1,"key":"product1","title":"Testing product 3"},{"id":2,"key":"PHONE1","title":"iphone 11"}]%
```

6. Купить товар

Добавится в ближайшее время)
