pi-blaster.js
=============

NodeJS library for the [pi-blaster daemon][pi-blaster].

## Installation

Make sure you have `node` and `npm` installed on your Raspberry Pi.

Install the pi-blaster daemon ([instructions][pi-blaster]).

Finally install `pi-blaster.js`:

    npm install pi-blaster.js

## Usage

    var piblaster = require('pi-blaster.js');

    piblaster.setPwm(17, 1 ); # 100% brightness
    piblaster.setPwm(22, 0.2 ); # 20% brightness
    piblaster.setPwm(23, 0 ); # off

The list of available pin numbers [is located here:](https://github.com/sarfata/pi-blaster/blob/master/pi-blaster.c#L39-51)

## Contributions

* [Frédéric Woelffel](https://github.com/FWoelffel) added callback support


## License

Copyright 2013 - Thomas Sarlandie. Published under the MIT open source license (see full license in LICENSE.txt file).

[pi-blaster]: https://github.com/sarfata/pi-blaster
