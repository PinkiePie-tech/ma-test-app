import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Realtors } from '../model/realtors';
import { Observable, of } from 'rxjs';
import { Message } from '../model/message';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class RealtorService {
    private apiUrl;
    constructor(private http: HttpClient) {
        this.apiUrl = environment.maBackend;
    }

    public getAllRealtors(): Observable<Realtors[]> {
        return this.http.get<Realtors[]>(`${this.apiUrl}/realtors`).pipe(
            map(response => {
                const realtors = [];
                for (const key in response) {
                    if (response.hasOwnProperty(key)) {
                        realtors.push(response[key]);
                    }
                }
                return realtors;
            }),
            catchError(error => {
                console.error(error);
                return of([]);
            })
        );
    }

    public getRealtor(realtorId: string): Observable<Realtors> {
        return this.http.get<Realtors>(`${this.apiUrl}/realtors/${realtorId}`).pipe(
            catchError(error => {
                console.error(error);
                return of(undefined);
            })
        );
    }

    public getAllMessagesFromRealtor(realtorId: string): Observable<Message[]> {
        return this.http.get<Message[]>(`${this.apiUrl}/realtors/${realtorId}/messages`).pipe(
            map(messages => messages.map(message => new Message(message))),
            catchError(error => {
                console.error(error);
                return of([]);
            })
        );
    }

    public getMessageFromRealtor(realtorId: string, messageId: number): Observable<Message> {
        return this.http.get<Message>(`${this.apiUrl}/realtors/${realtorId}/messages/${messageId}`).pipe(
            map(message => new Message(message)),
            catchError(error => {
                console.error(error);
                return of(undefined);
            })
        );
    }

    public updateMessageFromRealtor(realtorId: string, messageId: number, body: Partial<Message>): Observable<Message> {
        return this.http.patch<Message>(`${this.apiUrl}/realtors/${realtorId}/messages/${messageId}`, body).pipe(
            catchError(error => {
                console.error(error);
                return of(undefined);
            })
        );
    }
}
