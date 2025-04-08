import type { Meta, StoryObj } from "@storybook/react";
import { SearchBarInput } from "./index";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof SearchBarInput> = {
  component: SearchBarInput,
  title: "SearchBarInput",
  argTypes: {
    onChange: { action: "onChange executed!" },
  },
};
export default meta;
type Story = StoryObj<typeof SearchBarInput>;

export const Primary = {
  args: {
    value: "",
    className: "",
    placeholder: "",
  },
};

export const Heading: Story = {
  args: {
    value: "",
    className: "",
    placeholder: "",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to SearchBarInput!/gi)).toBeTruthy();
  },
};
