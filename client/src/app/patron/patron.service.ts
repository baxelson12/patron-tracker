import { Injectable } from '@angular/core';

const NAME_KEY = 'patron-name';
const PHONE_KEY = 'patron-phone';

@Injectable({
  providedIn: 'root'
})
export class PatronService {
  constructor() { }

  getData() {
    return {
      name: this.getName(),
      phone: this.getPhone()
    }
  }

  storeData(patron: {name: string, phone: string}) {
    this.storeName(patron.name);
    this.storePhone(patron.phone);
  }

  storeName(name: string) {
    window.localStorage.removeItem(NAME_KEY);
    window.localStorage.setItem(NAME_KEY, JSON.stringify(name));
  }

  storePhone(phone: string) {
    window.localStorage.removeItem(PHONE_KEY);
    window.localStorage.setItem(PHONE_KEY, JSON.stringify(phone));
  }

  getName(): string { return JSON.parse(localStorage.getItem(NAME_KEY)) }
  getPhone(): string { return JSON.parse(localStorage.getItem(PHONE_KEY)) }
}
