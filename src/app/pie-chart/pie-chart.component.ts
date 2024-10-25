import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPickerService } from '../color-picker.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  imports: [FormsModule, CommonModule],
  standalone: true,
})
export class PieChartComponent  implements AfterViewInit {

  @ViewChild('canvas', {static: false}) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  inputNum!: string;
  sum: number = 0;
  values = [10, 20, 30, 40]; 
  colors = ["green", "red", "yellow", "blue"]; 
  startAngle: number = 0;
  radius = 150;
  x: number = 0;
  y: number = 0;

  constructor(private colorService: ColorPickerService) { }

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    // this.ctx.fillStyle = 'yellow';
    // this.ctx.fillRect(10, 50, 50, 20);
    // this.ctx.fillStyle = 'grey';
    // this.ctx.fillRect(5, 50, 50, 20);

    // Circle position and radius
    this.x = this.canvasRef.nativeElement.width / 2;
    this.y = this.canvasRef.nativeElement.height / 2;

    // Functions
    // this.drawCircle();
    this.calculateSum();
    this.setPiechartSlices();
  }

  changeBar() {
   if(this.inputNum) {
    const number = parseInt(this.inputNum);

    this.ctx.fillStyle = 'yellow';
    this.ctx.fillRect(10, 50, 50, 20);
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(number, 50, 50, 20);
   }
  }

  print() {
    console.log("Hello world");
  }

  ionViewDidEnter() {
    this.print();
  }

  drawCircle() {
    this.ctx.beginPath();
    this.ctx.arc(170, 70, 60, 0, 2*Math.PI);
    this.ctx.fillStyle = 'grey';
    this.ctx.fill()
    this.ctx.stroke()
  }

  calculateSum(): void{
    // Resetting the value of the sum
    this.sum = 0;
    
    this.values.forEach(val => {
      this.sum += val;
    });

    console.log(this.sum);
  }

  setPiechartSlices(): void{
    this.values.forEach((val, index) => {
      const sliceAngle = (val / this.sum) * 2 * Math.PI;

      //Drawing the slice
      this.ctx.beginPath();
      this.ctx.moveTo(this.x, this.y); // Move to the center
      this.ctx.arc(this.x, this.y, this.radius, this.startAngle, this.startAngle + sliceAngle);
      this.ctx.closePath();
  
      // Fill the slice with a color
      this.ctx.fillStyle = this.colors[index % this.colors.length];
      this.ctx.fill();
  
      // Update the start angle for the next slice
      this.startAngle += sliceAngle;
    });
  }

  addPiechartSlice(){
    if(parseInt(this.inputNum)){
      const newColor = this.colorService.getColour();
      this.colorService.selectedColour = 'FFFFFF'
      //adding the value to the values array
      this.values.push(parseInt(this.inputNum));
      //adding the selected color to the colors array
      this.colors.push(newColor);
      // Recalculate the sum of the values
      this.calculateSum();
      // Then update the slices once more
      this.setPiechartSlices();
      console.log("Value added");
    }
    else{
      console.log("Incorrect value type: A number is expected not a string!");
    }
  }

  generateRandomColor(): string{
    const color = ''

    return color;
  }
}
