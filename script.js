const searchBox = document.getElementById('searchbar');
const searchValue = document.getElementById('searchbar').value;
const outSection = document.getElementById('match-list');

async function getstates(){
    var responce = await fetch("states.json");
    var states =  await responce.json();
    console.log(states);
}

searchBox.addEventListener('input',getstates);