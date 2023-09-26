class person {
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`Hello ${this.name}`);
    }
}

class Student extends person {
    constructor (name){
        console.log("Creating a constructor of student class...");
        super(name);
    }
}

let student1 = new Student("Ashish");
student1.greet();