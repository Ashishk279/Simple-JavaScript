class Car {
    constructor(make, model, year){
       this.make = make;
       this.model = model;
       this.year = year;
       this.speed = 0;
    }

    accelerate(){
        this.speed += 10;
        console.log(`Accelerating Current Speed: ${this.speed} km/h`);
    }

    brake() {
        if(this.speed >= 10){
            this.speed -= 10;
            console.log(`Breaking Current Speed: ${this.speed} km/h`)
        }else{
            console.log("Car is already Stopped");
        }
    }

    getStatus(){
        console.log(`Car: ${this.year}, ${this.make}, ${this.model}, Speed: ${this.speed} km/h`);
    }
}
const myCar = new Car("Ford", "Tata", 2022);
myCar.accelerate();
myCar.accelerate();
myCar.brake();
myCar.getStatus();