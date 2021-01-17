import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  public name : string;
  public username : string;
  public avatar : string;

  @Output() subscribed = new EventEmitter<boolean>();

  constructor(private articlesS : ArticlesService) { }

  ngOnInit()  {
    this.name = 'Erick';
    this.username = 'Erick_juarez';
    this.avatar = 'https://i.pinimg.com/236x/f5/fc/17/f5fc17710471f1658abf5284ff01c0ed.jpg';
  
    setTimeout(()=> this.subscribed.emit(true), 3000)
    setTimeout(()=> this.name = 'Vidal', 3000)
    
    //this.articlesS.articlesCount = 30;
  
  }
  changing(event : any){
    this.username = event.target.value;
    
  }

}
