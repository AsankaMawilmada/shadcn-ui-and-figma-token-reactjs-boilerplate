import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './collapsible'

const meta = {
  title: 'ui/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Collapsible {...args} className="flex w-72 flex-col gap-2">
      <CollapsibleTrigger render={<Button variant="outline">Toggle details</Button>} />
      <CollapsibleContent className="rounded-lg border p-3 text-sm text-muted-foreground">
        Additional details revealed when expanded.
      </CollapsibleContent>
    </Collapsible>
  ),
}

export const Open: Story = {
  args: {
    defaultOpen: true,
  },
  render: (args) => (
    <Collapsible {...args} className="flex w-72 flex-col gap-2">
      <CollapsibleTrigger render={<Button variant="outline">Toggle details</Button>} />
      <CollapsibleContent className="rounded-lg border p-3 text-sm text-muted-foreground">
        Additional details revealed when expanded.
      </CollapsibleContent>
    </Collapsible>
  ),
}
