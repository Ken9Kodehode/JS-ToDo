var ul = document.getElementById('list')  
var li;
var addButton = document.getElementById('add') 
//Listen to click addItem function 
addButton.addEventListener("click",addItem)


// Function
function addItem(){                        
    var input = document.getElementById('input')        
    var item = input.value;            
    var textNode = document.createTextNode(item) 
    //Alert if input value is empty
    if (item == '') {      
        msg= "You forgot to write a task!"
        alert(msg)
        return false
    //Create LI
    //Help from includehelp.com    
    } else {             
        li = document.createElement('li')    
        let checkbox = document.createElement('input')       
        checkbox.type = 'checkbox'            
        checkbox.setAttribute('id','check')      
       
        let label = document.createElement('label')     

        ul.appendChild(label)                    
        li.appendChild(checkbox)
        label.appendChild(textNode)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0])
        setTimeout(()=>{
            li.className = 'visual'
        },5)
        input.value = " "            
    }
}
//Remove button
var removeButton = document.getElementById('remove')  
//Listen for click    
removeButton.addEventListener("click",removeItem)    

//Funtion to remove item for LI
function removeItem(){           
    li=ul.children
    for (let index = 0; index < li.length; index++) {   
        const element = li[index];           
        while(li[index] && li[index].children[0].checked){ 
            ul.removeChild(li[index])
        }
        
    }   
}

let alphabetical = false

// Thanks for this sorting solution Gustav :)
function sortList   () {
    let currentToDos = []
    console.log(currentToDos)

    const allListItems = document.querySelectorAll("LI")

    allListItems.forEach(listEl => {
        currentToDos.push(listEl.firstChild.textContent)
    })

    currentToDos.sort()

    alphabetical = !alphabetical
    !alphabetical ? currentToDos.reverse() : null
        return currentToDos
}


    //  Sorting function
    //  this looop idea was provided by W3schools - This sorting function gave me alot of problems so i tried to use 
    //  the sorting function 2nd method you provided witch worked better

//function sortList() {
//    var list, i, switching, b, shouldSwitch;
//    /* Div ID */
//    list = document.getElementById("list");
//    switching = true;
//    while (switching) {
//      switching = false;
//      /* Element tag */
//      b = list.getElementsByTagName("LI");
//      for (i = 0; i < (b.length - 1); i++) {
//        shouldSwitch = false;
//        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
//          shouldSwitch = true;
//          break;
//        }
//      }
//      if (shouldSwitch) {
//        b[i].parentNode.insertBefore(b[i + 1], b[i]);
//        switching = true;
//      }
//    }
//  }
