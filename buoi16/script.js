const arr = [2, 4, 6, 8]
console.log(arr[2]); //6
const n = arr.length
const a = 3
for (let i = 0; i < n; i += 2) {
    const value = arr[i];
    console.log(value, ' ')
}

for (const b in arr) {
    console.log(b, ' ') //2 4 6 8
}


const c = new Date('2018/6/6');
const d = 7;
const e = Date.now()
console.log(c, e)
console.log(typeof c, typeof e)
const f = new Date(e);
console.log(f)
console.log(c.getHour())