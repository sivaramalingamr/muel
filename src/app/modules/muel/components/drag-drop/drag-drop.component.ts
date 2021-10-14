import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(44)
  }

  allowDrop(ev:any) {
    ev.preventDefault();
  }
  
  drag(ev:any) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  drop(ev:any) {
    ev.preventDefault();
    let data:any = ev.dataTransfer.getData("text");
    const clonedData = document.getElementById(data)?.cloneNode(true)
    ev.target.appendChild(document.getElementById(data)?.cloneNode(true));
  }
}
