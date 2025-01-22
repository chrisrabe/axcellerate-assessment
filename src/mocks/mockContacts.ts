import { type Contact, ContactStatus } from "../types/Contact";

export const attendedContacts: Contact[] = [
  {
    name: "Dianne Russel",
    avatarUrl: "/users/user-10.png",
    email: "dianne@hotmail.com",
    status: ContactStatus.Attended,
  },
  {
    name: "Ronald Richards",
    avatarUrl: "/users/user-8.png",
    email: "ronald@hotmail.com",
    status: ContactStatus.Attended,
  },
  {
    name: "Arlene McCoy",
    avatarUrl: "/users/user-1.png",
    email: "arlene@hotmail.com",
    status: ContactStatus.Attended,
  },
  {
    name: "Savannah Nguyen",
    avatarUrl: "/users/user-6.png",
    email: "savannah@hotmail.com",
    status: ContactStatus.Attended,
  },
  {
    name: "Albert Flores",
    avatarUrl: "/users/user-4.png",
    email: "albert@hotmail.com",
    status: ContactStatus.Attended,
  },
];

export const absentContacts: Contact[] = [
  {
    name: "Jenny Wilson",
    avatarUrl: "/users/user-7.png",
    email: "jenny@hotmail.com",
    status: ContactStatus.Absent,
  },
  {
    name: "Wade Warren",
    avatarUrl: "/users/user-9.png",
    email: "wade@hotmail.com",
    status: ContactStatus.Absent,
  },
  {
    name: "Bessie Cooper",
    avatarUrl: "/users/user-3.png",
    email: "bessie@hotmail.com",
    status: ContactStatus.Absent,
  },
  {
    name: "Ralph Edwards",
    avatarUrl: "/users/user-2.png",
    email: "ralph@hotmail.com",
    status: ContactStatus.Absent,
  },
];

export const allContacts = attendedContacts.concat(absentContacts);
