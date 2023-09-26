class Employee_Details{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
    add_address(addr){
        this.addr = addr;
    }

    get_Details(){
        console.log(`Employee Name: ${this.name} Address: ${this.addr}`)
    }
}

let person1 = new Employee_Details("Anand", 34);
person1.add_address("Kangra");
person1.get_Details();