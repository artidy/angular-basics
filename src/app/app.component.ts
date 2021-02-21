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
    {title: 'Аляска', text: 'Самое лучшее пиво в мире'},
    {title: 'Холупень', text: 'Самый лучший хлеб в мире'},
    {title: 'JavaScript', text: 'Самый лучший язык программирования в мире'}
  ]
  search = ''

  addPost() {
    this.posts.unshift({
      title: 'Today day',
      text: 'Today day is perfect'
    })
  }
  
}
