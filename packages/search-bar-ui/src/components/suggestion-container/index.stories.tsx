import type { Meta, StoryObj } from "@storybook/react";
import { Suggestions } from "./index";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof Suggestions> = {
  component: Suggestions,
  title: "Suggestions",
};
export default meta;
type Story = StoryObj<typeof Suggestions>;

export const Primary = {
  args: {
    children: "",
    className: "",
  },
};

export const Heading: Story = {
  args: {
    children: "",
    className: "",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Suggestions!/gi)).toBeTruthy();
  },
};
