import type { Meta, StoryObj } from "@storybook/react";

import { default as ContactListItem } from "./ContactListItem";

const meta = {
  title: "Components/Contact/ContactListItem",
  component: ContactListItem,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof ContactListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithEmail: Story = {
  name: "With Email",
  args: {
    imageUrl: "/placeholder-avatar.jpg",
    name: "Jane Doe",
    email: "jane@hotmail.com",
  },
};

export const WithoutEmail: Story = {
  name: "Without Email",
  args: {
    imageUrl: "/placeholder-avatar.jpg",
    name: "Jane Doe",
  },
};

export const SelectedWithEmail: Story = {
  name: "Selected With Email",
  args: {
    imageUrl: "/placeholder-avatar.jpg",
    name: "Jane Doe",
    email: "jane@hotmail.com",
    isSelected: true,
  },
};

export const SelectedWithoutEmail: Story = {
  name: "Selected Without Email",
  args: {
    imageUrl: "/placeholder-avatar.jpg",
    name: "Jane Doe",
    isSelected: true,
  },
};
