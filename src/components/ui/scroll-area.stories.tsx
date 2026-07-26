import type { Meta, StoryObj } from '@storybook/react-vite'
import { ScrollArea } from './scroll-area'

const meta = {
  title: 'ui/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <ScrollArea {...args} className="h-40 w-64 rounded-lg border">
      <div className="flex flex-col gap-2 p-3 text-sm">
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i}>Row {i + 1}</div>
        ))}
      </div>
    </ScrollArea>
  ),
}
