import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './input'

const meta = {
  title: 'ui/Input',
  component: Input,
  tags: ['autodocs', '!dev'],
  args: {
    placeholder: 'Email address',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Disabled: Story = {
  args: { disabled: true },
}

export const Invalid: Story = {
  args: { 'aria-invalid': true },
}

export const Password: Story = {
  args: { type: 'password', placeholder: 'Password' },
}

export const WithDefaultValue: Story = {
  args: { defaultValue: 'Ada Lovelace' },
}
