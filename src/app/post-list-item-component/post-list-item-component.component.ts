import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
  
  @Input() Posts: [];
  @Input() PostLoveIts: number;

  green: string = 'list-group-item-success'
  red: string = 'list-group-item-success'
 
  constructor() { }

  ngOnInit() {
  }

  onLove(){
    this.PostLoveIts ++;
    
    return this.PostLoveIts;
  }

  onDontLove(){
      this.PostLoveIts --;

    return this.PostLoveIts;
  }
}
