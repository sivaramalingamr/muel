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
    { key: "Label1", value: "Label1", required: true },
    { key: "Label2", value: "Label2", required: true },
    { key: "Label3", value: "Label3", required: true },
    { key: "Label4", value: "Label4", required: true },
    { key: "Label5", value: "Label5", required: true },
  ]
  droppedItems: any = [];
  items = [
    { name: "Apple", type: "fruit" },
    { name: "Carrot", type: "vegetable" },
    { name: "Orange", type: "fruit" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log(this.slideElement)
  }
  
  onItemDrop(e: any) {
    // Get the dropped data here
    this.droppedItems.push(e.dragData);
    // e.target.appendChild(e.dragData);
  }
  allowDrop(ev: any) {
    ev.preventDefault();
  }

  showOrHide(event: any, id: string): void {
    console.log(event)
    this.slideElement.forEach(d => {
      if (d.nativeElement.id === id) {
        if (d.nativeElement.classList.contains('showElement')) {
          d.nativeElement.classList.remove('showElement');
          event.target.innerHTML = 'Collapse';
        } else {
          event.target.innerHTML = 'Expand';
          d.nativeElement.classList.add('showElement');
        }
      }
    })
  }
  drop(ev: any) {
    ev.preventDefault();
    let data: any = ev.dataTransfer.getData("text");
    const clonedData = document.getElementById(data)?.cloneNode(true)
    ev.target.appendChild(document.getElementById(data)?.cloneNode(true));
  }
}
