import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bubble, BubbleContent, BubbleGroup } from './bubble'

const meta = {
  title: 'ui/Bubble',
  component: Bubble,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'muted', 'tinted', 'outline', 'ghost', 'destructive'],
    },
    align: {
      control: 'select',
      options: ['start', 'end'],
    },
  },
  args: {
    align: 'start',
  },
} satisfies Meta<typeof Bubble>

export default meta
type Story = StoryObj<typeof meta>

function renderBubble(args: Story['args']) {
  return (
    <Bubble {...args}>
      <BubbleContent>Hey, how's it going?</BubbleContent>
    </Bubble>
  )
}

export const Default: Story = {
  args: { variant: 'default' },
  render: renderBubble,
}

export const Secondary: Story = {
  args: { variant: 'secondary' },
  render: renderBubble,
}

export const Outline: Story = {
  args: { variant: 'outline' },
  render: renderBubble,
}

export const Conversation: Story = {
  render: () => (
    <BubbleGroup className="w-80">
      <Bubble align="start">
        <BubbleContent>Hey, how's it going?</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>Pretty good, thanks for asking!</BubbleContent>
      </Bubble>
    </BubbleGroup>
  ),
}
