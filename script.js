//your JS code here. If required.
let list = document.getElementById("band");
const bands = ['The Plot in You', 
			   'The Devil Wears Prada', 
			   'Pierce the Veil', 
			   'Norma Jean', 
			   'The Bled', 'Say Anything', 'The Midway State', 
			   'We Came as Romans', 'Counterparts', 
			   'Oh, Sleeper', 'A Skylit Drive', 
			   'Anywhere But Here', 'An Old Dog'];


let listHTML = "<ul>";
listItems.forEach(item => {
  listHTML += `<li>${item}</li>`;
});
listHTML += "</ul>";

list.innerHTML = listHTML;
