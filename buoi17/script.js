// let a = 12;
// let b = 13;
// const dthv = a * b * 1 / 2;
// let c = 14
// const dthv2 = a * c * 1 / 2;
// function tinhDienTichHinhVuong(a, b) {
//     return a * b
// }

// const hinh1 = tinhDienTichHinhVuong(a, b)
// const hinh2 = tinhDienTichHinhVuong(a, c)
// function test(a) {
//     a = a + 1
//     console.log(a);//13
// }
// function test2(a) {
//     a[1] = 3
// }
// console.log(a)//12
// test(a);
// console.log(a)//12
// const d = [1, 2, 3, 4]
// test2(d)
// console.log(d)
// const e = test(a)


// function tinhBinhPhuong(a) {
//     return a * a
// }
// let g = "12"
// let h = parseInt(g)
// tinhBinhPhuong(h)
// parseInt(prompt("Moi ban nhap"))


function logDetail(so) {
    console.log("Số của bạn là: ", so)
}
function logNormal(so) {
    console.log(so)
}

function test(thamSo) {
    console.log(thamSo + 1)
    console.log("Gọi hàm test")
}
function hamTinhToanDienTich(a, b, hamLog) {
    const result = a * b;
    hamLog(result)
}

hamTinhToanDienTich(2, 3, logDetail)
hamTinhToanDienTich(3, 4, logNormal);

const dthv = (a, b) => {
    return a * b
}

dthv(2, 3)
const a = [2, 3, 4, 5, 6].map((item) => { return item + 1 })

console.log(a)

const b = [4, 123, 6547, 123]
let sum = 0;
b.forEach(item => {
    sum += item
})

const ketQua = [2, 3, 4, 5, 6, 7].map((item) => {
    if (item % 2 == 0) {
        return item
    } else {
        return "Le"
    }
})
console.log(ketQua);//[2,"le",4,"le",6,"le"]


const n = 6;
const arr = []
const deQuy = (a) => {
    if (a <= n && a >= 1) {
        arr.push(a)
        a = a - 1;
        deQuy(a)
    } else {
        return
    }
}
deQuy(n)
arr.reverse()
console.log("Mang arr",arr)