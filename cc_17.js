//Task 1: Create a Customer Class
class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = []; //an array for purchase history
    };
    addPurchase(amount) {
        this.purchaseHistory.push(amount); //adding purchase amount to history
    }
    getTotalSpent() {
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
}
//Task 1: Test Case
const customer1 = new Customer(`Rakko Otter`, `monsterhunterrakko87@gmail.com`);
customer1.addPurchase(34); //purchase of $34
customer1.addPurchase(1); //purhase of $1
console.log(`Total Spent: $${customer1.getTotalSpent()}`); //logging customer creation and total spent (35)
console.log(`New Customer Created! 
    Name: ${customer1.name}
    Email: ${customer1.email}`); //logging customer creation