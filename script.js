// let cards = {

//     productName = name,
//     productDescription = decsription,
//     productPrice = price,
//     productURL = URL,
//     productCategory = category,
// }

let products = [
    {
        name: "coffee",
        price: "10.00",
        description: "Lorem",
        URL: "#",
        category: "drink",
    },
    {
        name: "Java",
        price: "2.00",
        description: "Lorem",
        URL: "#",
        category: "drink",
    }
]

products.forEach(element => console.log(element.name))
products.forEach(element => element, document.createElement(div))

