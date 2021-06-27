class DB {
    #ssId
    #sheet
    constructor(_sheetId, _ssId) {
        this.#ssId = _ssId;
        try {
            this.#sheet = SpreadSheetApp.openById(_sheetId).getSheets().filter();
        } catch (e) {
            // poner mensaje de error en vista
        }
    }
}
