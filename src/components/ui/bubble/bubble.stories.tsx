import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bubble, BubbleContent, BubbleGroup } from './bubble'

const meta = {
  title: 'ui/Bubble',
  component: Bubble,
  tags: ['autodocs', '!dev'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'muted', 'tinted', 'outline', 'ghost', 'destructive'],
    },
    align: { control: 'select', options: ['start', 'end'] },
  },
  args: {
    children: <BubbleContent>Hello there!</BubbleContent>,
  },
} satisfies Meta<typeof Bubble>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { variant: 'default' },
}

export const Secondary: Story = {
  args: { variant: 'secondary' },
}

export const Muted: Story = {
  args: { variant: 'muted' },
}

export const Tinted: Story = {
  args: { variant: 'tinted' },
}

export const Outline: Story = {
  args: { variant: 'outline' },
}

export const Ghost: Story = {
  args: { variant: 'ghost' },
}

export const Destructive: Story = {
  args: { variant: 'destructive' },
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
