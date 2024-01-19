let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");
let q4 = document.getElementById("q4");
let q5 = document.getElementById("q5");
let q5b = document.getElementById("q5b");


const people = [
    {
        "name": "Louis Einhorn",
        "height": "70 inches",
        "age": 37
    },
    {
        "name": "Micheal Baldwin",
        "height": "62 inches",
        "age": 64
    },
    {
        "name": "John Koch",
        "height": "48 inches",
        "age": 14
    },
    {
        "name": "Santino Jennings",
        "height": "64 inches",
        "age": 18
    },
    {
        "name": "Wesley Cortez",
        "height": "72 inches",
        "age": 19
    },
    {
        "name": "Ellen Wagner",
        "height": "61 inches",
        "age": 25
    },
    {
        "name": "Dakota Rosario",
        "height": "64 inches",
        "age": 34
    },
    {
        "name": "Seamus Roy",
        "height": "72 inches",
        "age": 53
    },
    {
        "name": "Brent Harvey",
        "height": "68 inches",
        "age": 87
    },
    {
        "name": "Leyla Calderon",
        "height": "70 inches",
        "age": 44
    },
    {
        "name": "Bria Hammond",
        "height": "67 inches",
        "age": 39
    },
    {
        "name": "Rhett Cox",
        "height": "67 inches",
        "age": 35
    },
    {
        "name": "Winston Castro",
        "height": "52 inches",
        "age": 16
    },
    {
        "name": "Triston Clarke",
        "height": "54 inches",
        "age": 15
    },
    {
        "name": "Valerie Patterson",
        "height": "55 inches",
        "age": 17
    },
    {
        "name": "Caroline Watkins",
        "height": "65 inches",
        "age": 36
    },
    {
        "name": "Jaylene Ibarra",
        "height": "62 inches",
        "age": 33
    },
    {
        "name": "Gustavo Adkins",
        "height": "63 inches",
        "age": 37
    },
    {
        "name": "Annabel Park",
        "height": "66 inches",
        "age": 27
    },
    {
        "name": "Gabriela Bradshaw",
        "height": "69 inches",
        "age": 52
    },
    {
        "name": "Mia Cantrell",
        "height": "70 inches",
        "age": 24
    },
    {
        "name": "Augustus Little",
        "height": "58 inches",
        "age": 27
    },
    {
        "name": "Harold Dougherty",
        "height": "67 inches",
        "age": 33
    },
    {
        "name": "Cristopher Mclean",
        "height": "70 inches",
        "age": 35
    },
    {
        "name": "Destiny Jenkins",
        "height": "72 inches",
        "age": 26
    },
    {
        "name": "Kierra Nicholson",
        "height": "73 inches",
        "age": 25
    },
    {
        "name": "Chris Stevenson",
        "height": "63 inches",
        "age": 22
    },
    {
        "name": "Nathalia Choi",
        "height": "66 inches",
        "age": 20
    },
    {
        "name": "Makaila Hooper",
        "height": "72 inches",
        "age": 18
    },
    {
        "name": "Graham Kirby",
        "height": "71 inches",
        "age": 29
    },
    {
        "name": "Harper Padilla",
        "height": "68 inches",
        "age": 16
    },
    {
        "name": "Jaron Park",
        "height": "52 inches",
        "age": 15
    },
    {
        "name": "Aditya Mcguire",
        "height": "53 inches",
        "age": 17
    }
];



// 1
let twen = people.filter(element => element.age > 19 && element.age < 30)
q1.textContent = twen.length
console.log(twen)

//2
let drink = people.filter(element => element.age > 20)
q2.textContent = drink.length
console.log(drink)

//3
let height = people.map(ele => ele.height.split(" "))
let checkHeight = height.map(ele => Number(ele[0]))
let filtered = checkHeight.filter(ele => ele > 66)

// console.log(height)
// console.log(checkHeight)
console.log(filtered)

q3.textContent = filtered.length

//q4

// let w = checkHeight.sort().findIndex(ele => ele > 56)

// console.log(w)

//



q4.textContent = "idk"




//q5
let names = people.every(element => element.name.length > 16)
q5.textContent = names
console.log(names)

//q5b


let checkagain = checkHeight.every(ele => ele > 50)

q5b.textContent = checkagain;
