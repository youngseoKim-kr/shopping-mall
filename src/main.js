
//json파일로부터 아이템을 받아온다. 
//fetch를 이용해서 데이터를 가져오고
//json으로 변환한다.
function loadItems() {
    return fetch('data/data.json')
        .then(res => res.json())
        .then(json => json.items);
}


//main
loadItems()
.then(items => {
    console.log(items);
    // displayItems(items);
    // setEventListeners(items)
})
.catch(console.log);