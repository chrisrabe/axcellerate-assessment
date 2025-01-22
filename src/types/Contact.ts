export interface Contact {
  name: string;
  email: string;
  avatarUrl: string;
  status: ContactStatus;
}

export enum ContactStatus {
  Attended = "ATTENDED",
  Absent = "ABSENT",
}
