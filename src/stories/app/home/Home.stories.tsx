import { Meta, StoryObj } from "@storybook/react";
import page from "@/app/home/page";
import RootLayout from "@/app/layout";

const meta: Meta<typeof page> = {
  title: "Home",
  component: page,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    viewport: { defaultViewport: "iphone14promax" },
  },
  decorators: [
    (Story) => (
      <RootLayout>
        <Story />
      </RootLayout>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof page>;

export const Home: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/home",
      },
    },
  },
};
