import { Meta, StoryObj } from "@storybook/react";
import { Page } from "@/components/MovieList/Page";

const meta: Meta<typeof Page> = {
  title: "MovieList",
  component: Page,
};

export default meta;

type Story = StoryObj<typeof Page>;

export const MovieList: Story = {};
