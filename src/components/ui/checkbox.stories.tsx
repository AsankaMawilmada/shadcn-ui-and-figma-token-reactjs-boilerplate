import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from './label'
import { Checkbox } from './checkbox'

const meta = {
  title: 'ui/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    defaultChecked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Checked: Story = {
  args: { defaultChecked: true },
}

export const Indeterminate: Story = {
  args: { indeterminate: true },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox {...args} id="story-checkbox-terms" />
      <Label htmlFor="story-checkbox-terms">Accept terms and conditions</Label>
    </div>
  ),
}
