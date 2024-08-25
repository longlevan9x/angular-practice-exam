import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    constructor() { }

    setItem(key: string, value: any): void {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('Error saving to localStorage', e);
        }
    }

    getItem<T>(key: string): T | null {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) as T : null;
        } catch (e) {
            console.error('Error getting data from localStorage', e);
            return null;
        }
    }

    removeItem(key: string): void {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.error('Error removing item from localStorage', e);
        }
    }

    clear(): void {
        try {
            localStorage.clear();
        } catch (e) {
            console.error('Error clearing localStorage', e);
        }
    }
}
