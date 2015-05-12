var fs = require("fs");
/**
 * Default pi-blaster file path
 * @type {string}
 */
var PI_BLASTER_PATH = "/dev/pi-blaster";
/**
 * We need to use write() with a buffer so that we can pass the position=-1 argument.
 * This is needed, otherwise we get an error because node default write tries to seek
 * in the file which is not possible (it's a FIFO).
 * @param {String} cmd Command to be written
 * @param {Function} callback Must accept only one optional error parameter
 */
function writeCommand(cmd, callback) {
	var buffer = new Buffer(cmd + "\n");
	var fd = fs.open(PI_BLASTER_PATH, "w", undefined, function(err, fd) {
		if (err)
			callback(err);
		else {
			fs.write(fd, buffer, 0, buffer.length, -1, function(error, written, buffer) {
				if (error)
					callback(error);
				else {
					fs.close(fd);
					callback();
				}
			});
		}
	});
}
/**
 * NodeJS library for the {@link https://github.com/sarfata/pi-blaster|pi-blaster daemon.}
 * @module pi-blaster
 */
module.export = {
	/**
	 * Set a given pin to a given value
	 * @memberof module:pi-blaster
	 * @param {Integer} pinNumber Target pin {@link https://github.com/sarfata/pi-blaster/blob/master/pi-blaster.c#L39-51|Known pins}
	 * @param {Float} value Must be between 0 and 1
	 * @param {Function} callback Must accept only one optional error parameter
	 */
	setPwm: function(pinNumber, value, callback) {
		writeCommand(pinNumber + "=" + value, callback);
	}
}
