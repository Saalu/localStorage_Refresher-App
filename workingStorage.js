/* ===========PRACTICE THIS EVERYDAY  ============== */

//Add to Storage
function addItem(item){
    let names = getItem()

    names.push(item)

    localStorage.setItem('names', JSON.stringify(names))
    // console.log(names)
}
//Get item in Storage
function getItem(){
    let details;
    const storageContent = localStorage.getItem('details')
    if(storageContent === null){
        details = []
    }else{
        details = JSON.parse(storageContent)
    }
    return details
}
