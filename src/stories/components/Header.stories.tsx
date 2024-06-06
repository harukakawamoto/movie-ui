import { Meta, StoryObj } from "@storybook/react";
import { Page } from "@/components/Header/Page";

const meta: Meta<typeof Page> = {
  title: "Header",
  component: Page,
};

export default meta;

type Story = StoryObj<typeof Page>;

export const Header: Story = {};
