class ClientRecord {

    constructor(obj) {
        this.name = obj.name;
        this.mail = obj.mail;
        this.nextContactAt = obj.nextContactAt;
        this.notes = obj.notes;

    }
}

module.exports = {
     ClientRecord,
}