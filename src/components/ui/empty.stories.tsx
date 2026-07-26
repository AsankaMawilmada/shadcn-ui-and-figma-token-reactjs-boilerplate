import type { Meta, StoryObj } from '@storybook/react-vite'
import { FileQuestion } from 'lucide-react'
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from './empty'

const meta = {
  title: 'ui/Empty',
  component: Empty,
  tags: ['autodocs'],
} satisfies Meta<typeof Empty>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Empty {...args} className="w-96 border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FileQuestion />
        </EmptyMedia>
        <EmptyTitle>No results found</EmptyTitle>
        <EmptyDescription>Try adjusting your search or filters.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
}
