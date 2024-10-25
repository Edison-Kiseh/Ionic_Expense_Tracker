import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonRouterOutlet } from '@ionic/angular/standalone';
import { PieChartComponent } from "../pie-chart/pie-chart.component";
import { ColourPickerComponent } from '../colour-picker/colour-picker.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExpenseModel } from 'src/models/expense.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonContent, PieChartComponent, ColourPickerComponent, CommonModule, FormsModule],
})
export class HomePage {
  showColorPicker: boolean = false;
  buttonText: string = 'Show color picker';
  expenseList: ExpenseModel[] = [];

  constructor() {}

  toggleColorPicker(): void{
    this.showColorPicker = !this.showColorPicker;

    if(this.showColorPicker) {
      this.buttonText = 'Hide color picker';
    }
    else{
      this.buttonText = 'Show color picker';
    }
  }

  updateExpenseList(): void {
    
  }
}
