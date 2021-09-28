export interface TimeEntryInterface {
  id?: number;
  client?: string;
  startTimestamp?: string;
  stopTimestamp?: string;
  employer?: string;
  activity?: string;
  date?: number;
  timeto?: number;
  timefrom?: number
}
