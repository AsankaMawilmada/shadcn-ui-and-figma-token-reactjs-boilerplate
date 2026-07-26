import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from './label'
import { Switch } from './switch'

const meta = {
  title: 'ui/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'sm'],
    },
    defaultChecked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Checked: Story = {
  args: { defaultChecked: true },
}

export const Small: Story = {
  args: { size: 'sm' },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Switch {...args} id="story-switch-airplane" />
      <Label htmlFor="story-switch-airplane">Airplane mode</Label>
    </div>
  ),
}
