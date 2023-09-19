let name = 'Juan'
let age = 50;
let isSingle = true;

let array = [1, 2, 3, 4, 5];
let object = {
    name: 'Juan',
    age: 50
};

function sum(a, b) {
    return a + b;
}

const sum2 = (a, b) => a + b;

const producto1 = {
    name:"iPhone",
    description: "Apple iPhone 15",
    price: 799,
    stock: 25
}

class Product{
    constructor(name, description, price, stock){
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
    }

    mostrarNombre(){
        console.log(this.name);
    }
}

const product2 = new Product("iPhone", "Apple iPhone 15", 799, 25);
console.log(product2.mostrarNombre());

const exp = Math.pow(2, 3);
const expES7 = 2 ** 3;
console.log(exp);
console.log(expES7);

const array2 = [1, 2, 3, 4, 5];
const isIncluded = array2.includes(3);

const obj = {
    name: 'Juan',
    last_name: 'Perez',
    email: 'juan.perez@mail.com'
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const objArray = Object.entries(obj);
const objArrayMod = objArray.map(([k, v]) => [k,`${v} Modificado`]);

const animales1 = ['perro', 'gato', 'pez'];
const animales2 = ['tigre', 'leon', 'mono'];

const obj1 = {
    name: 'Juan',
    last_name: 'Perez',
    email: 'juan.perez@mail.com'
}

const obj2 = {
    dni: '12345678',
    isSingle: true,
    age:35
}

//const animales = animales1.concat(animales2);
const animales = [...animales1, ...animales2];

