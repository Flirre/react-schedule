export interface EventData {
  id: number;
  activity: string;
  startDate: string;
  endDate: string;
  location: string;
}

export interface EventEntity {
  id: number;
  startHour: number;
  endHour: number;
  duration: number;
  activity: string;
  location: string;
}
