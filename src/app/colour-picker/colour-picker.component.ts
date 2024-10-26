import { Component, OnInit } from '@angular/core';
import { IonCol, IonTitle, IonHeader, IonToolbar, IonGrid, IonRow } from "@ionic/angular/standalone";
import { ColorPickerService } from '../color-picker.service';

@Component({
  selector: 'app-colour-picker',
  templateUrl: './colour-picker.component.html',
  styleUrls: ['./colour-picker.component.scss'],
  imports: [IonCol, IonGrid, IonRow],
  standalone: true,
})
export class ColourPickerComponent  implements OnInit {
  defaultColor: string = 'grey'; // Default color

  constructor(private colorService: ColorPickerService) { }

  ngOnInit() {}

  setColor(color: string) {
    if(color){
      this.colorService.setColour(color);
      console.log('Selected color:', color);
    }
    else{
      this.colorService.setColour(this.defaultColor);
      console.log('Set default color:', this.defaultColor);
    }
  }

}
