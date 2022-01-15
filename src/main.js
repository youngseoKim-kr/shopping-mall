
//json파일로부터 아이템을 받아온다. 
//fetch를 이용해서 데이터를 가져오고
//json으로 변환한다.
function loadItems() {
    return fetch('data/data.json')
        .then(res => res.json())
        .then(json => json.items);
}

//아이템을 가져와서 보여준다.
function displayItems(items){
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

//li태그를 만들어서 넣어줌
function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
        <span class=="item__description">${item.gender}, ${item.size}</span>
      </li>
    `;
}

function onButtonClick(event, items) {
    const datset = event.target.dataset;
    const key = datset.key;
    const value = datset.value;
    // button 전체 범위를 가져오기 때문에 버튼을 안누르면 값이 없다.
    if(value == null || key == null) return;

    displayItems(items.filter(item => item[key] === value));
}

//버튼 클릭시 원하는 정보만 출력
function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const button = document.querySelector('.buttons');
    logo.addEventListener('click', () => displayItems(items));
    button.addEventListener('click', event => onButtonClick(event, items));
}

//main
loadItems()
.then(items => {
    displayItems(items);
    setEventListeners(items)
})
.catch(console.log);