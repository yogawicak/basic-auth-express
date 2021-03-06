define({ "api": [
  {
    "type": "post",
    "url": "/auth/signup",
    "title": "Create User Account",
    "name": "CreateUser",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "username",
            "optional": false,
            "field": "username",
            "description": "<p>users min 5 max 20 required</p>"
          },
          {
            "group": "Parameter",
            "type": "email",
            "optional": false,
            "field": "email",
            "description": "<p>regex</p>"
          },
          {
            "group": "Parameter",
            "type": "password",
            "optional": false,
            "field": "password",
            "description": "<p>min 5 required</p>"
          },
          {
            "group": "Parameter",
            "type": "fullname",
            "optional": false,
            "field": "fullname",
            "description": "<p>bebas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "\n{\n\t\"username\":\"aaaaaa\",\n\t\"email\":\"123@gmail.com\",\n\t\"password\":\"12345\",\n\t\"fullname\":\"budidoremissss\"\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Message",
            "optional": false,
            "field": "Created",
            "description": "<p>User.</p>"
          },
          {
            "group": "Success 200",
            "type": "data",
            "optional": false,
            "field": "Username",
            "description": "<p>data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successfull Response:",
          "content": "{\n        \"message\": \"User Created\",\n        \"data\": {\n            \"username\": \"aaaaaassssss\"\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error Response:",
          "content": "{\n    \"message\": \"Username/Email Telah Digunakan\",\n    \"stack\": \"Error: Username/Email Telah Digunakan\\n    at E:\\\\YOGA PUNYA\\\\backend\\\\jwt-pattern-cj\\\\controller\\\\authController.js:38:31\\n    at processTicksAndRejections (internal/process/task_queues.js:97:5)\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/authController.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/auth/login",
    "title": "Login User Account",
    "name": "LoginUser",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "username",
            "optional": false,
            "field": "pilih",
            "description": "<p>salah satu email / username</p>"
          },
          {
            "group": "Parameter",
            "type": "password",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body",
          "content": "{\n\t\"username\":\"budiasss26\",\n\t\"email\":\"123@gmail.com\",\n\t\"password\":\"12345\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error Response:",
          "content": "{\n    \"message\": \"Check your username or password\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/authController.js",
    "groupTitle": "Auth"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "E:\\YOGA PUNYA\\backend\\jwt-pattern-cj\\docs\\main.js",
    "groupTitle": "E:\\YOGA PUNYA\\backend\\jwt-pattern-cj\\docs\\main.js",
    "name": ""
  }
] });
