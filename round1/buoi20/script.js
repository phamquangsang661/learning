function Color(r, g, b = null) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.log = () => {
        console.log(r, g, b)
    }
}

const test = new Color(1, 2, 3)
const test2 = new Color(1, 2)
test.log()
test2.log()

Color.something = "sang"
console.log((new Color(1, 2, 3)).something)

const obj = {
    log: ['a', 'b', 'c'],
    get latest() {
        return this.log[this.log.length - 1];
    },
    newest: () => {
        return this.log[0];
    }
};
// const sv = {
//     height: 10,
//     get chieucao() {
//         return height + 1
//     },
//     set chieucao(height) {
//         this.height = height
//     },
//     getHeight: () => {
//         return height + 1
//     }
// }

// console.log(obj.newest())
// console.log(obj.latest);
// // expected output: "c"

class SV {
    name = '';
    test = ''
    constructor(name, test = '') {
        this.name = name
        this.test = test
    }

    dihoc() {
        console.log("TE")
    }

    toString() {
        return this.name
    }

}

const svA = new SV('SVA')
const svC = new SV('SVA', "dasvfv")
const svB = new SV('SVB')
const testOBJ = {
    a: 1, b: 2
}
console.log(svA)
console.log(svC)

class hinhHoc {

    static tinhToanCV(a, b = null, c = null) {
        if (a == undefined || a == null) {
            return NaN
        }
        if (b == null && c == null) {
            return a * 4
        }
        if (c == null) {
            return (a + b) * 2
        }
        return a + b + c
    }
}

class Point {
    x = 0
    y = 0
    static z = 0
    constructor(x, y) {
        this.x = x;
        this.y = y
    }
    static sum(p1, p2) {
        return new Point(p1.x + p2.x, p1.y + p2.y)

    }
    toString() {
        return this.x + ' ' + this.y
    }
}

const p1 = new Point(1, 2)
const p2 = new Point(2, 3)
const p3 = Point.sum(p1, p2)
Point.z = Point.z + 1
console.log(Point.z)
console.log(p3.toString())