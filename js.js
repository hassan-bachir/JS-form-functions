
// navigation toggle button
const toggle =document.querySelector('.toggle')
const toggleic =document.querySelector('.toggle i')
const dropdown =document.querySelector('.dropdown')
toggle.onclick = function(){
    dropdown.classList.toggle('open');
    const isopen =dropdown.classList.contains('open');}
    
//json file things
const fs = require('fs');
const data = fs.readFileSync('data.json');