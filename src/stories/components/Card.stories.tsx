import { Meta, StoryObj } from "@storybook/react";
import { Page } from "@/app/component/Card/Page";

const meta: Meta<typeof Page> = {
  title: "Card",
  component: Page,
};

export default meta;

type Story = StoryObj<typeof Page>;

export const Card: Story = {
  args: {
    title: "鬼滅の刃",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/3daOEMQCOGU2n9EbUC0PICnUCek.jpg",
    screeningTime: 115,
    startDate: new Date(2024, 5, 1, 14, 0),
  },
};
