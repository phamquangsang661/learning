const a = [1, 3, 5, 7, 12]
const b = [5, 4, 45, 8, 12]
let c = [...a]
c[1] = 2
let d = a//clone
let e = [...a] //deep clone
console.log(a)
console.log(c)
const sv = {
    ten: "Sang",
    tuoi: 22,
    ngaysinh: [6, 6, 2001]
}

let sv2 = { ...sv }
sv2.ten = "SV2"
sv2.ngaysinh[0] = 7;

let sv3 = structuredClone(sv) //JSON.parse(JSON.stringify(sv))
sv3.ten = "SV3"
sv3.ngaysinh[0] = 8;

console.log(sv)
console.log(sv2)
console.log(sv3)

function dtht(r, pi = 3.14) {
    return r * r * pi
}

function dtht2(pi = 3.14, r) {
    return r * r * pi
}//Sai

console.log(dtht(2))
console.log(dtht(2, 3.14592))

function sum(init, ...arr) {
    return arr.reduce((preValue, value) =>
        preValue + value
        , init)
}

console.log(sum(5, 2, 3))
console.log(sum(0, 3, 4, 5, 6))

let dictionary = new Map()
dictionary.set('go', "Đi bộ")
dictionary.set('school', "Trường học")
// function logMap(map) {
//     for (let [key, value] of map.entries()) {
//         console.log("KEY la", key)
//     }
// }
// logMap(dictionary)
const test1 = dictionary.keys()
const test2 = dictionary.values()
const test3 = dictionary.entries()
for (let someThing of test1) {
    console.log(someThing)
}

// const dictionary2 = {
//     "go": "đii bộ",
//     "school": "Trường học"
// }
// Object.keys(dictionary2).map(key => {
//     console.log(key, dictionary2[key])
// })
const tapHop = new Set([1, 3, 4, 6, 4, 3])
console.log(tapHop.values())
for (let giaTri of tapHop.values()) {
    console.log(giaTri)
}

