import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar, AvatarFallback, AvatarGroup } from './avatar'

const meta = {
  title: 'ui/Avatar',
  component: Avatar,
  tags: ['autodocs', '!dev'],
  argTypes: {
    size: { control: 'select', options: ['default', 'sm', 'lg'] },
  },
  args: {
    children: <AvatarFallback>AL</AvatarFallback>,
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { size: 'default' },
}

export const Small: Story = {
  args: { size: 'sm' },
}

export const Large: Story = {
  args: { size: 'lg' },
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
