class ClientRecord {

    constructor(obj) {
        const {name} = obj;
        if(!name || typeof name !== 'string' || name.length < 3 ) {
            throw new Error('The name must be a text of min. 3 characters.');
        }

        if(obj.name)

        this.id = obj.id;
        this.name = obj.name;
        this.mail = obj.mail;
        this.nextContactAt = obj.nextContactAt;
        this.notes = obj.notes;

    }
}

module.exports = {
    ClientRecord,
}