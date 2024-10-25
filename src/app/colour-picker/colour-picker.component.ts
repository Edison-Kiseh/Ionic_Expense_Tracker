import { Component, OnInit } from '@angular/core';
import { IonCol, IonTitle, IonHeader, IonToolbar, IonGrid, IonRow } from "@ionic/angular/standalone";

@Component({
  selector: 'app-colour-picker',
  templateUrl: './colour-picker.component.html',
  styleUrls: ['./colour-picker.component.scss'],
  imports: [IonCol, IonGrid, IonRow],
  standalone: true,
})
export class ColourPickerComponent  implements OnInit {
  selectedColor: string = '#FFFFFF'; // Default color

  constructor() { }

  ngOnInit() {}

  setColor(color: string) {
    this.selectedColor = color;
    console.log('Selected color:', this.selectedColor);
  }

}
