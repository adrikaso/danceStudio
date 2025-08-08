export interface Class {
  name: string;
  schedule: {
    dayOfWeek: number; // 1 = Lunes
    startTime: string; // ej. '14:30'
    endTime: string;   // ej. '16:00'
  };
  teacher: any; // en el futuro podés tiparlo mejor
  tier: any;
  description: string;
  active: boolean;
}
