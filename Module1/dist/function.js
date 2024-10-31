"use strict";
{
    //   //Learning function
    //   // Normal Function
    //   // Arrow Function
    function add(num1, num2 = 10) {
        return num1 + num2;
    }
    add(2, 2);
    const addArrow = (num1, num2) => num1 + num2;
    // object --> function --> method
    const poorUser = {
        name: "Mezba",
        balance: 0,
        addBalance(balance) {
            return `My new balance is : ${this.balance + balance}`;
        },
    };
    const arr = [1, 4, 10];
    const newArray = arr.map((elem) => elem * elem);
}
