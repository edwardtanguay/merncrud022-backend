import Cryptr from 'cryptr';

const cryptr = new Cryptr('SECRETKEY'); // set as same in config.ts

const encryptedPassword = cryptr.encrypt('PASSWORD'); // insert password, run script, DELETE PASSWORD
console.log(encryptedPassword);