import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }
  saveObject(key: string, obj: any): void {
    const jsonString = JSON.stringify(obj);
    localStorage.setItem(key, jsonString);
  }

  getObject(key: string): any {
    const jsonString = localStorage.getItem(key) as string;
    return JSON.parse(jsonString);
  }

  removeObject(key: string): void {
    localStorage.removeItem(key);
  }
}
