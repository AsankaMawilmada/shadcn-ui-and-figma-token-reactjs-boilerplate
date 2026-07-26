import type { Meta, StoryObj } from '@storybook/react-vite'
import { Kbd, KbdGroup } from './kbd'

const meta = {
  title: 'ui/Kbd',
  component: Kbd,
  tags: ['autodocs'],
  args: {
    children: 'K',
  },
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Group: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
}
