import type { Meta, StoryObj } from '@storybook/react-vite'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select'

const meta = {
  title: 'ui/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Select a topic" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="bug">Bug report</SelectItem>
        <SelectItem value="feature">Feature request</SelectItem>
        <SelectItem value="other">Other</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const WithDefaultValue: Story = {
  args: { defaultValue: 'bug' },
  render: Default.render,
}

export const SmallTrigger: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger size="sm" className="w-56">
        <SelectValue placeholder="Select a topic" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="bug">Bug report</SelectItem>
        <SelectItem value="feature">Feature request</SelectItem>
        <SelectItem value="other">Other</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const Disabled: Story = {
  args: { disabled: true },
  render: Default.render,
}
