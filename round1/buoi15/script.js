let a = 1;
let b = 0;
if (a < b) {
    console.log("A<B");
}
if (a > b) {
    console.log("IT GOES HERE");
} else {
    console.log("IT GOES ELSE")
}

if (a > b) {
    if (a == 1) {

    } else if (b == 2) {
        console.log("GO HERE")
    }
}
const caseC = 'dsafdsf'

switch (caseC) {
    case 'case a':
        console.log("CASE a")
        break;
    case 'case b':
        console.log(caseC)
    case 'case c':
        {
            console.log("case c")
            break;
        }
    case 'case d':
        console.log("ABCD")
        break;
    default:
        console.log(1)
}
const test = "Vu Hong Yen"
console.log(test.length)
console.log(test.charAt(1)) //=> u
console.log(test.concat(" Son")) //=> Vu Hong Yen Son
console.log(test.replace(' ', '*')) //=> Vu*Hong*Yen
console.log(test.split())// => ["Vu","Hong","Yen"]
console.log(test.toLowerCase()) // => vu hong yen
console.log(test.toUpperCase()) // => VU HONG YEN
console.log("son dang ngap".includes("dang")) // true
console.log("son dang ngap".search("ngap")) //9

const abc = [1, 2, 3, 4]
console.log(abc.length) //4
abc.push(5)
console.log(abc) //[1,2,3,4,5]
console.log() //[5,4,3,2,1]
console.log(abc) //[1,2,3,4,5]
//Tham chiếu
const bcd = abc;
bcd[2] = 4;// 1,2,4,4,5
console.log(abc)// 1 2 4 4 5


// Tham trị
let d = 1;
let e = d;
e = e + 1
console.log(d)
abc.includes(5) //true
const arr1 = [23, 41, 67, 12]
console.log(arr1.sort())// 12 23 41 67 
console.log(arr1.reverse()) //67 41 23 12 
console.log(arr1.pop())//Chưa từng sắp xếp và reverse thì sẽ ra => 12 , log ra arr1 => 23,41,67
console.log(arr1.shift())//Chưa từng sắp xếp và reverse thì sẽ ra 23, log ra arr1 => 41,67
console.log(arr1.join(',')) //Chua tung lam sao ca "23,41,67,12"