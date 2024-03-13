let categories = document.querySelector(".categories_div");
let category = document.querySelector(".product_div");
let categoryRow = document.createElement("row");
let currentCat;
for (let cat in products){
    categories.appendChild(categoryRow);
    let catText = document.createElement("h2");
    catText.textContent = cat;
    categoryRow.appendChild(catText)  ;
}
categories.addEventListener("click", (event)=> {
    currentCat=event.target.textContent;
    createCategory();
})

function createCategory(){
    let productsOfCategory = products[currentCat];
    category.innerHTML="";
    for (product of productsOfCategory) {
        let newRaw = document.createElement("p")
        category.appendChild(newRaw); 
        newRaw.innerHTML= `Model: ${product.name} | Price: $${product.price}`;
        let newButton = document.createElement("button")
        newButton.textContent= "BUY"
        newRaw.appendChild(newButton);
        
    }

}
category.addEventListener("click", (event)=> {
    if (event.target.tagName=== "BUTTON"){

        let parentTargetText = event.target.parentNode.textContent;
        alert("Bought :"+ parentTargetText)
    }

})

