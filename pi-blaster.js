var fs = require("fs");

var PI_BLASTER_PATH = "/dev/pi-blaster";

/* 
 * We need to use write() with a buffer so that we can pass the position=-1 argument.
 * This is needed, otherwise we get an error because node default write tries to seek
 * in the file which is not possible (it's a FIFO).
 */
function writeCommand(cmd) {
	var buffer = new Buffer(cmd + "\n");
	
	var fd = fs.open(PI_BLASTER_PATH, "w", undefined, function(err, fd) {
		if (err)
			console.log("Error opening file: " + err);
		else {
			fs.write(fd, buffer, 0, buffer.length, -1, function(error, written, buffer) {
				if (error) 
					console.log("Error occured writing to " + PI_BLASTER_PATH + ": " + error);
				else
					fs.close(fd);
			});
		}
	});
	
}

var piblaster = {
	setPwm: function(pinNumber, value) {
		writeCommand(pinNumber + "=" + value);
	}
};

piblaster.export = piblaster.setPwm;

module.exports = piblaster;
