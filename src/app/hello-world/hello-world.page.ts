import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.page.html',
  styleUrls: ['./hello-world.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HelloWorldPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
