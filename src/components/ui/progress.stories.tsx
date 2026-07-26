import type { Meta, StoryObj } from '@storybook/react-vite'
import { Progress } from './progress'

const meta = {
  title: 'ui/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
  args: {
    value: 33,
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="w-64">
      <Progress {...args} />
    </div>
  ),
}

export const Complete: Story = {
  args: { value: 100 },
  render: Default.render,
}
