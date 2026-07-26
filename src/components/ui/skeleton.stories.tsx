import type { Meta, StoryObj } from '@storybook/react-vite'
import { Skeleton } from './skeleton'

const meta = {
  title: 'ui/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Skeleton {...args} className="h-4 w-40" />,
}

export const CardPlaceholder: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Skeleton className="size-10 rounded-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-3 w-40" />
        <Skeleton className="h-3 w-28" />
      </div>
    </div>
  ),
}
