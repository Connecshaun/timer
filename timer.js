// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

const arguments = process.argv.slice(2);

const timer = function (arguments) {

  if (arguments.length === 0) {

    process.exit;

  }

  for (let sounds of arguments) {

    if (sounds >= 0) {

      setTimeout(() => {

        process.stdout.write('\x07');

      }, sounds * 1000)

    }

    else {

      process.exit
    }
  }

}

timer(arguments);

