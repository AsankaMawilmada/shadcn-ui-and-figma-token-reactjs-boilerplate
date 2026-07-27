import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from './label'
import { Switch } from './switch'

const meta = {
  title: 'ui/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'default'] },
  },
  args: {
    'aria-label': 'Toggle',
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
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="story-switch-airplane" defaultChecked />
      <Label htmlFor="story-switch-airplane">Airplane mode</Label>
    </div>
  ),
}
