import { Component } from '@angular/core';

export interface Post {
  title: string,
  text: string,
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'Хочу выучить Angular компоненты.', text: 'Я все еще учу компоненты.', id: 1},
    {title: 'Задание на завтра', text: 'Завтра надо будет написать еще больше кода.', id: 2}
  ]
}
