import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  add(arg0: { severity: string; detail: string; }) {
    throw new Error('Method not implemented.');
  }

  constructor(private angularFireMessaging:AngularFireMessaging) { }
}
