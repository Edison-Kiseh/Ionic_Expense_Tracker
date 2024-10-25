import { Component, OnInit } from '@angular/core';
import { IonCol, IonTitle, IonHeader, IonToolbar, IonGrid, IonRow } from "@ionic/angular/standalone";
import { ColorPickerService } from '../color-picker.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-colour-picker',
  templateUrl: './colour-picker.component.html',
  styleUrls: ['./colour-picker.component.scss'],
  imports: [IonCol, IonGrid, IonRow, FormsModule, CommonModule],
  standalone: true,
})
export class ColourPickerComponent  implements OnInit {
  defaultColor: string = '#FFFFFF'; // Default color

  constructor(private colorService: ColorPickerService) { }

  ngOnInit() {}

  setColor(color: string) {
    if(color){
      this.colorService.setColour(color);
      console.log('Selected color:', color);
    }
    else{
      this.colorService.setColour(this.defaultColor);
      console.log('Selected color:', this.defaultColor);
    }
  }

}
