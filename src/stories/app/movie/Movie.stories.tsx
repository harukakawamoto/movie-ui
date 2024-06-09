import { Meta, StoryObj } from "@storybook/react";
import { View } from "@/app/movie/[movie_id]/View";
import RootLayout from "@/app/layout";

const meta: Meta<typeof View> = {
  title: "Movie",
  component: View,
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

type Story = StoryObj<typeof View>;

export const Movie: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/movie/848538",
      },
    },
  },
  args: {
    title: "Argylle",
    overview:
      "凄腕エージェントのアーガイルが世界中を飛び回り、謎のスパイ組織の正体に迫る大人気スパイアクション小説「アーガイル」。ハードなシリーズの作者エリー・コンウェイの素顔は、自宅で愛猫のアルフィーと過ごすのが至福の時という平和主義。しかし、新作の内容と実在するスパイ組織の活動がまさかの一致で、エリーの人生は大混乱に!\r 物語の続きをめぐり命が狙われる事になった危機的状況をエイダンと名乗るスパイに助けられる。\r 果たして、出会うはずのなかった二人と一匹の猫の危険なミッションの行方は...!?",
    runtime: "2時間19分",
    release_date: "2024-01-31",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/x2gxeCU2FZKXPYLPt1t4K6eTbzX.jpg",
  },
};
