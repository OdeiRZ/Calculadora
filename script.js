var acu=0;
var sw=false;
var debug=true;
var operPendiente="";
function mostrar() {
	numero.value=location.search.substring(1);
}
function lupa(pantalla,pagina) {
	var ventana=window.open(pagina,"ventana","width=500,height=200");
	ventana.moveTo((screen.width-500)/2,(screen.height-200)/2);
	ventana.location.href=pagina+"?"+pantalla.value;
	ventana.focus;
}