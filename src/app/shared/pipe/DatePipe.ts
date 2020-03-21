import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'maDate' })
export class DatePipe implements PipeTransform {
    // tslint:disable-next-line: max-line-length
    private month = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

    transform(date: Date): string {
        return `${date.getDate()} ${this.month[date.getMonth()]} ${date.getFullYear()} à ${date.getHours()}:${date.getMinutes()}`;
    }
}
