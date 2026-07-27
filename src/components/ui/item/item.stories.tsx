import type { Meta, StoryObj } from '@storybook/react-vite'
import { Inbox, Settings } from 'lucide-react'
import { Button } from '../button'
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from './item'

const meta = {
  title: 'ui/Item',
  component: Item,
  tags: ['autodocs', '!dev'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'outline', 'muted'] },
    size: { control: 'select', options: ['default', 'sm', 'xs'] },
  },
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

const InboxItem = (args: React.ComponentProps<typeof Item>) => (
  <ItemGroup className="w-80">
    <Item {...args}>
      <ItemMedia variant="icon">
        <Inbox />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Inbox</ItemTitle>
        <ItemDescription>12 unread messages</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="ghost" size="icon-sm" aria-label="Settings">
          <Settings />
        </Button>
      </ItemActions>
    </Item>
  </ItemGroup>
)

export const Default: Story = {
  args: { variant: 'default' },
  render: (args) => <InboxItem {...args} />,
}

export const Outline: Story = {
  args: { variant: 'outline' },
  render: (args) => <InboxItem {...args} />,
}

export const Muted: Story = {
  args: { variant: 'muted' },
  render: (args) => <InboxItem {...args} />,
}

export const Sizes: Story = {
  render: () => (
    <ItemGroup className="w-80">
      <InboxItem variant="outline" size="default" />
      <InboxItem variant="outline" size="sm" />
      <InboxItem variant="outline" size="xs" />
    </ItemGroup>
  ),
}
