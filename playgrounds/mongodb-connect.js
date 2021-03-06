// ES6 name destructuring
// var user = {name: 'David', age: 35};
// var {name} = user;
// Instead of const MongoClient = require('mongodb').MongoClient; then the same for ObjectID
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID(); // Unique regular object Id

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	/*
	db.collection('Todos').insertOne({
		text: 'Something to do',
		completed: false
	}, (err, result) =>{
		if(err){
			return console.log('Unable to insert todo', err);
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	});
	*/

	db.collection('Users').insertOne({
		name: 'David',
		age: 35,
		location: 'Bristol'
	}, (err, result) => {
		if(err){
			return console.log('Unable to insert user'. err);
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
		console.log(result.ops[0]._id.getTimestamp());	// returns the timestamp from the object id
	});

	db.close();
});