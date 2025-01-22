import type { Meta, StoryObj } from "@storybook/react";

import { default as Example } from "./Example";

const meta = {
  title: "Example/Sample",
  component: Example,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
