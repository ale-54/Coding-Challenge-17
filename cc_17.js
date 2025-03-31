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

//Task 2: Create a SalesRep Class
class SalesRep {
    constructor(name) {
        this.name = name;
        this.clients = []; //array of customers
    };
    addClient(customer) {
        this.clients.push(customer); //adding customer to the list
    }
    getClientTotal(name) {
        const client = this.clients.find(client => client.name === name); //finding client by name
        if (client) {
            return client.getTotalSpent();
        }
    }
}
//Task 2: Test Case
const salesRep = new SalesRep(`Kurimanju`); //creating sales rep
salesRep.addClient(customer1); //adding customer to client list
console.log(`Sales Representative: ${salesRep.name}
    Client: ${customer1.name}
    Total Spent: $${customer1.getTotalSpent()}`); //logging sales rep client and total spent

//Task 3: Create a VIPCustomer Class (extends Customer)
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
        super(name, email);
        this.vipLevel = vipLevel;
    }; //adding vip level to class
    getTotalSpent() {
        const total = super.getTotalSpent();
        return total * 1.1
    }; //adding a 10% bonus to vip customers
}
//Task 3: Test Case
const vipCustomer1 = new VIPCustomer(`Hachiware`, `hachiwareuwa@gmail.com`, `Diamond`); //vip customer
vipCustomer1.addPurchase(65016); //$65016
console.log(`VIP: ${vipCustomer1.name} (${vipCustomer1.vipLevel} Tier), 
    Total (incl. bonus): $${vipCustomer1.getTotalSpent()}`); //bonus: $71517.6

//Task 4: Build a Client Report System
const customer2 = new Customer('Usagi Rabbit', 'omnomnomusagi@gmail.com'); //customer creation
customer2.addPurchase(23); //23
customer2.addPurchase(40); //40

const vipCustomer2 = new VIPCustomer('Momonga', 'selfishsquirrel@gmail.com', 'Platinum'); //vip customer creation, momonga ballin
vipCustomer2.addPurchase(1000); //1000
vipCustomer2.addPurchase(500); //500

salesRep.addClient(customer2); //adding usagi to clientele
salesRep.addClient(vipCustomer2); //adding momonga to clientele
//created more customers for task 4

const allCustomers = [customer1, customer2, vipCustomer1, vipCustomer2]; //put all customers in one list
const totalRevenue = allCustomers.reduce((sum, customer) => sum + customer.getTotalSpent(),0); //calculated total rev from all customers
console.log(`Total Revenue: $${totalRevenue}`); //logged total revenue

const highSpendingCustomers = allCustomers.filter(customer => customer.getTotalSpent() > 500); //filtered to see customers who spent over $500
console.log(`High Spenders:`, highSpendingCustomers); //logged high spenders

const customerSummary = allCustomers.map(customer => ({
    Name: customer.name,
    Total: customer.getTotalSpent()
})); //map to crete array of customers and total spent
console.log(`Customer Summary:`, customerSummary); //logged summary