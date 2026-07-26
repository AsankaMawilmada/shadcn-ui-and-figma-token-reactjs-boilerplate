import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './button'
import { Spinner } from './spinner'

const meta = {
  title: 'ui/Spinner',
  component: Spinner,
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  ),
}

export const InButton: Story = {
  render: () => (
    <Button disabled>
      <Spinner />
      Please wait
    </Button>
  ),
}
