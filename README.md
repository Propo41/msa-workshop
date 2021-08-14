# Welcome to the Microsoft Web Development with Dot Net Workshop

## Introduction

This Web Development Workshop is designed to quickly introduce you to developing the backend of a website using Dot Net 5.0 and React. You'll also learn how the internet works, about clients, servers, and protocols. And you'll see the next steps to take yourself to the next level on the web. 

After completing this workshop, you'll gain the following skills:

 - Understand how clients and servers work together
 - Create web APIs using [Dotnet](https://dotnet.microsoft.com/)
 - Authenticate users using JWT token
 - Work with NoSQL databases like [MongoDB](https://www.mongodb.com/)
 - Uploading files to Cloud Buckets (namely [UploadCare](https://uploadcare.com/))

## Workshop requirements

All participants are recommended to have the following skills to participate in this workshop: 

 - Basic understanding of C# language
 - Basic understanding of HTML, CSS and Javascript

## Installation


## Topics we'll be covering:

- [Creating the react application](https://github.com/Propo41/msa-workshop/tree/main#creating-the-react-application)
- [Creating a dotnet project template](https://github.com/dabit3/aws-appsync-react-workshop#adding-a-graphql-api)
- [How Controllers work](https://github.com/dabit3/aws-appsync-react-workshop#local-mocking-and-testing)
- [Adding MongoDB](https://github.com/dabit3/aws-appsync-react-workshop#adding-authentication)
- [Creating User accounts](https://github.com/dabit3/aws-appsync-react-workshop#adding-authentication)
- [Custom Middleware Authentication](https://github.com/dabit3/aws-appsync-react-workshop#adding-authorization-to-the-graphql-api)
- [Uploading Files to Cloud Bucket](https://github.com/dabit3/aws-appsync-react-workshop#lambda-graphql-resolvers)

## What we're building

We are building a simple blogging website where users can post their content. The UI preview of the website can be found [here.](https://www.figma.com/file/8HuSGUDy2cTMpqNu8bC0mJ/MSA-Workshop-1?node-id=0:1)

Since our blogging website will have the least features, there can be only 2 Model classes: **User** and **Post**. 
The schema diagram will be as follows:

![image](https://user-images.githubusercontent.com/46298019/129452240-473ae90f-4045-46d6-923b-f6c68c64f568.png)

> *Note, the above design is not recommended in a NoSQL database. NoSQL databases are not relational but instead are structured. However, to keep things simple, we are using the above approach.*

Now, let's design the API list we will need for the project.

The public APIs: 
|Description |http  |API endpoint   |Request Body  |
|--|--|--|--|
|Fetch all posts  |GET  | /[post]/posts |  |
|Fetch a particular post by id |GET  | /[post]/:id |  |
|Fetch posts by category |GET  |/[post]?category=:name |  |
|Login a user  |POST  |/[user]/login |**UserLogin**: email!, password!  |
|Register a user  |POST  |/[user]/register  |**User**: name!, email!, password!, confirmPassword! |
<br>

The private APIs that should be authenticated: 
|Description |http  |API endpoint   |Request Body  |
|--|--|--|--|
|Fetch all user posts  |GET  |/[post]/auth/posts  |  |
|Fetch a particular post by id  |GET |/[post]/auth/:id  |  |
|Delete a post  |DELETE  |/[post]/auth  |string: id!  |
|Create a post  |POST  |/[post]/auth  |**Post**: title!, description!,  |
|Edit a post  |POST  |/[post]/auth/edit |**Post**: title?, description?, category?, coverPhoto?, file? |


## Getting Started

### Creating the react application

We first need to create the react project. Since this workshop mainly focuses on the backend development, we are going to use a pre-existing react application that can be found [here](https://github.com/Propo41/msa-workshop/tree/main/01_client). 

### Creating a dotnet project template

Dotnet comes with a number of pre-existing templates ready to be used by developers. 
Open a new terminal, and type the following command to see a list of all the available templates.
```bash
$ dotnet new
```
Now, since we are using a React application as our frontend, we are going to use the command:
```bash
$ dotnet new react
```
Copy the react application we made previously and replace the contents of the folder `ClientApp`. Install the react packages:
```bash
$ cd .\ClientApp\
$ npm install
$ cd ..
```

### How Controllers work

Delete the file `WeatherForecast.cs` and replace the contents of `./Controllers/WeatherForecastController.cs` with the following snippet and rename the file to `BurgerController.cs`. Next, run the following command to build and run the app to check if everything is working.
```bash
$ dotnet build
$ dotnet run
```

> *If we run the app using dotnet run, we have to re-run the
> project everything we make a change. Instead, we can run the project*
> *using:*
> ```bash
>$ dotnet watch run
>```



```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace demo.Controllers
{
    public class Burger
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
    }

    [ApiController]
    [Route("[controller]")]
    public class BurgerController : ControllerBase
    {
        private List<Burger> _burgers = new List<Burger>(){
            new Burger{Id=1, Name="Beef Fatty Cheese Burger", Price=250},
            new Burger{Id=2, Name="Best Chicken", Price=100},
            new Burger{Id=3, Name="Nahiyan's Special Double Patty", Price=450},
            new Burger{Id=4, Name="Creamy Cheese Sausage Burger with white sauce", Price=600},

        };

        [HttpGet]
        public string Get()
        {
            var msg = "Welcome to our Nahiyan Burger Shop";
            return msg;
        }

        // GET /burger/menu
        [HttpGet]
        [Route("menu")]
        public List<Burger> GetMenu()
        {
            return _burgers;
        }

        // POST /burger/add-item
        [HttpPost]
        [Route("add-item")]
        public Burger Add(Burger burger)
        {
            Console.WriteLine("Adding new burger item: ", burger.Name);
            return new Burger { Id = 4, Name = burger.Name, Price = burger.Price };
        }

        // GET /burger/item/2
        [HttpGet]
        [Route("item/{id}")]
        public Burger GetBurgerById(int id)
        {
            return _burgers.FirstOrDefault(x => x.Id == id);
        }

        // GET /burger/item?price=250&&condition=above
        [HttpGet]
        [Route("item")]
        public List<Burger> GetBurgerByPrice(int price, string condition)
        {
            if (condition == "above")
            {
                return _burgers.Where(x => x.Price > price).ToList();
            }
            else if (condition == "below")
            {
                return _burgers.Where(x => x.Price < price).ToList();
            }
            else
            {
                return _burgers.Where(x => x.Price == price).ToList();
            }
        }
    }
}
```

### Adding MongoDB

Now, we add [MongoDB driver](https://docs.mongodb.com/drivers/csharp/). 
```bash
$ dotnet add package MongoDB.Driver
```
For the workshop, we are going to use a local mongodb server that will be hosted in our computer by using the following connection string: `mongodb://localhost`

### Creating User accounts

Let's start by adding a user login functionalty. 
Firstly, we need to create a Model class for the `User` table. Create a new folder named, `Models` and create a model class representing Users:

*User.cs*
```csharp 
using System.ComponentModel.DataAnnotations;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System;

namespace project.Models
{
    public class User
    {

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [RegularExpression(@"^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}" +
                                    @"\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\" +
                                    @".)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$",
                                    ErrorMessage = "Email is not valid")]
        [Required]
        public string Email { get; set; }

        [Required]
        public string Name { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [StringLength(255, ErrorMessage = "Must be between 5 and 255 characters", MinimumLength = 5)]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required(ErrorMessage = "Confirm Password is required")]
        [StringLength(255, ErrorMessage = "Must be between 5 and 255 characters", MinimumLength = 5)]
        [DataType(DataType.Password)]
        [Compare("Password")]
        public string ConfirmPassword { get; set; }

        [BsonIgnoreIfNull]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    }
}
```




