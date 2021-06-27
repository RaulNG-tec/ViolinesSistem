class Volunteer{
    constructor(_id){
        this.id = _id;

        this.registerTimeStamp = "";
        this.ingressType = "";
        this.region = "";
        this.period = "";
        this.name = "";
        this.institutionalEmail = "";
        this.personalEmail = "";
        this.whatsApp = "";
        this.career = "";
        this.campus = "";
        this.department = "";
        this.project = "";
        this.talent = "";
        this.hours = "";
        this.CAG = "";
        this.folder = "";
    }

    show(){
        return [this.id, this.name, this.region, this.department, this.period, this.project, this.campus];
    }
}

