import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic title';
  toggle = false;
  arr = [3, 5, 8, 13]
  objs = [
    {title: 'Post 1', author: 'Andrey', comments: [
      {name: 'Max', text: 'lorem1'},
      {name: 'Natasha', text: 'lorem2'}
    ]},
    {title: 'Post 2', author: 'Andrey 2', comments: [
      {name: 'Max 2', text: 'lorem1'},
      {name: 'Natasha 2', text: 'lorem2'}
    ]}
  ]
  
}
