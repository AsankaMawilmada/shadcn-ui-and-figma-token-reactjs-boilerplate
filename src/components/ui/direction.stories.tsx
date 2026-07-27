import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './button'
import { DirectionProvider } from './direction'

const meta = {
  title: 'ui/DirectionProvider',
  component: DirectionProvider,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'select', options: ['ltr', 'rtl'] },
  },
} satisfies Meta<typeof DirectionProvider>

export default meta
type Story = StoryObj<typeof meta>

export const Ltr: Story = {
  args: { direction: 'ltr' },
  render: (args) => (
    <DirectionProvider {...args}>
      <div dir="ltr" className="flex w-72 gap-2 rounded-lg border p-3">
        <Button variant="outline">First</Button>
        <Button variant="outline">Second</Button>
        <Button variant="outline">Third</Button>
      </div>
    </DirectionProvider>
  ),
}

export const Rtl: Story = {
  args: { direction: 'rtl' },
  render: (args) => (
    <DirectionProvider {...args}>
      <div dir="rtl" className="flex w-72 gap-2 rounded-lg border p-3">
        <Button variant="outline">First</Button>
        <Button variant="outline">Second</Button>
        <Button variant="outline">Third</Button>
      </div>
    </DirectionProvider>
  ),
}
