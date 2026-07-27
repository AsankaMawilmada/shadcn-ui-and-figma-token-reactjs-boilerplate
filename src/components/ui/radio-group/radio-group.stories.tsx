import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from '../label'
import { RadioGroup, RadioGroupItem } from './radio-group'

const meta = {
  title: 'ui/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs', '!dev'],
  argTypes: {
    defaultValue: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: {
    defaultValue: 'comfortable',
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="story-radio-1" />
        <Label htmlFor="story-radio-1">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="comfortable" id="story-radio-2" />
        <Label htmlFor="story-radio-2">Comfortable</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="compact" id="story-radio-3" />
        <Label htmlFor="story-radio-3">Compact</Label>
      </div>
    </RadioGroup>
  ),
}

export const Disabled: Story = {
  args: { disabled: true },
  render: Default.render,
}
