# MyZumo

Code for controlling Zumo Robots, v1.2. 

## Installation

1. Follow the [getting started page](http://www.arduino.cc/en/Guide/HomePage) for Arduino to set up the environment
  * Download and install Arduino IDE
  * Connect Arduino to Zumo and connect it to the computer
  * Make sure the drivers fro Arduino are installed on the computer
  * Open and upload the Standard Firmata (File->Examples->Firmata->Standard Firmata) to the Arduino.  
2. Install [Node.js](https://nodejs.org/).
3. Make sure ```node``` and ```npm``` are in your path (i.e. you can run both commands in your shell)


## How it works
### Prototype 1
#### Description
Getting started with Zumo robots, using [Johnny-Five](https://github.com/rwaldron/johnny-five). Basic movements and LEDs. Commands are read from a file in the same directory. When the text file, messages.txt, is overwritten or saved it triggers the script to parse and run the command in the file.

#### Installation
1. Follow the installation instructions above.
2. In your shell, go to the directory for the sub-project, and run: ```npm install```
3. Run the Johnny-Five code: ```node myZumo_prototype1.js```
