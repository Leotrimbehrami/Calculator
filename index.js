
class Calculator{
    constructor(){
        this.PI = 3.141592653589793;
        this.E = 2.718281828459045;
    }

    //getter
    get pi() {
        return this.PI
    }

    get e() {
        return this.E
    }
    
    //methods
    ratio(x,y,width){
        return `height is ${(y / x) * width} on ratio x:y`
    }

    percentage(x,y){
        return `${(x / y) * 100}%`
    }

    add(x,y){
        return x + y
    }

    substract(x,y) {
        return x - y
    }

    multiply(x,y) {
        return x * y
    }

    divide(x,y) {
        return x / y
    }

    modulation(x,y){
        return x % y
    }

    elevate(x,y){
        return x ** y
    }

    sqrt(x){
        return Math.sqrt(x)
    }
}

const calculate = new Calculator()

console.log(calculate.pi)
console.log(calculate.e)

console.log(calculate.ratio(4,6,200))
console.log(calculate.percentage(5,20));
console.log(calculate.add(20,20));
console.log(calculate.substract(50,25));
console.log(calculate.multiply(5,5));
console.log(calculate.modulation(9,4));
console.log(calculate.elevate(5,2))
console.log(calculate.sqrt(35));