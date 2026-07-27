import type { Meta, StoryObj } from '@storybook/react-vite'
import { Marker, MarkerContent } from './marker'

const meta = {
  title: 'ui/Marker',
  component: Marker,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'separator', 'border'] },
  },
  args: {
    className: 'w-72',
    children: <MarkerContent>Today, 2:30 PM</MarkerContent>,
  },
} satisfies Meta<typeof Marker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { variant: 'default' },
}

export const Separator: Story = {
  args: {
    variant: 'separator',
    children: <MarkerContent>New messages</MarkerContent>,
  },
}

export const Border: Story = {
  args: {
    variant: 'border',
    children: <MarkerContent>Section divider</MarkerContent>,
  },
}
