# REST API USING JWT

This application for Assignment 2: Build Your First REST API USING JWT

# Table Of Contents
- [REST API USING JWT](#rest-api-using-jwt)
- [Table Of Contents](#table-of-contents)
    - [HOW TO](#how-to)
      - [1. Install NPM Package](#1-install-npm-package)
      - [2. Create environment](#2-create-environment)
      - [3. RUNNING THE APPS](#3-running-the-apps)
    - [Start Using The Apps](#start-using-the-apps)
      - [1. Sign Up](#1-sign-up)
      - [2. Sign In](#2-sign-in)
    - [The Routes](#the-routes)
      - [1. View All Users](#1-view-all-users)
      - [2. Create User](#2-create-user)
      - [3. Update User](#3-update-user)
      - [4. Delete User](#4-delete-user)
      - [5. View Single User](#5-view-single-user)
  - [Thank You](#thank-you)

### HOW TO

First Clone Application

```
git clone https://github.com/uchup07/hacktiv8-jwt.git
```

#### 1. Install NPM Package

```cmd
npm install
```

#### 2. Create environment

rename file ``.env.example`` to ``.env``

```cmd
mv .env.example .env
```

#### 3. RUNNING THE APPS

```cmd
npm run start
```

### Start Using The Apps

Now, using any HTTP Client like [POSTMAN](https://www.getpostman.com/apps)

#### 1. Sign Up

``POST http://localhost:3000/signup``

Parameters Body

| Parameter              | Value                    |
| ---------------------- | ------------------------ |
| username               |                          |
| email                  |                          |
| password               |                          |

Response ``Status 200``

```
{
    "message": "Thank you for Signing Up!",
    "data": {
        "id": number,
        "username": "string",
        "email": "string",
        "password": "string"
    }
}
```

#### 2. Sign In

``POST http://localhost:3000/signin``

Parameters Body

| Parameter              | Value                    |
| ---------------------- | ------------------------ |
| username               | admin2                   |
| password               | Password123              |

Response ``Status 200``

```
{
    "token": "..."
}
```

And then add this ``token`` to **Parameters Body**

### The Routes

**Restriction Routes** using this token they are:

#### 1. View All Users

``GET http://localhost:3000/users``

Response ``Status 200``

```
[
    {
        "id": "number",
        "username": "string",
        "email": "string",
        "password": "string"
    },
    {
        "id": "number",
        "username": "string",
        "email": "string",
        "password": "string"
    },
    ...
]
```

#### 2. Create User

``POST http://localhost:3000/users``

Parameters Body

| Parameter              | Value                    |
| ---------------------- | ------------------------ |
| username               |                          |
| email                  |                          |
| password               |                          |

Response ``Status 200``

```
{
    "message": "Create User Successfully!",
    "data": {
        "id": "number",
        "username": "string",
        "email": "string",
        "password": "string"
    }
}
```

#### 3. Update User

``PUT http://localhost:3000/user/:userId``

Parameters Body

| Parameter              | Value                    |
| ---------------------- | ------------------------ |
| username               |                          |
| email                  |                          |
| password               |                          |

Response ``Status 200``

```
{
    "message": "Update User Successfully!",
    "data": {
        "id": "number",
        "username": "string",
        "email": "string",
        "password": "string"
    }
}
```
#### 4. Delete User

``DELETE http://localhost:3000/user/:userId``

Response ``Status 200``

```
{
    "message": "Delete User Successfully!",
    "data": [
        {
            "id": "number",
            "username": "string",
            "email": "string",
            "password": "string"
        },
        {
            "id": "number",
            "username": "string",
            "email": "string",
            "password": "string"
        },
        ...
    ]
}
```

#### 5. View Single User

``GET http://localhost:3000/user/:userId``

Response ``Status 200``

```
{
    "id": "number",
    "username": "string",
    "email": "string",
    "password": "string"
}
```

## Thank You
