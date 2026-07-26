import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './input'

const meta = {
  title: 'ui/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url', 'date', 'file'],
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    'aria-invalid': { control: 'boolean' },
  },
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
  args: { 'aria-invalid': true, placeholder: 'Invalid' },
}

export const Password: Story = {
  args: { type: 'password', placeholder: 'Password' },
}

export const WithValue: Story = {
  args: { defaultValue: 'Ada Lovelace' },
}
