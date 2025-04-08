import type { Meta, StoryObj } from "@storybook/react";
import { SuggestionItem } from "./index";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof SuggestionItem> = {
  component: SuggestionItem,
  title: "SuggestionItem",
};
export default meta;
type Story = StoryObj<typeof SuggestionItem>;

export const Primary = {
  args: {
    children: "",
    className: "",
    index: 0,
    value: "",
  },
};

export const Heading: Story = {
  args: {
    children: "",
    className: "",
    index: 0,
    value: "",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to SuggestionItem!/gi)).toBeTruthy();
  },
};
