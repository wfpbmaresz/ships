const doc = {
    tbody: null
};
const state = {
    todos: []
}
window.addEventListener('load', () => {
    init();
    getShips();
    
});
function init() {
    doc.tbody = document.querySelector('#tbody');
}

function getShips() {
    let host = 'http://localhost:8000/';
    let endpoint = 'ships';
    let url = host + endpoint;
    fetch(url)
    .then(response => response.json())
    .then(result => {        
        state.ships = result;
        render();
    });
}
function render() {
    let rows = '';
    state.ships.forEach(ship => {
        console.log(ship.name);
        rows += `
            <tr>
                <td>${ship.name}</td>
                <td>${ship.size}</td>
                <td>${ship.price}</td>
                <td>${ship.people}</td>
                <td>${ship.trailer}</td>
            </tr>
        `;
    });
    doc.tbody.innerHTML = rows;
}