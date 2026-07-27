import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../button'
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip'

const meta = {
  title: 'ui/Tooltip',
  component: Tooltip,
  tags: ['autodocs', '!dev'],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

const renderTooltip = (side: 'top' | 'right' | 'bottom' | 'left') => (
  <Tooltip>
    <TooltipTrigger render={<Button variant="outline">{side}</Button>} />
    <TooltipContent side={side}>Tooltip on {side}</TooltipContent>
  </Tooltip>
)

export const Top: Story = { render: () => renderTooltip('top') }
export const Right: Story = { render: () => renderTooltip('right') }
export const Bottom: Story = { render: () => renderTooltip('bottom') }
export const Left: Story = { render: () => renderTooltip('left') }
