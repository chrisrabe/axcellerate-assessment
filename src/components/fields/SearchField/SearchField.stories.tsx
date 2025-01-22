import type { Meta, StoryObj } from "@storybook/react";

import { default as SearchField } from "./SearchField";

const meta = {
  title: "Fields/SearchField",
  component: SearchField,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
