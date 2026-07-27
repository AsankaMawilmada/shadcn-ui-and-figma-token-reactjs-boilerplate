import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bold } from 'lucide-react'
import { Toggle } from './toggle'

const meta = {
  title: 'ui/Toggle',
  component: Toggle,
  tags: ['autodocs', '!dev'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'outline'] },
    size: { control: 'select', options: ['sm', 'default', 'lg'] },
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

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle {...args} size="sm" aria-label="Small">
        <Bold />
      </Toggle>
      <Toggle {...args} size="default" aria-label="Default">
        <Bold />
      </Toggle>
      <Toggle {...args} size="lg" aria-label="Large">
        <Bold />
      </Toggle>
    </div>
  ),
}

export const Disabled: Story = {
  args: { disabled: true },
}
