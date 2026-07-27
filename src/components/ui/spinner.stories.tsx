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

export const Small: Story = {
  args: { className: 'size-4' },
}

export const Large: Story = {
  args: { className: 'size-8' },
}

export const InButton: Story = {
  render: (args) => (
    <Button disabled>
      <Spinner {...args} />
      Please wait
    </Button>
  ),
}
