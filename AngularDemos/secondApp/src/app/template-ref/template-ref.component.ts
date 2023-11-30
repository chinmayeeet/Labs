import { Component } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.css']
})
export class TemplateRefComponent {



changecol(_t4: any) {
if(_t4.value =='')
 {
  _t4.style="background-color:chartreuse";
 }
 else _t4.style="background-color:pink";
}
dontDisturb(_t2: any) {
_t2.style="background-color:grey";
}
switchOff(_t2: any) {
_t2.style="background-color:black";
}
lightUp(_t2: any) {
_t2.style="background-color:yellow";
}

}
