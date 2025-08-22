import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../services/class.service';
import { CommonModule } from '@angular/common';
import { Class } from '../../interfaces/class.interface';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './classes.html',
  styleUrl: './classes.css'
})
export class Classes implements OnInit {
  classes: Class[] = [];

  hours: string[] = ['14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'];
  days: number[] = [1, 2, 3, 4, 5]; // lunes a viernes

  constructor(private classService: ClassService) { }

  ngOnInit(): void {
    this.classService.getAll().subscribe({
      next: (data) => {
        this.classes = data;
      },
      error: (error) => {
        console.log('Error al cargar clases', error);
      }
    });
  }

  getClassesStartingAt(day: number, hour: string): Class[] {
    const currentMinutes = this.timeToMinutes(hour);

    return this.classes.filter(c => {
      const start = this.timeToMinutes(c.schedule.startTime);
      return (
        c.schedule.dayOfWeek === day &&
        start === currentMinutes
      );
    });
  }

  getClassDurationInRows(clase: Class): number {
    const start = this.timeToMinutes(clase.schedule.startTime);
    const end = this.timeToMinutes(clase.schedule.endTime);
    const durationMinutes = end - start;
    return Math.ceil(durationMinutes / 60);
  }

  isCellOccupied(day: number, hour: string): boolean {
    const currentMinutes = this.timeToMinutes(hour);

    return this.classes.some(c => {
      const start = this.timeToMinutes(c.schedule.startTime);
      const end = this.timeToMinutes(c.schedule.endTime);
      const duration = end - start;

      return (
        c.schedule.dayOfWeek === day &&
        currentMinutes > start &&
        currentMinutes < end
      );
    });
  }

  private timeToMinutes(time: string): number {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
  }


}
