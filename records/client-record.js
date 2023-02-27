class ClientRecord {

    constructor(obj) {
        const {id,name,mail,nextContactAt,notes} = obj;

        if(!id || typeof id !== 'string' ) {
            throw new Error('ID cannot be empty text.');
        }

        if(!name || typeof name !== 'string' || name.length < 3 ) {
            throw new Error('The name must be a text of min. 3 characters!');
        }

        if(!mail || typeof mail !== 'string' || mail.indexOf('@') === -1 ) {
            throw new Error('Mail is incorrect!');
        }
        if (typeof nextContactAt !== 'string') {
            throw new Error('Contact details must be text!')
        }
        if (typeof notes !== 'string') {
            throw new Error('Notes must be text!')
        }

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