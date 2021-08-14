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
- [Custom Middleware Authentication](https://github.com/dabit3/aws-appsync-react-workshop#adding-authorization-to-the-graphql-api)
- [Uploading Files to Cloud Bucket](https://github.com/dabit3/aws-appsync-react-workshop#lambda-graphql-resolvers)

## What we're building

We are building a simple blogging website where users can post their content. The UI preview of the website can be found [here.](https://www.figma.com/file/8HuSGUDy2cTMpqNu8bC0mJ/MSA-Workshop-1?node-id=0:1)

## Getting Started

### Creating the react application
We first need to create the react project. Since this workshop mainly focuses on the backend development, we are going to use a pre-existing react application that can be found [here](https://github.com/Propo41/msa-workshop/tree/main/01_client). 

### Creating a dotnet project template

Dotnet comes with a number of pre-existing templates ready to be used by developers. 
Open a new terminal, and type the following command to see a list of all the available templates.
```bash
$ dotnet new
```
Now, since we are using a React application, we are going to use the command:
```bash
$ dotnet new react
```
