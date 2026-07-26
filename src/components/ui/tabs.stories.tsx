import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'

const meta = {
  title: 'ui/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { defaultValue: 'account' },
  render: (args) => (
    <Tabs {...args} className="w-72">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Update your account settings here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  ),
}

export const LineVariant: Story = {
  args: { defaultValue: 'overview' },
  render: (args) => (
    <Tabs {...args} className="w-72">
      <TabsList variant="line">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Overview content.</TabsContent>
      <TabsContent value="analytics">Analytics content.</TabsContent>
    </Tabs>
  ),
}

export const Vertical: Story = {
  args: { defaultValue: 'account', orientation: 'vertical' },
  render: (args) => (
    <Tabs {...args} className="w-96">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Update your account settings here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  ),
}
