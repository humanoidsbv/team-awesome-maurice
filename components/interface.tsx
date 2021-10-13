export interface TimeEntryInterface {
  activity?: string;
  client?: string;
  date?: number;
  employer?: string;
  endTime?: string;
  id?: number;
  startTime?: string;
  timeFrom?: number;
  timeTo?: number;
}

export interface TeamMemberInterface {
  currentEmployer?: string;
  employeeNumber?: string;
  firstName?: string;
  id?: number;
  lastName?: string;
  role?: string;
  startingDate?: string;
}