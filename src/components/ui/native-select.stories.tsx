import type { Meta, StoryObj } from '@storybook/react-vite'
import { NativeSelect, NativeSelectOption } from './native-select'

const meta = {
  title: 'ui/NativeSelect',
  component: NativeSelect,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'default'] },
  },
  args: {
    defaultValue: 'apple',
    children: (
      <>
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
      </>
    ),
  },
} satisfies Meta<typeof NativeSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
  args: { size: 'sm' },
}

export const Disabled: Story = {
  args: { disabled: true },
}
