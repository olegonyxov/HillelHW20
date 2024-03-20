let categories = document.querySelector(".categories_div");
let category = document.querySelector(".product_div");
let userData;
for (let categ in products){
    let categoryRow = document.createElement("h2");
    categories.appendChild(categoryRow);
    categoryRow.textContent = categ
}
categories.addEventListener("click", (event)=> {
    sessionStorage.setItem('currentCategory', event.target.textContent)
    currentTag = event.target.tagName;
    if (currentTag=== "H2"){
        createCategory();
    } else if (currentTag=== "BUTTON"){
        console.log('button clicked');  
}})



function createCategory(){
    category.innerHTML="";
    for (product of products[sessionStorage.getItem('currentCategory')]) {
        let newRow = document.createElement("h4")
        category.appendChild(newRow); 
        newRow.innerText= `Model :${product.name} || Price:$${product.price} `;
        let newButton = document.createElement("button")
        newButton.textContent= "BUY"
        newRow.appendChild(newButton);
    }
}
function clickToBuy(){
    let parentTargetText
    category.addEventListener("click", (event)=> {
        if (event.target.tagName=== "BUTTON"){
            event.target.textContent = ""
            parentTargetText = event.target.parentNode.textContent;
            createBuyForm()
        }
        category.innerHTML="";
    })
    return parentTargetText
    
}

function createBuyForm(){
    const parent = document.querySelector(".buyForm");
    parent.classList.remove("hidden")
    saveButtonClick()

}

function saveButtonClick(){
    let saveBtn = document.querySelector(".save_btn");
    saveBtn.addEventListener('click',event => {
        userData = collectDataToBuy()
        checkUserData()
        let getLocalOrder= localStorage.getItem('orders')
        let newID = 1
        let data =`order : ${newID}, id : ${newID} , name : ${userData.name} , City : ${userData.userCity} , Department :${userData.department} , PayWay : ${userData.payWay} , Count :${userData.count} , Comments :${userData.comments}`
        if (!getLocalOrder){
            localStorage.setItem('orders', JSON.stringify(data))
        } else if (getLocalOrder){
            console.log("MyOrders clicked")
            let getLocalOrder= localStorage.getItem('orders')
            parsedOrder= JSON.parse(getLocalOrder)
            newID++
            newMark = 'id'+ newID
            parsedOrder[newMark]=data
            localStorage.setItem('orders', JSON.stringify(parsedOrder))
            return      
        }       
    })
}
function checkUserData(){
    if (userData.name === "" || !userData.userCity || !userData.department || !userData.payWay || !userData.count){
        alert("Please fill the form")
    }
}

function createMyOdersBtn(){
    myOrdersBtn= document.createElement('button');
    myOrdersBtn.textContent= "My orders";
    categories.appendChild(myOrdersBtn);
    myOrdersBtn.addEventListener('click',event => {
        parsedOrder = JSON.parse(localStorage.getItem('orders'))
        console.log(parsedOrder)
    })    
}


clickToBuy()
createMyOdersBtn()


