let inputbox = document.querySelector('#inputbox');
let list = document.querySelector('#list');

inputbox.addEventListener("keyup", function(event){
   if (event.key == "Enter"){
    addItem(this.value)
    this.value  =""
   }
})
 let addItem = (inputbox) => {
    let listItem = document.createElement("li")
    listItem.innerHTML = `${inputbox}}}<i><i>` ;

    list.appendChild(listItem);
 }


 function Add(){
   if (inputbox.value === ''){
     alert("you must write something!");
 }
   else {
       let li = document.createElement("li");
       li.innerHTML = inputbox.value;
       list.appendChild(li);
  }
}
 