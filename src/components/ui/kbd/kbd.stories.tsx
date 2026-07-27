import type { Meta, StoryObj } from '@storybook/react-vite'
import { Kbd, KbdGroup } from './kbd'

const meta = {
  title: 'ui/Kbd',
  component: Kbd,
  tags: ['autodocs', '!dev'],
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <KbdGroup>
      <Kbd {...args}>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
}
