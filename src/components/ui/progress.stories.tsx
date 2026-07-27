import type { Meta, StoryObj } from '@storybook/react-vite'
import { Progress } from './progress'

const meta = {
  title: 'ui/Progress',
  component: Progress,
  tags: ['autodocs'],
  args: {
    value: 33,
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { value: 33 },
}

export const Advanced: Story = {
  args: { value: 66 },
}

export const Complete: Story = {
  args: { value: 100 },
}
