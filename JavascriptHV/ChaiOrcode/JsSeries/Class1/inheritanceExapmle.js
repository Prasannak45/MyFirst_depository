class User1{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`USERNAME is created by ${this.username}`);
    }
}

class Teacher extends User1{
    constructor(username, email, password){
        super(username);
        this.email=email;
        this.password=password
    }

    addCourse(){
        console.log(`This is course is addes by ${this.username}`);
    }
};

const chai=new Teacher("Harsh");

chai.logMe();