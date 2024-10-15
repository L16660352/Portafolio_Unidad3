function index(){
	var cont = document.getElementById("contenido")
	cont. innerHTML = "<h1>Galería</h1>"
	var title = document.createElement("h2")
	title.innerHTML = "Nivel Basico";
	cont.appendChild(title)


	var act_bas = [
		["imagen/hola.jpg", "./Nivel_Basico/A1_HolaMundo/hola.html",],
		["imagen/tabla.jpg", "./Nivel_Basico/A2_Tabla/tabla.html",],
		["imagen/imagenes aleatoorias.jpg", "./Nivel_Basico/A5_ImagenesAleatorias/index.html",],
		["imagen/coloraleatorio.jpg", "./Nivel_Basico/A6_ColoresAleatorios/index.html",],
		["imagen/temporizador.jpg", "./Nivel_Basico/A7_Temporizador/index.html",],
	]

	act_bas.forEach(function(item) {
		console.log(item)
		cont.appendChild(actividad(item[0], item[1]))
	})

	var title = document.createElement("h2")
	title.innerHTML = "Nivel Intermedio";
	cont.appendChild(title)
	var act_int = [
		["imagen/to do list.jpg",		"./Nivel_Intermedio/A1_ToDoList/index.html"],
		["imagen/piedra_papel_tijera.jpg",		"./Nivel_Intermedio/A2_PiedraPapelTireja/index.html"],
		["imagen/galeria.jpg",		"./Nivel_Intermedio/A4_GaleriaModal/index.html"],
		["imagen/calc.jpg",		"./Nivel_Intermedio/A5_Calculadora/index.html"],
		["imagen/convertidor.jpg",		"./Nivel_Intermedio/A6_ConvertidorUnidades/index.html"],
		["imagen/contadorpalabtras.jpg",		"./Nivel_Intermedio/A7_ContadorPalabras/index.html"]
	]


	act_int.forEach(function(item) {
		console.log(item)
		cont.appendChild(actividad(item[0], item[1]))
	})

	var title = document.createElement("h2")
	title.innerHTML = "Nivel Avanzado";
	cont.appendChild(title)
	var act_ava = [
		["imagen/galeria.jpg",	"./Nivel_Avanzado/A1_GaleriaUnsplash/index.html"],
		["imagen/blocnotas.jpg", "./Nivelvel_Avanzado/A2_NotasLocalStorage/index.html"]
	]
	
	act_ava.forEach(function(item) {
		console.log(item)
		cont.appendChild(actividad(item[0], item[1]))
	})
}

function actividad( pic, act_loc){
	var act = document.createElement("div")
	var a = document.createElement("a")
	var img = document.createElement("img")
	a.href = act_loc
	img.src = pic
	a.appendChild(img)
	act.appendChild(a)
	return act
}

function servicios(){
	document.getElementById("contenido").innerHTML = "Servicios"
}

function sobre_mi(){
	document.getElementById("contenido").innerHTML = "Sobre mi"
}
function contacto(){
	document.getElementById("contenido").innerHTML = "Contacto"
}

function menu() {
	var r = document.getElementById("menu")
	var b = document.getElementById("btn-menu")
	if ( r.style.display === "none"){
		r.style.display = "block";
		b.innerHTML = "x";
	}else{
		r.style.display = "none";
		b.innerHTML = "+";
	}
}
