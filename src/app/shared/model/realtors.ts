import { Message } from './message';

export interface Realtors {
    id: number;
    logo: string;
    name: string;
    unread_messages: string;
    message?: Message[];
}
