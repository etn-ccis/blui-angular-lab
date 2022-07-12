import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SampleService {
    testFunction(): void {
        /* eslint-disable-next-line */
        console.info('Sample function call');
    }
}
