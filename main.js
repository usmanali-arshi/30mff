// let textAppear= () => {
// 	setTimeout(()=>{
// 		document.getElementById("motivating-text").innerText = "Allow yourself some time and space to adapt to 	these challenging times."
// 	}, 500)
	
// }

// let appear = document.getElementById('title');


// appear.addEventListener('mouseover', textAppear)


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
