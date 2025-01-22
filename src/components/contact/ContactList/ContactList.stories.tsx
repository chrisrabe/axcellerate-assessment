import type { Meta, StoryObj } from "@storybook/react";

import { ContactStatus } from "../../../types/Contact";
import { default as ContactList } from "./ContactList";

const meta = {
  title: "Components/Contact/ContactList",
  component: ContactList,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof ContactList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StandardFullList: Story = {
  args: {
    variant: "standard",
    headerText: "Absent",
    contacts: [
      {
        avatarUrl: "/placeholder-avatar.jpg",
        name: "Jane Doe",
        email: "jane@hotmail.com",
        status: ContactStatus.Absent,
      },
      {
        avatarUrl: "/placeholder-avatar.jpg",
        name: "Jane Doe",
        email: "jane@hotmail.com",
        status: ContactStatus.Absent,
      },
      {
        avatarUrl: "/placeholder-avatar.jpg",
        name: "Jane Doe",
        email: "jane@hotmail.com",
        status: ContactStatus.Absent,
      },
      {
        avatarUrl: "/placeholder-avatar.jpg",
        name: "Jane Doe",
        email: "jane@hotmail.com",
        status: ContactStatus.Absent,
      },
    ],
  },
};

export const EmailVariant: Story = {
  name: "Email Variant",
  args: {
    headerText: "Absent",
    variant: "email",
    contacts: [
      {
        avatarUrl: "/placeholder-avatar.jpg",
        name: "Jane Doe",
        email: "jane@hotmail.com",
        status: ContactStatus.Absent,
      },
      {
        avatarUrl: "/placeholder-avatar.jpg",
        name: "Jane Doe",
        email: "jane@hotmail.com",
        status: ContactStatus.Absent,
      },
      {
        avatarUrl: "/placeholder-avatar.jpg",
        name: "Jane Doe",
        email: "jane@hotmail.com",
        status: ContactStatus.Absent,
      },
      {
        avatarUrl: "/placeholder-avatar.jpg",
        name: "Jane Doe",
        email: "jane@hotmail.com",
        status: ContactStatus.Absent,
      },
    ],
  },
};

export const NoContacts: Story = {
  name: "No Contacts",
  args: {
    variant: "standard",
    headerText: "Absent",
    contacts: [],
  },
};
