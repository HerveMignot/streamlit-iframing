# Setup Guide

This document provides instructions for installing the necessary packages to work with this testbed application.

## Packages

Express and js-yaml in a Node.js environment. Follow the steps below to get started.

## Prerequisites

Before you begin, make sure you have Node.js and npm installed on your system. You can check if they are installed by running the following commands in your terminal or command prompt:

```bash
node -v
npm -v
```

If Node.js and npm are not installed, you can download and install them from the official Node.js website: https://nodejs.org/en/download/

## Installation Steps

1. Clone the repository to your local machine using the following command:
```bash
cd <your-preferred-directory>
git clone https://git.equancy.cloud/your-username/your-repository.git
```
2. Navigate to the project directory using the following command:
```bash	
cd streamlit-factory
```
3. Install the required packages by running the following command. This will create a `node_modules` directory in your project folder and install the necessary dependencies.
```bash
npm install express js-yaml
```
4. Once the installation is complete, you can start using the testbed application.

## Usage

Now that you have installed the required packages, you can use the testbed application. You can run the application with the following command:
```bash	
node server.js
```
This will start the Express server, and you can access the application by opening a web browser and navigating to `http://localhost:3000`.

## Configuring external applications (streamlit)

You can edit the config_apps.yaml file to configure the external applications that the testbed will interact with. Each application should have a unique name and a URL where it can be accessed.

For example, you can add a Streamlit application with the following configuration in the config_apps.yaml file:
```yaml
apps:
  - name: App 1
    url: 'https://link-to-app1.com'
  - name: App 2
    url: 'https://link-to-app2.com'
  - name: App 3
    url: 'https://link-to-app3.com'
```
Save the changes to the config_apps.yaml file, and the testbed application will automatically update the list of available applications.

This can also work with other applications that have a web interface and can be accessed via a URL. You can add as many applications as you need, and the testbed will dynamically generate the necessary components to interact with them.
