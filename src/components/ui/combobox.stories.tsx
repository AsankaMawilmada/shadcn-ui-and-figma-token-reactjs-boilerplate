import type { Meta, StoryObj } from '@storybook/react-vite'
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from './combobox'

const FRUITS = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape']

const meta = {
  title: 'ui/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { items: FRUITS },
  render: (args) => (
    <Combobox {...args}>
      <ComboboxInput placeholder="Search fruit..." />
      <ComboboxContent>
        <ComboboxEmpty>No fruit found.</ComboboxEmpty>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
}

export const Disabled: Story = {
  args: { items: FRUITS, disabled: true },
  render: Default.render,
}
