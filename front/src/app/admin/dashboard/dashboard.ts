import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ClassService } from '@services/class.service';
import { TeacherService } from '@services/teacher.service';
import { TierService } from '@services/tier.service';
import { Class } from '../../interfaces/class.interface';
import { Teacher } from '../../interfaces/teacher.interface';
import { Tier } from '../../interfaces/tier.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./dashboard.css']
})

export class DashboardComponent implements OnInit {
  activeSection: string = 'teachers';
  teachers: Teacher[] = [];
  classes: Class[] = [];
  tiers: Tier[] = [];
  filteredTeachers: Teacher[] = [];
  filteredClasses: Class[] = [];
  searchTerm: string = '';

  // Modal states
  showTeacherModal: boolean = false;
  showClassModal: boolean = false;
  isEditing: boolean = false;

  // Forms
  teacherForm: Partial<Teacher> = { _id: '', name: '', lastName: '', description: '' };
  classForm: any = {
    _id: '',
    name: '',
    schedule: { dayOfWeek: 1, startTime: '', endTime: '' },
    teacher: '',
    tier: '',
    description: '',
    active: true
  };



  dayNames: { [key: number]: string } = {
    1: 'Lunes', 2: 'Martes', 3: 'Miércoles', 4: 'Jueves',
    5: 'Viernes', 6: 'Sábado', 7: 'Domingo'
  };

  constructor(
    private classService: ClassService,
    private teacherService: TeacherService,
    private tierService: TierService
  ) { }

  ngOnInit(): void {
    this.loadTeachers();
    this.loadClasses();
    this.loadTiers();
  }

  // profesores

  loadTeachers(): void {
    this.teacherService.getAll().subscribe({
      next: (data) => {
        this.teachers = data;
        this.filterData();
      },
      error: (error) => console.error('Error loading teachers:', error)
    });
  }

  saveTeacher(): void {
    if (this.isEditing && this.teacherForm._id) {
      // EDITAR
      this.teacherService.update(this.teacherForm._id, this.teacherForm).subscribe(() => {
        this.loadTeachers();
        this.closeTeacherModal();
      });
    } else {
      // CREAR → no mandes el _id
      const { _id, ...teacherData } = this.teacherForm;
      this.teacherService.create(teacherData).subscribe(() => {
        this.loadTeachers();
        this.closeTeacherModal();
      });
    }
  }




  deleteTeacher(id: string): void {
    if (confirm('seguro de eliminar el profe?')) {
      this.teacherService.delete(id).subscribe(() => this.loadTeachers());
    }
  }

  loadClasses(): void {
    this.classService.getAll().subscribe({
      next: (data) => {
        this.classes = data;
        this.filterData();
      },
      error: (error) => console.error('Error loading classes:', error)
    });
  }

  saveClass(): void {
    const classData = {
      name: this.classForm.name,
      schedule: this.classForm.schedule, // ahora siempre tiene los valores correctos
      teacher: this.classForm.teacher,
      tier: this.classForm.tier,
      description: this.classForm.description,
      active: this.classForm.active
    };

    if (this.isEditing && this.classForm._id) {
      this.classService.update(this.classForm._id, classData).subscribe(() => {
        this.loadClasses();
        this.closeClassModal();
      });
    } else {
      this.classService.create(classData).subscribe(() => {
        this.loadClasses();
        this.closeClassModal();
      });
    }
  }




  deleteClass(id: string): void {
    if (confirm('¿Seguro que deseas eliminar esta clase?')) {
      this.classService.delete(id).subscribe(() => this.loadClasses());
    }
  }

  loadTiers(): void {
    this.tierService.getAll().subscribe({
      next: (data) => {
        this.tiers = data;
        console.log('niveles cargados ' + this.tiers.map(t => t.name).join(', '));
      },
      error: (err) => console.error('Error loading tiers:', err)
    });
  }


  // 📌 Search
  setActiveSection(section: string): void {
    this.activeSection = section;
    this.searchTerm = '';
    this.filterData();
  }

  onSearchChange(): void {
    this.filterData();
  }

  filterData(): void {
    if (this.activeSection === 'teachers') {
      this.filteredTeachers = this.teachers.filter(t =>
        t.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        t.lastName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredClasses = this.classes.filter(c =>
        c.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        (c.teacher?.name?.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
        (c.teacher?.lastName?.toLowerCase().includes(this.searchTerm.toLowerCase()))
      );
    }
  }

  // 📌 Utilities
  getTeacherName(teacher: Teacher): string {
    return teacher ? `${teacher.name} ${teacher.lastName}` : 'Sin profesor';
  }

  openTeacherModal(teacher?: Teacher): void {
    this.isEditing = !!teacher;
    this.teacherForm = teacher ? { ...teacher } : { _id: '', name: '', lastName: '', description: '' };
    this.showTeacherModal = true;
  }

  openClassModal(classItem?: Class): void {
    this.isEditing = !!classItem;

    if (classItem) {
      this.classForm = {
        _id: classItem._id,
        name: classItem.name,
        schedule: classItem.schedule,
        teacher: classItem.teacher?._id || '',
        tier: classItem.tier?._id || '',
        description: classItem.description,
        active: classItem.active
      };
    } else {
      this.classForm = {
        _id: '',
        name: '',
        schedule: { dayOfWeek: 1, startTime: '', endTime: '' },
        teacher: '',
        tier: '',
        description: '',
        active: true
      };
    }

    this.showClassModal = true;
  }


  closeTeacherModal(): void {
    this.showTeacherModal = false;
    this.teacherForm = { _id: '', name: '', lastName: '', description: '' };
  }

  closeClassModal(): void {
    this.showClassModal = false;
    this.classForm = { _id: '', name: '', dayOfWeek: 1, startTime: '', endTime: '', teacher: '', description: '', active: true };
  }


  onAddEntity(): void {
    if (this.activeSection === 'teachers') {
      this.openTeacherModal();
    } else {
      this.openClassModal();
    }
  }


  trackByTeacherId(index: number, teacher: Teacher): string {
    return teacher._id || index.toString();
  }

  trackByClassId(index: number, classItem: Class): string {
    return classItem._id || index.toString();
  }
}