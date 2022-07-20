const a = {
    key1: 'value1',
    key2: 1,
    key3: [1, 2, 3, 4],
    key4: {

    }
}
const abc = () => { }
const sv = {
    ten: "Sang",
    tuoi: 12,
    dihoc: () => {
        console.log("Dang di hoc")
    },
    ngu: function () {
        console.log(this.ten)
    },
    di: abc
}
console.log(a['key1']) //=> value1
console.log(a.key1)
const sv2 = { ...sv, ten: "Sang2" }///...sv => ten:"sang",tuoi:12
sv.dihoc()
sv.ngu()
const order = {
    id: 1,
    order_detail: [
        {
            product_id: 1,
            name: "Sp1",
            price: 2000
        },
        {
            product_id: 2,
            name: "Sp1",
            price: 2000
        }
    ],
    removeProduct: function (product_id) {
        this.order_detail = this.order_detail.filter(f => f.product_id != product_id)
    },
    addProduct: function (product) {
        this.order_detail.push(product)
    },
    editPrice: function (product_id, price) {
        // const products = this.order_detail.filter(f => f.product_id === product_id)
        // if (products.length == 1) {
        //     const product = products[0]
        //     product.price = price
        // }
        const product = this.order_detail.find(f => f.product_id === product_id)
        if (product !== undefined) {
            product.price = price
        }
    },
    totalPrice: function () {
        return this.order_detail.reduce((preValue, value) => {
            return preValue + value.price
        }, 0)
    }
}
console.log(order.totalPrice())
order.addProduct({
    product_id: 3,
    price: 3000,
    name: "Sp3",
})
console.log(order.totalPrice())
order.removeProduct(3)
console.log(order.totalPrice())
console.log("HERE", Object.keys(order))
console.log("VALUE", Object.values(order))
const orderId = order.id
const { order_detail, id, } = order
console.log(order_detail)
const b = [1, 2, 3, 4, 5]
const [, , , bien2] = b;
console.log(bien2)
Object.entries(order, (bien) => {
    const [key, value] = bien
    console.log(key)
})

function abcd(
    order
) {
    const { id, order_detail } = order
    console.log(id)
}

function abcde(
    { id, order_detail }
) {
    console.log(id)
}


abcd(order)