import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from './label'

const meta = {
  title: 'ui/Label',
  component: Label,
  tags: ['autodocs', '!dev'],
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    children: 'Email address',
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
