var mongoose=require('mongoose');
var schema=require('./Schema');

mongoose.connect('mongodb://localhost:27017/test');

var User=mongoose.model('User2',schema,'users2');

var user=new User(
    {name:'Albert Wily'
,email:'wily@mail.com'}
);

user.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved!");
    process.exit(0);
});

var user1=new User({name:"User1",email:"akl@gmail.com"});

user1.save(function(error){
    if(error){
        console.log(error);
        proccess.exit(1);
    }
    console.log("Saved user 1!");
});

var user2=new User({name:"User2",email:"dos@gmail.com"});

User.create(user2,function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved User 2!");
});

User.create({name:"User 3",email:"ieo@gmail.com"},function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved User 3!");
})