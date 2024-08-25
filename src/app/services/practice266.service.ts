import { Injectable } from '@angular/core';
import { practices266 } from '../dumps/practice266.dump';

@Injectable({
    providedIn: 'root'
})
export class Practice266Service {

    constructor() { }

    getPractices(startIndex: number, endIndex: number) {
        return practices266.slice(startIndex, endIndex);
    }

    getAllPractice() {
        return practices266;
    }

    getStartEndIndex(id: number, total: number = 10, numOnPage: number = 20): { startIndex: number, endIndex: number } {
        let startIndex = (id - 1) * numOnPage;
        let endIndex = (id - 1) * numOnPage + numOnPage;

        if (id <= 0) {
            startIndex = numOnPage * total;
            endIndex = -1;
        }

        return { startIndex, endIndex };
    }
}
