import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Heart } from 'lucide-react'
import { Button } from './button'

const meta = {
  title: 'ui/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'xs', 'sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg'],
    },
    disabled: { control: 'boolean' },
  },
  args: {
    children: 'Button',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { variant: 'default' },
}

export const Outline: Story = {
  args: { variant: 'outline' },
}

export const Secondary: Story = {
  args: { variant: 'secondary' },
}

export const Ghost: Story = {
  args: { variant: 'ghost' },
}

export const Destructive: Story = {
  args: { variant: 'destructive' },
}

export const Link: Story = {
  args: { variant: 'link' },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const Icon: Story = {
  args: {
    size: 'icon',
    'aria-label': 'Like',
    children: <Heart />,
  },
}

export const AllVariants: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      <Button {...args} variant="default">
        Default
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
      <Button {...args} variant="destructive">
        Destructive
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
  ),
}
