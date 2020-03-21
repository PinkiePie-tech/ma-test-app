import { Contact } from './contact';

export enum TypeMail {
    sms = 'sms',
    email = 'email',
    phone = 'phone'
}

export interface Message {
    id: number;
    body: string;
    contact: Contact;
    date: Date;
    read: boolean;
    subject: string;
    type: TypeMail;
    sendBy?: string;
}

export class Message {
    private days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    private MS_PER_DAY = 1000 * 60 * 60 * 24;

    constructor(data: Message) {
        // Permet de transformer une interface en class pour en utiliser les méthodes
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                switch (key) {
                    case 'date':
                        this[key] = new Date(data[key]);
                        break;
                    default:
                        this[key] = data[key];
                        break;
                }
            }
        }
        this.sendBy = this.getTitle();
    }

    public getDateReadable() {
        if (this.date) {
            const now = new Date();
            const utc1 = Date.UTC(now.getFullYear(), now.getMonth() + 1, now.getDate());
            const utc2 = Date.UTC(this.date.getFullYear(), this.date.getMonth() + 1, this.date.getDate());
            const diffTime = utc1 - utc2;
            const diffDays = Math.floor(diffTime / this.MS_PER_DAY);
            if ( diffDays < 1) {
                return `${this.date.getHours()}:${(this.date.getMinutes() > 9 ? '' : '0') + this.date.getMinutes()}`;
            } else if (diffDays === 1) {
                return 'Hier';
            } else if (diffDays < 7) {
                return this.days[this.date.getDay()];
            } else {
                return `${this.date.getDate()}/${this.date.getMonth() + 1}/${this.date.getUTCFullYear()}`;
            }
        } else {
            return '???';
        }
    }

    private getTitle() {
        if (this.contact?.firstname || this.contact?.lastname) {
            return `${this.contact.firstname} ${this.contact.lastname.toUpperCase()}`.trim();
        } else if (this.contact?.email) {
            return this.contact.email;
        } else {
            return undefined;
        }
    }

}

