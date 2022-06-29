console.log("FILE JS IS WORKING NORMALLY")
let a = 6;
var b = 7;
const PI = 3.14;
a = a + 5 //=11
console.log(`Số a có giá trị là: ${a}, ${b}, ${PI}`)//template string
//String
//Result: Số a có giá trị là: 11, 7, 3.14

let c = a - b;
let d = a * b;
let e = a / b;
console.log(`Hiệu tích thương của a và b là: ` + c + ' ' + d + '' + e);
//string + số => string 
//Số + string => string 
console.log("Giá trị đầu tiên ", "1" + 2 + "2")
//122
console.log("Giá trị thứ hai ", 1 + "2" + "2")
//122
console.log("Giá trị thứ 3 ", 2 + 2 + "1")
//41
console.log("Giá trị thứ 4", 6 - "2")
//4
console.log("Giá trị thứ 5", ("6" - "4") + 3 + "4")
//54
//typeof
console.log('Kiểu của "24": ', typeof "24")
console.log("Kiểu của 24: ", typeof parseInt("24"))
console.log(parseInt("24asdad"))
console.log(2 > 1);
console.log(3 >= 6)
//> < >= <= != ==
console.log("2" === 2)
console.log("2" == 2)
console.log("2" !== 2)
/*
NỘi dung là
fasfas
đá
*/
function sonFunction() {
    console.log("Son function vừa được gọi")
    alert("DONE")
}

function sonFunction2() {
    //Lấy thẻ P bằng id
    const theP = document.getElementById("theP")
    // Cho nhập giá trị đầu vào, sau khi nhập , giá trị sẽ là input
    let input = prompt("Mời bạn nhập giá trị")
    // Gán giá trị input vào nội dung thẻ P
    theP.innerHTML = input;
    //Thay đổi style thẻ P
    theP.style.color = "red"
}