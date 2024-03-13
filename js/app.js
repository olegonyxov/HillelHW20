let categories = document.querySelector(".categories_div");
let category = document.querySelector(".product_div");
let categoryRow = document.createElement("row");
let currentCat;
let currentProduct;
for (let cat in products){
    categories.appendChild(categoryRow);
    let catText = document.createElement("h2");
    catText.textContent = cat;
    categoryRow.appendChild(catText)  ;
}
categories.addEventListener("click", (event)=> {
    currentCat=event.target.textContent;
    parseCategory();
})

function parseCategory(){
    let productsOfCategory = products[currentCat];
    category.innerHTML="";
    for (product of productsOfCategory) {
        let newRaw = document.createElement("p")
        let newButton = document.createElement("button")
        newButton.textContent= "Buy"
        newRaw.appendChild(newButton); // Не работает
        category.appendChild(newRaw);      
        newRaw.innerHTML= `Model: ${product.name} |Price: $${product.price}`;
    }

}
category.addEventListener("click", (event)=> {
    if (event.target.tagName=== "P"){
        currentProduct=event.target.textContent;
        alert("Buyed :"+ currentProduct)
    }

})

