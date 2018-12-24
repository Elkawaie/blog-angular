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
    this.PostLoveIts = this.PostLoveIts + 1;
    
    return this.PostLoveIts;
  }

  onDontLove(){
    if(this.PostLoveIts >= 1){

      this.PostLoveIts = this.PostLoveIts - 1;
    }else{
      alert("Vous ne pouvez pas dislike plus");
    }
    
    return this.PostLoveIts;
  }
}
