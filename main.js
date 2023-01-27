function saveToLocalStorage(event){
    event.preventDefault();
    let amount=event.target.amount.value;
    let description=event.target.description.value;
    let category=event.target.category.value;
   const obj={
    amount:amount,
   description:description,
category:category
   }
   localStorage.setItem(obj,JSON.stringify(obj));
   showUserOnScreen(obj)
}
function showUserOnScreen(obj){
    const parentItem=document.getElementById("users")
    const childItem=document.createElement("li")
    childItem.textContent= obj.amount + ' - '+ obj.description + ' - ' + obj.category

    const deleteButton=document.createElement('input')
    deleteButton.type= "button"
    deleteButton.value= 'delete expense'
    deleteButton.onclick= ()=>{
        localStorage.removeItem(obj)
        parentItem.removeChild(childItem)
    }
    const editButton=document.createElement('input')
    editButton.type= "button"
    editButton.value= 'edit expense'
    editButton.onclick= ()=>{
        localStorage.removeItem(obj)
        parentItem.removeChild(childItem)
        document.getElementById('amount').value = obj.amount
        document.getElementById('description').value = obj.description
        document.getElementById('category').value = obj.category
    }
    childItem.appendChild(editButton)
    childItem.appendChild(deleteButton)
    parentItem.appendChild(childItem)
}