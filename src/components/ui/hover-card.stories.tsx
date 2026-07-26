import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './button'
import { Avatar, AvatarFallback } from './avatar'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card'

const meta = {
  title: 'ui/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger render={<Button variant="link">@shadcn</Button>} />
      <HoverCardContent>
        <div className="flex gap-2.5">
          <Avatar>
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0.5">
            <div className="text-sm font-medium">@shadcn</div>
            <div className="text-sm text-muted-foreground">Building shadcn/ui.</div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}
