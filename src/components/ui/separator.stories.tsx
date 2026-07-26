import type { Meta, StoryObj } from '@storybook/react-vite'
import { Separator } from './separator'

const meta = {
  title: 'ui/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  args: { orientation: 'horizontal' },
  render: (args) => (
    <div className="w-64 text-sm">
      <div>Above</div>
      <Separator {...args} className="my-3" />
      <div>Below</div>
    </div>
  ),
}

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: (args) => (
    <div className="flex h-8 items-center gap-3 text-sm">
      <span>Left</span>
      <Separator {...args} />
      <span>Right</span>
    </div>
  ),
}
