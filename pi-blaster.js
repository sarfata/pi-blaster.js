var fs = require("fs");

var PI_BLASTER_PATH = "/dev/pi-blaster";

function writeCommand(cmd) {
	fs.writeFile(PI_BLASTER_PATH, cmd, function(error) {
		console.log("Error occured writing to " + PI_BLASTER_PATH + ": " + error);
	});
}

var piblaster = {
	setPwm: function(pinNumber, value) {
		writeCommand(pinNumber + "=" + value);
	}
};

piblaster.export = piblaster.setPwm;

module.exports = piblaster;