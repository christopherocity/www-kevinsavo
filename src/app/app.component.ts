import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  one = `I'm so sorry for not crediting you guys on your video!!`;
  two = `I bet your eyes looked like this when you saw it`;
  three = `Here's a website for you where we can do cool things like this below`;
  four = `If you have a design ill implement it!`;

  spongebobText(str: string): string {
    let newStr = '';
    str.split('').forEach((el, idx) => {
      newStr += idx % 2 === 0 ? el.toLowerCase() : el.toUpperCase();
    });
    return newStr;
  }
}
