import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  veg=[
    {name:'Potato',image:'./assets/patota.jpg'},
    {name:'Capsicum',image:'./assets/capsicum.jpg'},
    {name:'Onion',image:'./assets/onion.jpg'},
    {name:'Cucumber',image:'./assets/cucumber.jpg'}
  ];
  fruits=[
    {name:'Apple',image:'./assets/apple.jpg'},
    {name:'Watermelon',image:'./assets/watermelon.jpg'},
    {name:'Tomato',image:'./assets/tomato.jpg'}
  ];
  title = 'List of Vegetables and Fruits';
  showMe = true;
  image = 'img1';
  table = 'table';
  index = 'index';
  col = 'column';

  onToggle(): void {
     this.showMe = !this.showMe; 
  } 
}
