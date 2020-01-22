'use strict';

const fs = require('fs');

let fileName = process.argv[2];

fs.readFile(fileName, (error, data) => {

  if (error) throw error;

  console.log(' BEFORE note ', data.toString());
  
  let generateRandomNum = Math.random();

  let newFile = data.toString() + generateRandomNum;

  fs.writeFile(fileName, newFile, (error) => {

    if (error) throw error;
    console.log(' updated file!');

    fs.readFile(fileName, (error, data) => {

      if (error) throw error;
      console.log('AFTER note ', data.toString());
    });

  });

});
