class Server{
    #db
    #view
    constructor(htmlFileName){
        this.htmlFile = htmlFileName;
        this.#db = new DB();
        this.#view = new View();
    }

    init(){
        const html = HtmlService.createTemplateFromFile(this.fileName).evaluate();
        html.setWidth(1200).setHight(600);
        SpreadsheetApp.getUi().showModalDialog(html, "Registro de Voluntarios");
    }

    ad

    sendEmail(){

    }


}