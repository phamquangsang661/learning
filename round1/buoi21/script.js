
class MyError extends Error {
    constructor(message, statusCode) {
        super()
        this.message = "Lỗi của bạn là: " + statusCode + message
    }
}



try {
    const a = 2;
    const b = 0;
    if (b == 0) {
        throw new MyError("Mẫu không được bằng 0", 200)
    }
    console.log(a / b)
    console.log("go here")
} catch (er) {
    console.log(er.message)

}
console.log("Chương trình đã bị ngắt trước khi đến đây")
let count = 0
function testBatDongBo() {

    const callback2 = () => {
        alert("Gọi sau khi gọi callback")
    }
    const callback = () => {
        count += 1
        console.log("GO HERE")
        setTimeout(callback2, 2000)
    }
    setTimeout(callback, 2000)



}

function testBatDongBo2() {
    new Promise((resolve, reject) => {
        const abcd = 0;
        if (abcd == 0) {
            reject("abcd = 0")
            return;
        }
        setTimeout(() => {
            console.log("Kết thúc promise")
            resolve(true)
        }, 2000)
    }).then((value) => {
        console.log(value)
    }).catch(value => {
        console.log("Vào catch")
        console.log(value)
    })
}

const API_KEY = "30d4f8b53ff0eef50436d323f1e01784"

function testBatDongBo3() {

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${API_KEY}`).then(value => {
        value.json().then(value2 => {
            console.log(value2)
        })
    }).catch(err => {
        console.log(err)
    })

}