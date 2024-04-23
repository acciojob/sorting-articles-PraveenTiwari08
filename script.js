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

function stripArticle(bandName) {
    return bandName.replace(/^(a |an |the )/i, '').trim();
}

bands.sort((a, b) => {
    const bandA = stripArticle(a);
    const bandB = stripArticle(b);
    if (bandA < bandB) {
        return -1;
    }
    if (bandA > bandB) {
        return 1;
    }
    return 0;
});

let listitems = "";
for(let item of bands){
	listitems += `<li>${item}</li>`;
}
list.innerHTML = listitems;