import { Component, OnInit, transition } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import {MediaItemService} from '../media-item.service';
@Component({
  selector: 'media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {

  constructor(private mediaItemService:MediaItemService ) { }

  form;

  ngOnInit() {

    this.form=new FormGroup({medium:new FormControl('Movie'),
    name:new FormControl('',Validators.compose([Validators.pattern('[\\w\\-\\s\\/]+'),Validators.required])),
    category:new FormControl(''),
    year:new FormControl('',this.yearValidator)});

    
  }

yearValidator(control){

if(control.value.trim().length===0){

return null;

}
let year=parseInt(control.value);

let minYear=1900;
let maxYear=2018;
if(year>=minYear&&year<=maxYear)
{
  return null;
}
else{
  return {'year':true}
}


}

  onSubmit(mediaItem){
    this.mediaItemService.add(mediaItem);
    }

}
