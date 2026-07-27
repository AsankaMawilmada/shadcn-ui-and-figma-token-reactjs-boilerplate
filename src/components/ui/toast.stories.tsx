import type { Meta, StoryObj } from '@storybook/react-vite'
import { CheckCircle2 } from 'lucide-react'
import { Button } from './button'
import { Toaster, toast } from './toast'

const meta = {
  title: 'ui/Toast',
  component: Toaster,
  tags: ['autodocs'],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Toaster>
      <Button
        variant="outline"
        onClick={() => toast.add({ title: 'Event created', description: 'Sunday, July 24 at 4:00 PM' })}
      >
        Show toast
      </Button>
    </Toaster>
  ),
}

export const SuccessToast: Story = {
  render: () => (
    <Toaster>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({ title: 'Success', description: 'Your changes have been saved.', type: 'success' })
        }
      >
        <CheckCircle2 />
        Show success toast
      </Button>
    </Toaster>
  ),
}
