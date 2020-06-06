
// To enable the scroll event through clickable button 

let section2 = document.getElementById("scrollable");
section2.addEventListener('click',() =>{
	window.scroll({
		top:730,
		left:0,
		behavior: 'smooth'
	});
	// console.log("pls work")


});

// For clickable Actor's images, so that they change to the icons 
// representing what they did during the lockdown in their individual spaces during Lockdown/Quarantine
// If statements added so if the user clicks on the pictures again the icons are changed back to the Actor's photos
let dance = document.getElementById('Usman1');
dance.addEventListener('click',() => {
	if (dance.src.match("Usman")) {
		dance.src="dancing.jfif";

	}
	else{
		dance.src="Usman.jpg";
	}
	
})
let gym = document.getElementById('Sony1');
gym.addEventListener('click',() => {
	if (gym.src.match("Sony")) {

		gym.src="workout.jpg";

	}
	else{
		gym.src="Sony.jpg";
	}
	
})
let play = document.getElementById('Zunair1');
play.addEventListener('click',() => {
	if (play.src.match("Zunair")) {
		play.src="game1.png";

	}
	else{
		play.src="Zunair.jpg";
	}
	
})
let code = document.getElementById('Nurgazy1');
code.addEventListener('click',() => {
	if (code.src.match("Nurgazy")) {
		code.src="coding.png";

	}
	else{
		code.src="Nurgazy.png";
	}
	
})
