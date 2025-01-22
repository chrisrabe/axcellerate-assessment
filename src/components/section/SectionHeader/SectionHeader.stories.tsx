import type { Meta, StoryObj } from "@storybook/react";

import { default as SectionHeader } from "./SectionHeader";

const meta = {
  title: "Section/SectionHeader",
  component: SectionHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotExpanded: Story = {
  name: "Not expanded",
  args: {
    headerText: "Absent",
  },
};

export const Expanded: Story = {
  name: "Expanded",
  args: {
    headerText: "Absent",
    isExpanded: true,
  },
};
