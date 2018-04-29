import { Component, OnInit,Input ,Output, EventEmitter } from '@angular/core';

import { MediaItemService } from '../media-item.service';

@Component({
  selector: 'media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {

  mediaitems;

   
  constructor(private mediaItemService:MediaItemService){

  }

   

  ngOnInit() {

    this.mediaitems=this.mediaItemService.get();
  }

  onMediaItemDelete(mediaItem) { 


    this.mediaItemService.delete(mediaItem);
  }

  

}
