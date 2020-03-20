import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Realtors } from '../model/realtors';
import { Observable } from 'rxjs';
import { Message } from '../model/message';
import { map, tap } from 'rxjs/operators';

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
            tap(console.log)
        );
    }

    public getRealtor(realtorId: string): Observable<Realtors> {
        return this.http.get<Realtors>(`${this.apiUrl}/realtors/${realtorId}`);
    }

    public getAllMessagesFromRealtor(realtorId: string): Observable<Message[]> {
        return this.http.get<Message[]>(`${this.apiUrl}/realtors/${realtorId}/messages`);
    }

    public getMessageFromRealtor(realtorId: string, messageId: string): Observable<Message> {
        return this.http.get<Message>(`${this.apiUrl}/realtors/${realtorId}/messages/${messageId}`);
    }

    public updateMessageFromRealtor(realtorId: string, messageId: string, body: Partial<Message>): Observable<Message> {
        return this.http.patch<Message>(`${this.apiUrl}/realtors/${realtorId}/messages/${messageId}`, body);
    }
}
