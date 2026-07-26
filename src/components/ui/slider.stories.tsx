import type { Meta, StoryObj } from '@storybook/react-vite'
import { Slider } from './slider'

const meta = {
  title: 'ui/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    disabled: { control: 'boolean' },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
  args: {
    min: 0,
    max: 100,
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { defaultValue: [40] },
  render: (args) => (
    <div className="w-64">
      <Slider {...args} />
    </div>
  ),
}

export const Range: Story = {
  args: { defaultValue: [25, 75] },
  render: (args) => (
    <div className="w-64">
      <Slider {...args} />
    </div>
  ),
}

export const Disabled: Story = {
  args: { defaultValue: [40], disabled: true },
  render: Default.render,
}
