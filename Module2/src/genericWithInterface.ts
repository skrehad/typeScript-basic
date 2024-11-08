{
    interface developer<T>{
    name:string;
    roll:number;
    isActive:boolean;
    smartWatch:T
}

const information:developer<{
    name:string,
    price:number
}>={
    name:"rehad",
    roll:22,
    isActive:true,
    smartWatch:{
                name:"apple",
                price:2000
               }
}

interface AppleWatch{name:string,price:number,isAlarm:boolean}
// const information2:developer<{name:string,price:number,isAlarm:boolean}>={
const information2:developer<AppleWatch>={ 
    name:"rehad",
    roll:22,
    isActive:true,
    smartWatch:{
                name:"apple",
                price:2000,
                isAlarm:true
               }
}
const information3:developer<{
    name:string,
    price:number
    model:string
}>={
    name:"rehad",
    roll:22,
    isActive:true,
    smartWatch:{
                name:"apple",
                price:2000,
                model:"abc"
               }
}

console.log(information3)






}