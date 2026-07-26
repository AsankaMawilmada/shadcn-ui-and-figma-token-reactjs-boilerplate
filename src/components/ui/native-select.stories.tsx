import type { Meta, StoryObj } from '@storybook/react-vite'
import { NativeSelect, NativeSelectOption } from './native-select'

const meta = {
  title: 'ui/NativeSelect',
  component: NativeSelect,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'sm'],
    },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof NativeSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <NativeSelect {...args} defaultValue="apple">
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
    </NativeSelect>
  ),
}

export const Small: Story = {
  args: { size: 'sm' },
  render: Default.render,
}

export const Disabled: Story = {
  args: { disabled: true },
  render: Default.render,
}
