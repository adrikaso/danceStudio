export interface Class {
  name: string;
  schedule: {
    dayOfWeek: number; 
    startTime: string; 
    endTime: string;   
  };
  teacher: any; 
  tier: any;
  description: string;
  active: boolean;
}
