import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar, AvatarFallback } from './avatar'
import { Bubble, BubbleContent } from './bubble'
import { Message, MessageAvatar, MessageContent, MessageGroup } from './message'

const meta = {
  title: 'ui/Message',
  component: Message,
  tags: ['autodocs'],
  argTypes: {
    align: {
      control: 'select',
      options: ['start', 'end'],
    },
  },
  args: {
    align: 'start',
  },
} satisfies Meta<typeof Message>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Message {...args} className="w-96">
      <MessageAvatar>
        <Avatar>
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <Bubble>
          <BubbleContent>How can I help you today?</BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
  ),
}

export const Conversation: Story = {
  render: () => (
    <MessageGroup className="w-96">
      <Message align="start">
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>How can I help you today?</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>Can you summarize this PDF?</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </MessageGroup>
  ),
}
