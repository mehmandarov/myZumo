# MyZumo

Getting started with Zumo robots. Basic movements and LEDs. Commands are read from a file in the same directory. 

## How it works

When the text file, messages.txt, is overwritten or saved it triggers the script to parse and run the command in the file.

## Installation

1. Follow the [getting started page](http://www.arduino.cc/en/Guide/HomePage) for Arduino to set up the environment
2. Install [Node.js](https://nodejs.org/).
3. Make sure node and npm are in your path (i.e. you can run both commands in yout shell)
4. In your shell, go to the directory for this project, and run

   ```bash
   npm install
   ```

5. Run johnny-five code:

   ```bash
   node myZumo_prototype1.js
   ```