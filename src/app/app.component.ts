import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  onMediaItemDelete(){


  }

  firstMediaItem = {
    id: 1,
    name: "Thor",
    medium: "Movie",
    category: "Action",
    year: 2016,
    watchedOn: 2052017,
    isFavorite: false
  };
    
}
