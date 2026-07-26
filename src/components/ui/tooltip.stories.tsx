import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './button'
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip'

const meta = {
  title: 'ui/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger render={<Button variant="outline">Hover me</Button>} />
      <TooltipContent>Add to library</TooltipContent>
    </Tooltip>
  ),
}

export const Sides: Story = {
  render: () => (
    <div className="flex gap-4">
      {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger render={<Button variant="outline">{side}</Button>} />
          <TooltipContent side={side}>Tooltip on {side}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
}
