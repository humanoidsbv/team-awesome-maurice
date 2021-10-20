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
  address?: string;
  bio?: string;
  currentEmployer?: string;
  email?: string;
  employeeNumber?: string;
  firstName?: string;
  id?: number;
  lastName?: string;
  locality?: string;
  role?: string;
  startingDate?: string;
  postalCode?: string;
}

export interface ClientInterface {
  id?: number;
  name?: string;
}
