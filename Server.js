class Server{
    constructor(htmlFileName){
        this.htmlFile = htmlFileName;
    }

    init(){
        const html = HtmlService.createTemplateFromFile(this.fileName).evaluate();
        html.setWidth(1200).setHight(600);
        SpreadsheetApp.getUi().showModalDialog(html, "Registro de Voluntarios");
    }
}