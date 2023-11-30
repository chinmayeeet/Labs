import { Component } from '@angular/core';

@Component({
  selector: 'app-prohibited-words',
  templateUrl: './prohibited-words.component.html',
  styleUrls: ['./prohibited-words.component.css']
})
export class ProhibitedWordsComponent {
  blacklist: any;
  word: string ='';
}
