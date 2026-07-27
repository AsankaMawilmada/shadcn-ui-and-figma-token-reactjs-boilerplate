import type { Meta, StoryObj } from '@storybook/react-vite'
import { Slider } from './slider'

const meta = {
  title: 'ui/Slider',
  component: Slider,
  tags: ['autodocs'],
  args: {
    className: 'w-64',
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { defaultValue: [40] },
}

export const Range: Story = {
  args: { defaultValue: [25, 75] },
}

export const Disabled: Story = {
  args: { defaultValue: [40], disabled: true },
}
