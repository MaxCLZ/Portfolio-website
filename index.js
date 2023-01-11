
let cv = document.getElementById('cv');

const projectList = [...document.getElementsByClassName('project')]
console.log(projectList);

const openOrCloseDetails = (event) =>{
    event.target.lastElementChild.style.display === '' ? event.target.lastElementChild.style.display = 'flex' : event.target.lastElementChild.style.display = ''   
}
const addEvent = function (elem) {
    elem.addEventListener("click",openOrCloseDetails) 
}
projectList.forEach(addEvent)
