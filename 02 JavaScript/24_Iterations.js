const coding = ["js", "ruby", "java", "python"]

// const values = coding.forEach((item) => {
//     return item
// })
// console.log(values) // give undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => num > 4)

// const newNums = myNums.filter((num) => {
//     return num > 4
// })

// console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// const userBooks = books.filter((bk) => bk.genre === 'History')
// const userBooks = books.filter((bk) => bk.publish >= 2000 && bk.genre === 'Science')

// console.log(userBooks)

// map
// const newNum = myNums.map((num) => num+1)
// console.log(newNum);
// [
//   2, 3, 4,  5,  6,
//   7, 8, 9, 10, 11
// ]

// Chaining
// const newNum = myNums.map((num) => num*10).map((num)=>num+1)
// console.log(newNum);
// [
//   11, 21, 31, 41,  51,
//   61, 71, 81, 91, 101
// ]

const initialvalue = 0
const sumWithInitial = myNums.reduce(
    (accumulator, currentvalue) => accumulator + currentvalue, initialvalue
)
console.log(sumWithInitial);
// 55

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalamount = shoppingCart.reduce(
    (item, currentItem) => item + currentItem.price , 0
)
console.log(totalamount);

