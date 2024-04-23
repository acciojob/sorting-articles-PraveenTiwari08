//your JS code here. If required.
let list = document.getElementById("bands");
const bands = ['The Plot in You', 
			   'The Devil Wears Prada', 
			   'Pierce the Veil', 
			   'Norma Jean', 
			   'The Bled', 'Say Anything', 'The Midway State', 
			   'We Came as Romans', 'Counterparts', 
			   'Oh, Sleeper', 'A Skylit Drive', 
			   'Anywhere But Here', 'An Old Dog'];

bands.sort();
// bands.forEach(item => {
//   listHTML = `<li>${item}</li>`;
// });
// list.innerHTML = listHTML;
let listitems = "";
for(let item of bands){
	listitems += `<li>${item}</li>`;
}
list.innerHTML = listitems;