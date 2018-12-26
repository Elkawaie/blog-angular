import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-angular';
  
  posts = [
    {
      title: 'Mon premier Article',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet ipsum magna Praesent varius luctus lacus aliquet vulputate. Suspendisse auctor lorem nisl, id iaculis ipsum feugiat non. Aliquam et nunc luctus, laoreet urna ac, imperdiet mauris. Maecenas non sapien est.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet ipsum magna Praesent varius luctus lacus aliquet vulputate. Suspendisse auctor lorem nisl,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet ipsum magna Praesent varius luctus lacus aliquet vulputate. Suspendisse auctor lorem nisl,',
      loveIts: 8,
      created_at: new Date()
      
     
    },
    {
      title: 'Mon Deuxieme Article',
      content: 'Maecenas tincidunt finibus libero, fermentum venenatis augue malesuada et. Maecenas id tincidunt erat. Praesent sagittis id lacus et tincidunt. Aenean sodales arcu a egestas pellentesque. Nam in ligula placerat, faucibus augue vel, laoreet nunc. Donec dolor nisi, auctor dictum cursus consequat, bibendum at ante. ',
      loveIts: 0,
      created_at:new Date()
          
    },
    {
      title: 'Mon troisiéme Article',
      content: 'Quisque tempus, tortor nec euismod egestas, arcu mi luctus nunc, vehicula vulputate massa libero ut nisi.',
      loveIts: 0,
      created_at:new Date()
           
    }
  ];
}
