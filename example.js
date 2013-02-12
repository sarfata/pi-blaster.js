var piblaster = require("pi-blaster.js");

// Set first pin at 40%
piblaster.setPwm(0, 0.4);

// Set second pin at 100%
piblaster.setPwm(1, 1);
