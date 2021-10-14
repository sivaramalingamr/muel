import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-drop-element',
  templateUrl: './drop-element.component.html',
  styleUrls: ['./drop-element.component.scss']
})
export class DropElementComponent implements OnInit, AfterViewInit {
  @ViewChildren('slideElement')
  slideElement!: QueryList<ElementRef>;
  rightElement = [
    {key:"Label1", value: "Label1", required: true},
    {key:"Label2", value: "Label2", required: true},
    {key:"Label3", value: "Label3", required: true},
    {key:"Label4", value: "Label4", required: true},
    {key:"Label5", value: "Label5", required: true},
  ]
  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(){
    console.log(this.slideElement)
  }
  allowDrop(ev:any) {
    ev.preventDefault();
  }
  showOrHide(event:any, id:string):void{
    this.slideElement.forEach(d=>{
      if(d.nativeElement.id === id){
        if(d.nativeElement.classList.contains('showElement')){
          d.nativeElement.classList.remove('showElement');
        } else {          
          d.nativeElement.classList.add('showElement');
        }
      }
    })
  }
  drop(ev:any) {
    ev.preventDefault();
    let data:any = ev.dataTransfer.getData("text");
    const clonedData = document.getElementById(data)?.cloneNode(true)
    ev.target.appendChild(document.getElementById(data)?.cloneNode(true));
  }
}
