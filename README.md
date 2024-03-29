# Flagged Words Checker (JavaScript React App)

## Access the Project: [https://flagged.lukorito.dev](https://flagged.lukorito.dev)

## Description
This is the front-end portion of the Flagged Words Checker application. The project has been done to satisfy the assessment requirements by ABIE Frames Ltd.

The project is a simple flagged words checker that allows users to check if a word is flagged or not. The uploaded documents are stored in a database.

The front-end s built using React (JavaScript) and deployed on my personal server with cPanel. The back-end (in a separate [repository](https://github.com/WafulaLukorito/flaggedBE.git)) is built using Java Spring Boot and deployed on Microsoft Azure. The PostreSQL database is also hosted on Azure.

## Features
The applicaton consumes various endpoints from the back-end API to provide the following features:
- Users can upload a document (text file) to be checked for flagged words.
- Users can check if a word is flagged or not.
- Users can view all the flagged words in a document.
- Users can view all the documents they have uploaded.

## Technologies Used
- React (JavaScript)
- moment.js (To format dates)
- DOMPurify (To sanitize HTML)
- Custom CSS
- cPanel (To host the front-end)

The application can be accessed [here](https://flagged.lukorito.dev).