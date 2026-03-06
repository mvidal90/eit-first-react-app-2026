
// Desestructuración (Objetos y arrays)

const x = {
    a: "a",
    b: "b",
    c: "c",
    d: "d"
}

const { a, b, ...rest } = x;

console.log(a) // output --> "a"
console.log(b) // output --> "b"
console.log(rest) // output --> { c: "c", d: "d" }

const fruits = [ "Manzana", "Pera", "Banana", "Kiwi"]

const [ fruit1, , fruit3, ...restFruits ] = fruits

console.log(fruit1) // output --> "Manzana"
console.log(fruit3) // output --> "Banana"
console.log(restFruits)