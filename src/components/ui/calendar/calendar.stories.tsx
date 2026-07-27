import type { Meta, StoryObj } from '@storybook/react-vite'
import { Calendar } from './calendar'

const meta = {
  title: 'ui/Calendar',
  component: Calendar,
  tags: ['autodocs', '!dev'],
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Single: Story = {
  render: () => <Calendar mode="single" className="rounded-lg border p-0" />,
}

export const Multiple: Story = {
  render: () => <Calendar mode="multiple" className="rounded-lg border p-0" />,
}

export const Range: Story = {
  render: () => <Calendar mode="range" className="rounded-lg border p-0" />,
}
