const SERVER = new Server();

function onOpen(){
    SpreadSheetApp.getUi().createMenu("CRUD").addItem("Abrir CRUD", "start").addToUi();
}

function start(){
    server.init();
}

// Event Listeners