import type { Meta, StoryObj } from "@storybook/react";

import { fn } from "@storybook/test";
import { allContacts } from "../../../mocks/mockContacts";
import { default as SearchableContactList } from "./SearchableContactList";

const meta = {
  title: "Contact/SearchableContactList",
  component: SearchableContactList,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof SearchableContactList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  name: "Standard Contact List",
  args: {
    contacts: allContacts,
    setSelectedContact: fn(),
  },
};

export const EmailVariant: Story = {
  name: "Email Variant Contact List",
  args: {
    contacts: allContacts,
    variant: "email",
    setSelectedContact: fn(),
  },
};

export const StandardWithSelected: Story = {
  name: "Standard Contact List With Selected Contact",
  args: {
    contacts: allContacts,
    setSelectedContact: fn(),
    selectedContact: allContacts[0],
  },
};

export const EmailVariantWithSelected: Story = {
  name: "Email Variant Contact List With Selected Contact",
  args: {
    contacts: allContacts,
    variant: "email",
    setSelectedContact: fn(),
    selectedContact: allContacts[0],
  },
};
