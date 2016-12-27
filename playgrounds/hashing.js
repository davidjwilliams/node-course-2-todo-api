const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
// 	bcrypt.hash(password, salt, (err, hash) => {
// 		console.log(hash);
// 	})
// });

var hashedPassword = '$2a$10$uAanLb65GaWXJHdIOiiVYu1M1l78I5iZm9u3QsRQhkGApAWehRm2a';

bcrypt.compare(password, hashedPassword, (err, res) => {
	console.log(res);
});

// Correct way using jwt
// var data = {
// 	id: 10
// };

// var token = jwt.sign(data, '123abc');
// console.log(token);	// Use jwt.io to view it
// var decoded = jwt.verify(token, '123abc'); // 123abc is our salt 
// console.log(decoded);

// Manual way to do it with crypto-js
// var message = "I am user number 3";
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
// 	id: 4
// };

// var token = {
// 	data,
// 	hash: SHA256(JSON.stringify(data) + 'somesecretsalt').toString()
// }

// // Man in the middle tries changing data and re-hash but they do not have our salt
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecretsalt').toString();
// if(resultHash === token.hash){
// 	console.log('Data was not changed');
// } else {
// 	console.log('Data was changed. Do not trust!');
// }