import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {

  @Input() mediaitem;
  @Output() delete=new EventEmitter();
name="My name anil"



  constructor() { }

  ngOnInit() {

    return true;
  }

  onDelete()
  {
    console.log("deleted event");
    this.delete.emit(this.mediaitem);
  }

}
