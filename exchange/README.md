# Piekrasta Rezidence Website

Welcome to the **Piekrasta Rezidence** website! This project showcases a modern residential development located in a peaceful and scenic area of Riga, Latvia. The website provides essential information about the project, its features, contact details, and a gallery of images.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Process Script](#process-script)

## Features
- **Responsive Design**: The website is designed to be fully responsive, ensuring a great user experience on both desktop and mobile devices.
- **Hero Section**: The main banner highlights the project's key message and includes a reservation button.
- **Project Information**: Detailed descriptions of the project, including its unique location, modern homes, and infrastructure.
- **Image Gallery**: A gallery showcasing images of the project with a modal view for enlarged images.
- **Contact Form**: A form for users to inquire about the residences and receive more information.
- **Contact Details**: Information about sales specialists with links to their email and phone numbers.
- **Social Media Links**: Links to the project's social media profiles.

## Installation
To run the website locally, follow these steps:

1. **Clone the repository** or download the HTML files.
2. **Ensure you have a local server environment** (like XAMPP, MAMP, or WAMP) to run the PHP script.
3. **Place all files in the web server's root directory** (e.g., `htdocs` for XAMPP).
4. **Open the HTML file** in your preferred web browser (e.g., `http://localhost/piekrasta-rezidence/index.html`).
5. Ensure you have access to the CSS and JavaScript files (`style.css`, `script.js`) and the images folder for a complete experience.

## Usage
- Users can view the website to learn about the Piekrasta Rezidence.
- Visitors can fill out the contact form to request more information about the residences.
- Clicking on images in the gallery opens a modal view for better visibility.

## File Structure

/piekrasta-rezidence
│
├── index.html          # Main HTML file
├── process.php         # PHP script to handle form submissions
├── style.css           # Stylesheet for the website
├── script.js           # JavaScript file for interactivity
└── images/             # Folder containing all images used in the website
    ├── Group.svg
    ├── location.png
    ├── connect.png
    ├── infrastructure.png
    ├── gallery1.png
    ├── gallery2.png
    ├── gallery3.png
    ├── gallery4.png
    ├── gallery5.png
    ├── gallery6.png
    ├── davis.png
    └── ceslavs2.png


### JavaScript Functionality
The JavaScript file (`script.js`) includes functionality for:
- **Dynamic form elements**: Updates the area options based on the selected number of rooms.
- **Image gallery modal**: Enables the viewing of images in a larger format with navigation controls.

## Process Script
The `process.php` file handles form submissions from the contact form. When a user fills out the form and submits it, the following occurs:

1. **Input Validation**: It checks if the request method is POST and retrieves the user's input values (name, email, phone, number of rooms, and area).
2. **Email Preparation**: Prepares an email with the user's information.
3. **Email Sending**: Sends the email to the specified address (`a.dvoskins@student.fontys.nl`).
4. **User Feedback**: Displays an alert indicating whether the submission was successful or if there was a problem sending the email.
5. **Redirection**: After a short delay, the user is redirected back to the main page.