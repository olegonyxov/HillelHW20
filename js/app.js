let categories = document.querySelector(".categories_div");
let category = document.querySelector(".product_div");
let categoryRow = document.createElement("row");
let currentCat;
let currentProduct;
let messagetext;
for (let cat in products){
    categories.appendChild(categoryRow);
    let catText = document.createElement("h2");
    catText.textContent = cat;
    categoryRow.appendChild(catText)  ;
}
categories.addEventListener("click", (event)=> {
    currentCat=event.target.textContent;
    // alert(products[currentCat])  
    console.log("clicked");
    console.log(currentCat);
    parseCategory();
})

function parseCategory(){
    let productsOfCategory = products[currentCat];
    category.innerHTML="";
    for (product of productsOfCategory) {
        let newRow = document.createElement("ul")
        let newElem = document.createElement("li");
        // let newButton = document.createElement("button",{value:"Buy"})
        category.appendChild(newRow);
        newRow.appendChild(newElem);
        // newRow.appendChild(newButton);
        // newButton.textContent = 'Buy';
        newElem.innerHTML= `Model: ${product.name} |Price: $${product.price}`;
    }

}
category.addEventListener("click", (event)=> {
    currentProduct=event.target.textContent;
    alert("Buyed :"+ currentProduct)
})

