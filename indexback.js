var fs = require('fs');

var filePath = './datos.json';

function open() {
	// Existe el archivo?
	if (fs.existsSync(filePath)) {
		// Lee el contenido del archivo
		var fileContent = fs.readFileSync(filePath, 'utf-8');

		// convirte el contenido del archivo
		// en un objeto json
		return JSON.parse(fileContent);;
	}

	// te devuelve un nuevo Array para
	// luego ser guardado
	return [];
}

function save(datos){
	fs.writeFileSync(filePath, JSON.stringify(datos, null, 2));
}

function addItem(datos, item){
	datos.push(item);
	save(datos);
}



var db = open();

// agregar un item
//

addItem(db, "ivan",);
// for (var i=0;i<10;i++) {



save(db);

console.log(db);
