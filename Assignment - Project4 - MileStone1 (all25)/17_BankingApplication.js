const user = {name: 'satyam',  balance: '100000'}

function deposit(amount) {
    this.balance += amount;
    // this.balance = this.balance + amount;
    console.log(`Deposit successful. New balance is ${this.balance}.`);
}

function withdraw(amount) {
    if (this.balance >= amount) {
        this.balance -= amount;
        // this.balance = this.balance - amount;
        console.log(`Withdraw successful. New balance is ${this.balance}.`);
    } else {
        console.log(`Insufficient funds. Withdrawal amount is ${amount}, but balance is only ${this.balance}.`);
    } 
}

console.log(`Initial balance is ${user.balance}.`);
deposit.call(user, 200);
withdraw.call(user, 1000)