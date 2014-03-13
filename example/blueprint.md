FORMAT: 1A

# Example Project API
Application Programming interface for Example Project

# Group User
The User resource is responsible for managing all interactions with Users in the system.

A User has the following attributes:

- id (int, required)
- FirstName (varchar, required)
- LastName (varchar)
- Email (varchar)
- CreatedDate (datetime)
- UpdatedDate (datetime) 

Append to first resource group description

## User [/Users/{id}]
+ Model (application/json)

    JSON representation of User resource
    + Body

            {
                "id": "",
                "FirstName": "",
                "LastName": "",
                "Email": "",
                "CreatedDate": "",
                "UpdatedDate": ""
            }
            

+ Parameters
    + id (Integer) ... Unique id of the User

### Get a User [GET]
+ Response 200 (application/json)

        {
            "id": "",
            "FirstName": "",
            "LastName": "",
            "Email": "",
            "CreatedDate": "",
            "UpdatedDate": ""
        }
        

### Update a User [PUT]
+ Request

        {
            "FirstName": "",
            "LastName": "",
            "Email": "",
            "CreatedDate": "",
            "UpdatedDate": ""
        }
        

+ Response 200 (application/json)

        {
            "id": "",
            "FirstName": "",
            "LastName": "",
            "Email": "",
            "CreatedDate": "",
            "UpdatedDate": ""
        }
        

### Delete a User [DELETE]
+ Response 204

## Users [/Users]
+ Model (application/json)

        [
            {
                "id": "",
                "FirstName": "",
                "LastName": "",
                "Email": "",
                "CreatedDate": "",
                "UpdatedDate": ""
            },
            {
                "id": "",
                "FirstName": "",
                "LastName": "",
                "Email": "",
                "CreatedDate": "",
                "UpdatedDate": ""
            }
        ]
        

### List all Users [GET]
+ Response 200 (application/json)

        [
            {
                "id": "",
                "FirstName": "",
                "LastName": "",
                "Email": "",
                "CreatedDate": "",
                "UpdatedDate": ""
            },
            {
                "id": "",
                "FirstName": "",
                "LastName": "",
                "Email": "",
                "CreatedDate": "",
                "UpdatedDate": ""
            }
        ]
        

### Create new a User [POST]
+ Request

        {
            "FirstName": "",
            "LastName": "",
            "Email": "",
            "CreatedDate": "",
            "UpdatedDate": ""
        }
        

+ Response 201 (application/json)

        {
            "id": "",
            "FirstName": "",
            "LastName": "",
            "Email": "",
            "CreatedDate": "",
            "UpdatedDate": ""
        }
        

# Group Hat
Replace second resource group description

## Hat [/Hats/{id}]
+ Model (application/json)

    JSON representation of Hat resource
    + Body

            {
                "id": "",
                "Style": "",
                "Color": "",
                "CreatedDate": "",
                "UpdatedDate": ""
            }
            

+ Parameters
    + id (Integer) ... Unique id of the Hat

### Get a Hat [GET]
+ Response 200 (application/json)

        {
            "id": "",
            "Style": "",
            "Color": "",
            "CreatedDate": "",
            "UpdatedDate": ""
        }
        

### Update a Hat [PUT]
+ Request

        {
            "Style": "",
            "Color": "",
            "CreatedDate": "",
            "UpdatedDate": ""
        }
        

+ Response 200 (application/json)

        {
            "id": "",
            "Style": "",
            "Color": "",
            "CreatedDate": "",
            "UpdatedDate": ""
        }
        

### Delete a Hat [DELETE]
+ Response 204

## Hats [/Hats]
+ Model (application/json)

        [
            {
                "id": "",
                "Style": "",
                "Color": "",
                "CreatedDate": "",
                "UpdatedDate": ""
            },
            {
                "id": "",
                "Style": "",
                "Color": "",
                "CreatedDate": "",
                "UpdatedDate": ""
            }
        ]
        

### List all Hats [GET]
+ Response 200 (application/json)

        [
            {
                "id": "",
                "Style": "",
                "Color": "",
                "CreatedDate": "",
                "UpdatedDate": ""
            },
            {
                "id": "",
                "Style": "",
                "Color": "",
                "CreatedDate": "",
                "UpdatedDate": ""
            }
        ]
        

### Create new a Hat [POST]
+ Request

        {
            "Style": "",
            "Color": "",
            "CreatedDate": "",
            "UpdatedDate": ""
        }
        

+ Response 201 (application/json)

        {
            "id": "",
            "Style": "",
            "Color": "",
            "CreatedDate": "",
            "UpdatedDate": ""
        }
        

