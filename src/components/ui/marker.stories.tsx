import type { Meta, StoryObj } from '@storybook/react-vite'
import { Marker, MarkerContent } from './marker'

const meta = {
  title: 'ui/Marker',
  component: Marker,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'separator', 'border'],
    },
  },
  args: {
    variant: 'default',
  },
} satisfies Meta<typeof Marker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Marker {...args} className="w-72">
      <MarkerContent>Today, 2:30 PM</MarkerContent>
    </Marker>
  ),
}

export const Separator: Story = {
  args: { variant: 'separator' },
  render: (args) => (
    <Marker {...args} className="w-72">
      <MarkerContent>New messages</MarkerContent>
    </Marker>
  ),
}

export const Border: Story = {
  args: { variant: 'border' },
  render: (args) => (
    <Marker {...args} className="w-72">
      <MarkerContent>Section divider</MarkerContent>
    </Marker>
  ),
}
