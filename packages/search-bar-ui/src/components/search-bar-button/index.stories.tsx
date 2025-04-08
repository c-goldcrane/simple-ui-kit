import type { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "../search-bar";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof SearchBarButton> = {
  component: SearchBarButton,
  title: "SearchBarButton",
};
export default meta;
type Story = StoryObj<typeof SearchBarButton>;

export const Primary = {
  args: {
    children: "",
    className: "",
    disableWhenEmpty: false,
  },
};

export const Heading: Story = {
  args: {
    children: "",
    className: "",
    disableWhenEmpty: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to SearchBarButton!/gi)).toBeTruthy();
  },
};
