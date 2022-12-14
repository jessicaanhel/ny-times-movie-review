# Scope

Movie reviews by New York Times critics

HTTP method:
GET

Response formats

JSON (.json, default)

---

## Requirements

For development, you will only need Node.js installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems

  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).
  If the installation was successful, you should be able to run the following command.

      $ node --version
      $ npm --version

## Install

    $ cd ny-times-movie-reviews
    $ npm install

## Running the project

    $ npm run dev

## Simple build for production

    $ npm build
