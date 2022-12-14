/**
 * Para usar fetch
 * https://eldevsin.site/fetch-api-la-guia-completa-y-olvidarse-de-axios/
 * Funciones flecha
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function
*/
async function getPage(page) {
	var CreateUrl = location.origin + location.pathname;
	var get = await fetch(CreateUrl + page)
	var tipo = await get.text();
	document.querySelector("main").innerHTML = tipo
}

window.onload = async () => {
	console.log(await getPage('home.html'));
}

/**
 * Navegacion
*/
const enlaces = [].slice.call(document.querySelectorAll(".navbar ul li a"));
enlaces.map( enlace => {
	enlace.addEventListener('click', async evento => {
		enlaces.map( enlace => enlace.classList.remove('active'))
		evento.preventDefault()
		
		let nombre = (enlace.dataset.pagina === 'index.html') ? 'home.html' : enlace.dataset.pagina;

		enlace.classList.add('active')
		await getPage(nombre);
	})
})