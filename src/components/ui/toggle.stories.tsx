import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bold } from 'lucide-react'
import { Toggle } from './toggle'

const meta = {
  title: 'ui/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
    defaultPressed: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    'aria-label': 'Toggle bold',
    children: <Bold />,
  },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { variant: 'default' },
}

export const Outline: Story = {
  args: { variant: 'outline' },
}

export const Pressed: Story = {
  args: { defaultPressed: true },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const WithText: Story = {
  args: {
    children: (
      <>
        <Bold />
        Bold
      </>
    ),
  },
}
