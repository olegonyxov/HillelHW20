let categories = document.querySelector(".categories_div");
let category = document.querySelector(".product_div");
for (let categ in products){
    let categoryRow = document.createElement("h2");
    categories.appendChild(categoryRow);
    categoryRow.textContent = categ
}
categories.addEventListener("click", (event)=> {
    sessionStorage.setItem('currentCat', event.target.textContent)
    currentTag = event.target.tagName;
    if (currentTag=== "H2"){
        createCategory();
    }
    
})

function createCategory(){
    let stored = sessionStorage.getItem('currentCat')
    let productsOfCategory = products[stored];
    category.innerHTML="";
    for (product of productsOfCategory) {
        let newRow = document.createElement("p")
        category.appendChild(newRow); 
        newRow.innerText= `Model: ${product.name} || Price: $${product.price}`;
        let newButton = document.createElement("button")
        newButton.textContent= "BUY"
        newRow.appendChild(newButton);
        
    }

}
category.addEventListener("click", (event)=> {
    if (event.target.tagName=== "BUTTON"){

        let parentTargetText = event.target.parentNode.textContent;
        alert("Bought :"+ parentTargetText)
    }

})

