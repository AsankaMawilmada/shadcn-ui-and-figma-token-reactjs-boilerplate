import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from './context-menu'

const meta = {
  title: 'ui/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof ContextMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <ContextMenu {...args}>
      <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Actions</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem>Back</ContextMenuItem>
        <ContextMenuItem>Reload</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}
