import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonRouterOutlet } from '@ionic/angular/standalone';
import { PieChartComponent } from "../pie-chart/pie-chart.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonContent,  PieChartComponent],
})
export class HomePage {
  constructor() {}
}
