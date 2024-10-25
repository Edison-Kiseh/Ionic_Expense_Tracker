import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.page.html',
  styleUrls: ['./color-picker.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ColorPickerPage implements OnInit {
  selectedColor: string = '#FFFFFF'; // Default color

  constructor() { }

  ngOnInit() {

  }

  setColor(color: string) {
    this.selectedColor = color;
    console.log('Selected color:', this.selectedColor);
  }

}
