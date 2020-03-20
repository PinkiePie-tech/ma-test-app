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
}

export class Message {
    constructor(data: Message) {
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
    }
}

