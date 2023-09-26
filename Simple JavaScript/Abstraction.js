class BankAccount {
    constructor(accountNo , accountHolder){
        this.accountNo = accountNo;
        this.accountHolder = accountHolder;
        this.balance = 0;
    }

    deposit(amount){
        if(amount > 0){
            this.balance += amount;
            console.log(`Deposited amount: ${amount}, new amount: ${this.balance}`);
        }
    }
    withdraw(amount) {
        if(amount > 0 && amount < this.balance){
            this.balance -= amount;
            console.log(`Withdraw amount: ${amount}, new amount: ${this.balance}`);
        }
        else{
            console.log("Insufficient amount");
        }

    }

    getBalance(){
        console.log(`Balance: ${this.balance}`);
    }
}

let person1 = new BankAccount(78781 , "Anil");
let person2 = new BankAccount(78782, "Rohan");

person1.deposit(100);
person2.deposit(1000);
person1.withdraw(20);
person2.getBalance();
person1.getBalance();