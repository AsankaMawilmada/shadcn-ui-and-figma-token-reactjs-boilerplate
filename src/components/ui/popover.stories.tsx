import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './button'
import { Input } from './input'
import { Label } from './label'
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from './popover'

const meta = {
  title: 'ui/Popover',
  component: Popover,
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger render={<Button variant="outline">Open popover</Button>} />
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
        </PopoverHeader>
        <div className="flex items-center gap-2">
          <Label htmlFor="story-popover-width" className="w-16">
            Width
          </Label>
          <Input id="story-popover-width" defaultValue="100%" className="h-7" />
        </div>
      </PopoverContent>
    </Popover>
  ),
}
