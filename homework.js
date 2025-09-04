//1
const user = {
    name: 'John',
    email: 'john@example.com',
    sendEmail: function () {
        console.log(`Hello my name is ${this.name} you can send me your email at ${this.email}`);
    }
}

user.sendEmail();

let sendEmailToJohn = user.sendEmail;
console.log(sendEmailToJohn);
//this будет указывть на объект в котором она есть после присваивания она теряет свое окружение

//2
const student = {
    name: 'Alice',
    greet: function() {
    console.log(`Hello, ${this.name}!`);
    },
    delayedGreet: function() {
        setTimeout(this.greet, 1000);
    }
};

student.greet() // Hello, Alice
student.delayedGreet() // Hello, undefined
// у меня в delayGreet в косоле просто пусто
//это опять таки потому что this не в своей непосредственной "коробке" а мы его перетаскиваем куда то
//и его связь с "коробкой" теряется

//3
const product = {
    title: 'phone',
    price: 600
}

function calcDiscount(age, isStudent) {
    if (age > 50) {
       console.log(`price for the retired ${this.price / 2}`);
    } else if (isStudent) {
        console.log(`Student price ${this.price /1.5}`);
    }else{
        console.log(`no discount`);
    }
}

//retired discount call
calcDiscount.call(product, 60, false);
//student price apply
calcDiscount.apply(product, [22, true]);

// no discount
const noDiscount = calcDiscount.bind(product, 45, false);
noDiscount();

//4
function sayHello() {
    console.log('Hello, ' + this.name)
};

const admin = {
    name: 'Bob'
};

const user1 = {
    name: 'John'
};

const sayHelloToAdmin = sayHello.bind(admin);
sayHelloToAdmin();

//const sayHelloToUser = sayHelloToAdmin.bind(user1) // 💡 Метод bind нельзя использовать дважды для изменения контекста функции.
// Повторный вызов bind на уже привязанной функции не изменяет контекст.
// Используем исходную функцию sayHello
const sayHelloToUser = sayHello.bind(user1);

sayHelloToUser();