var exec = require('cordova/exec');

var BTPrinter = {
   list: function(fnSuccess, fnError){
      exec(fnSuccess, fnError, "BluetoothPrinter", "list", []);
   },
   connect: function(fnSuccess, fnError, name){
      exec(fnSuccess, fnError, "BluetoothPrinter", "connect", [name]);
   },
   disconnect: function(fnSuccess, fnError){
      exec(fnSuccess, fnError, "BluetoothPrinter", "disconnect", []);
   },
   print: function(fnSuccess, fnError, str){
      exec(fnSuccess, fnError, "BluetoothPrinter", "print", [str]);
   },
   printText: function(fnSuccess, fnError, str){
      exec(fnSuccess, fnError, "BluetoothPrinter", "printText", [str]);
   },
   printPOSCommand: function(fnSuccess, fnError, str){
      exec(fnSuccess, fnError, "BluetoothPrinter", "printPOSCommand", [str]);
   },
   printJPQRCode: function(fnSuccess, fnError, typeNumber, errorCorrectionLevel, str){
      exec(fnSuccess, fnError, "BluetoothPrinter", "printJPQRCode", [typeNumber, errorCorrectionLevel, str]);
   }
};

module.exports = BTPrinter;
