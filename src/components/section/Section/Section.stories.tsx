import type { Meta, StoryObj } from "@storybook/react";

import ContactListItem from "../../contact/ContactListItem";
import { default as Section } from "./Section";

const meta = {
  title: "Section/Section",
  component: Section,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  args: {
    children: (
      <>
        <ContactListItem imageUrl="/placeholder-avatar.jpg" name="Jane Doe" />
        <ContactListItem imageUrl="/placeholder-avatar.jpg" name="Jane Doe" />
        <ContactListItem imageUrl="/placeholder-avatar.jpg" name="Jane Doe" />
      </>
    ),
  },
};
