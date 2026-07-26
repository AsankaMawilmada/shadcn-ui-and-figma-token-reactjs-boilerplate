import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar, AvatarFallback, AvatarGroup } from './avatar'

const meta = {
  title: 'ui/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>AL</AvatarFallback>
    </Avatar>
  ),
}

export const Small: Story = {
  args: { size: 'sm' },
  render: Default.render,
}

export const Large: Story = {
  args: { size: 'lg' },
  render: Default.render,
}

export const Group: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar>
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>B</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>C</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  ),
}
