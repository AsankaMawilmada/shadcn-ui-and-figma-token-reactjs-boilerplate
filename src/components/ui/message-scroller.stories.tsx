import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar, AvatarFallback } from './avatar'
import { Bubble, BubbleContent } from './bubble'
import { Message, MessageAvatar, MessageContent } from './message'
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from './message-scroller'

const meta = {
  title: 'ui/MessageScroller',
  component: MessageScroller,
  tags: ['autodocs'],
} satisfies Meta<typeof MessageScroller>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <MessageScrollerProvider>
      <MessageScroller className="h-64 w-96 rounded-lg border">
        <MessageScrollerViewport>
          <MessageScrollerContent>
            {Array.from({ length: 8 }, (_, i) => (
              <MessageScrollerItem key={i}>
                <Message align={i % 2 === 0 ? 'start' : 'end'}>
                  {i % 2 === 0 && (
                    <MessageAvatar>
                      <Avatar>
                        <AvatarFallback>AI</AvatarFallback>
                      </Avatar>
                    </MessageAvatar>
                  )}
                  <MessageContent>
                    <Bubble>
                      <BubbleContent>Message {i + 1}</BubbleContent>
                    </Bubble>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>
    </MessageScrollerProvider>
  ),
}
