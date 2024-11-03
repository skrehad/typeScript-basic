"use strict";
function getProperty(obj, key) {
    return obj[key];
}
const person = {
    id: 1,
    name: "রহিম",
    age: 25,
};
console.log(getProperty(person, "name"));
console.log(getProperty(person, "age"));
