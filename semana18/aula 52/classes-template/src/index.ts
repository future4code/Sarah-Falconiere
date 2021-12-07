import app from "./app"
import createCharacter from "./endpoints/createCharacter"
import deleteCharacter from "./endpoints/deleteCharacter"
import getAllCharacters from "./endpoints/getAllCharacters"


app.get("/character", getAllCharacters)
app.post("/character", createCharacter)
app.delete("/character/:id", deleteCharacter)


//a) para dizer quais atributos a classe requer para que se possa criar uma instância a partir dela.
//Para chamá-lo, basta digitar o parêntesis dps do nome da classe

// b) Uma vez.

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    public getCpf(): string {
        return this.cpf
    }

    public getName(): string {
        return this.name
    }

    public getAge(): number {
        return this.age
    }

    public getBalance(): number {
        return this.balance
    }
    public getTransactions(): Transaction[] {
        return this.transactions
    }
    public setTransactions(newTransaction: Transaction): void {
        this.transactions.push(newTransaction)
    }

}


//c) através dos getters e setters

class Transaction {
    private description: string;
    private value: number;
    private date: string;
    
    constructor(
        description: string,
        value: number,
        date: string,
    ) {
        console.log("Chamando o constructor da classe Transaction")
        this.description = description;
        this.value = value;
        this.date = date
    }

    public getDescription(): string {
        return this.description
    }

    public getValue(): number {
        return this.value
    }

    public getDate(): string {
        return this.date
    }
}



class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]){
        this.accounts = accounts
    }

    public setAccounts(newAccount: UserAccount): void {
        this.accounts.push(newAccount)
    }
    public getAccounts(): UserAccount[]{
        return this.accounts
    }
}

const newUser = new UserAccount(
    "01234567891",
    "Sarah",
    30
)
const newTransaction = new Transaction(
    "Pagar boleto",
    50,
    "06/12/2021"
)

newUser.setTransactions(newTransaction)