import { Teacher } from "./teacher.interface";

export interface Class {
  _id: string;
  name: string;
  schedule: {
    dayOfWeek: number; 
    startTime: string; 
    endTime: string;   
  };
  teacher: any;
  tier?: any;
  description: string;
  active: boolean;
}
