// const data={
//     name:"rehad",
//     age:22,
//     isActive:true
// }
// type  otherData = typeof data

function information(input:string|number|boolean) {
    if (typeof input==="string") {
        console.log('this is string typeof input')
    }
    else if (typeof input==="number") {
        console.log('this is number typeof input')
    }else{
        console.log('this is boolean typeof input')
    }
}
information(true)