class firstClass {
    add() {
        console.log("First class");
    }
}

class secondClass extends firstClass {
    add() {
        console.log(23 + 42);
    }
}

class thirdClass extends secondClass {
    add(){
        console.log("Last class");
    }

}

let ob = new firstClass();
let ob2 = new secondClass();
let ob3 = new thirdClass();
ob.add();
ob2.add();
ob3.add();