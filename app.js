const SERVER = new Server();

function onOpen(){
    SpreadSheetApp.getUi().createMenu("CRUD").addItem("Abrir CRUD", "start").addToUi();
}

function start(){
    server.init();
}

// Event Listeners
function inputEventHandler(e){
    if (e.target.matches("#searchInput")) search(false);
}

function clickEventHandler(e) {
    if (e.target.matches(".delete-button")) deleteCustomer(e);
    if (e.target.matches(".before-delete-button")) displayConfirmationDelete(e);
    if (e.target.matches(".edit-button")) {
        loadEditCustomerView(e);
        loadInfoFromSheet();
    }
    if (e.target.matches("#save-changes")) editCustomer();
    if (e.target.matches("#cancel-changes")) loadSearchView();
    if (e.target.matches("#add-customer-button")) addCustomer();
    if (e.target.matches(".export-button")) getData(e);
    if (e.target.matches("#filter")) {
        filterButton();
        search(true);
    }
    if (e.target.matches("#clear")){
        clearSearch();
        filterButton();
    }
    if (e.target.matches("#export-all")) exportAll();
    if (e.target.matches("#enviar-button")) openSendFields();
    if (e.target.matches(".cancel-send")) cancelSend();
    if (e.target.matches(".after-enviar")) sendFiniquito();
    function navClickEventHandler(e) {
        if (e.target.matches(".nav-link")) activeTabChange(e);
    }
    
    document.getElementById("buscar-link").addEventListener("click", loadSearchview);
    document.getElementById("buscar-link").addEventListener("click", setDataForSearch);
    document.getElementById("añadir-link").addEventListener ("click", loadAddCustomerView);
    document.getElementById("añadir-link").addEventListener("click", executeFilling);
    document.getElementById("app").addEventListener("input", inputEventHandler);
    document.getElementById("app").addEventListener("click", clickEventHandler);
    document.getElementById("navigation").addEventListener("click", navClickEventHandler);
    document.addEventListener("DOMContentLoaded", setDataForSearch);
    document.addEventListener("DOMContentLoaded", loadInfoFromSheet);
    document.addEventListener("DOMContentLoaded", loadSearchView);
}