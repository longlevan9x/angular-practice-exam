import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    constructor() { }

    get randomNumber() {
        return Math.floor(Math.random() * 1000);
    }

    protected _genRandomNum(maxNum: number) {
        let num = this.randomNumber;

        while (num > maxNum) {
            num = this.randomNumber;
        }

        return num;
    }

    protected _genRandomNumUnique(maxNum: number, uniqueArr: number[]) {
        let num = this.randomNumber;

        while (num > maxNum || uniqueArr.includes(num)) {
            num = this.randomNumber;
        }

        return num;
    }

    genRandomNums(toPick: number, maxNum: number) {
        let ranNums: number[] = [];

        for (let i = 0; i < toPick; i++) {
            ranNums.push(this._genRandomNumUnique(maxNum, ranNums));
        }

        return ranNums;
    }
}
