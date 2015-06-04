/**
 *  Basic Zumo Controller:
 *  Getting started with Zumo robots. Basic movements and LEDs.
 *  Commands are read from a file in the same directory.
 *  ---------------
 *
 *  Run this module with the command "node zumo1.js".
 *
 */

// Main dependencies
var five = require("johnny-five"); // JavaScript for Arduino
var fs = require('fs'); // Node.js file system library

// Create a board instance
var board = new five.Board();
var myLed;

// On board initialisation, perform the following:
board.on("ready", function() {

  console.log("Connected to Johnny-Five!");

  // Speed can be anything from 0 to 255.
  var SPEED = 100;

  // Initialize the motors and servos.
  var leftMotor = new five.Motor([10, 8]);
  var rightMotor = new five.Motor([9, 7]);
  
  // Initialize the LED
  myLed = new five.Led(13);

  // Lets the LED strobe (in milliseconds).
  var ledStobe = function(){
    myLed.strobe(300);
  }
  
  // Turn the LED off.
  var ledStop = function(){
    myLed.stop();
  }
  
  // Make Zumo move forward. Remeber: You have two motors.
  var go = function(){
    leftMotor.rev(SPEED);
    rightMotor.rev (SPEED);
  }
  
  // Make Zumo move backwards.
  var back = function(){
    leftMotor.fwd(SPEED);
    rightMotor.fwd (SPEED);
  }
  
  // Turn Zumo left.
  var left = function(){
    // Turning is always done at the same speed
    leftMotor.fwd(SPEED);
    rightMotor.rev(SPEED);
  }

  // Turn Zumo right.
  var right = function(){
    // Turning is always done at the same speed
    leftMotor.rev(SPEED);
    rightMotor.fwd(SPEED);
  }

  // Stop any Zumo motor movement.
  var stop = function(){
    // Full stop
    leftMotor.stop();
    rightMotor.stop();
  }

  console.log("Done initializing!");
  
  // Set up a watch service for a file where we will dumping all commands.
  // File must be overwritten after each command.
  fs.watchFile('message.txt', function (curr, prev) {
    fs.readFile('message.txt', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }

    // You can get last and previous modification time for the file
    //console.log('the current mtime is: ' + curr.mtime);
    //console.log('the previous mtime was: ' + prev.mtime);

    console.log('Command: ' + data);
    switch ( data ){
      // Go straight forwards.  Also resets speed to standard
      case "go":
        go();
        break;
      case "stop":
        stop();
        break;
      case "left":
        left();
        break;
      case "right":
        right();
        break;
      case "blink":
        ledStobe();
        break;
      case "blinkStop":
        ledStop();
        break;
      case "back":
        back();
        break;
      default:
        // Unknown command. Log it. Do nothing.
        console.log("Unknown command: ["+data+"].");
    }
    });
  });

  // Set up REPL
  this.repl.inject({
    left: leftMotor,
    right: rightMotor,
    go: go,
    stop: stop,
    led: myLed
  });
});
