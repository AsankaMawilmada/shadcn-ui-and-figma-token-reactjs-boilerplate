import type { Meta, StoryObj } from '@storybook/react-vite'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from './input-otp'

const meta = {
  title: 'ui/InputOTP',
  component: InputOTP,
  tags: ['autodocs'],
  argTypes: {
    maxLength: { control: 'number' },
    disabled: { control: 'boolean' },
  },
  args: {
    maxLength: 6,
    children: null,
  },
} satisfies Meta<typeof InputOTP>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: ({ maxLength, disabled }) => (
    <InputOTP maxLength={maxLength ?? 6} disabled={disabled}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
}

export const FourDigits: Story = {
  args: { maxLength: 4 },
  render: ({ maxLength, disabled }) => (
    <InputOTP maxLength={maxLength ?? 4} disabled={disabled}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  ),
}

export const Disabled: Story = {
  args: { maxLength: 6, disabled: true },
  render: Default.render,
}
