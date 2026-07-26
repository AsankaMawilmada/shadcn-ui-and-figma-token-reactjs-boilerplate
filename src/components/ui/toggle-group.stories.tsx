import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bold, Italic, Underline } from 'lucide-react'
import { ToggleGroup, ToggleGroupItem } from './toggle-group'

const meta = {
  title: 'ui/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    multiple: { control: 'boolean' },
    spacing: { control: 'number' },
  },
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { defaultValue: ['center'] },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="left" aria-label="Align left">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Outline: Story = {
  args: { variant: 'outline', defaultValue: ['center'] },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="left" aria-label="Align left">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Multiple: Story = {
  args: { multiple: true, defaultValue: ['bold'] },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="bold" aria-label="Bold">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Vertical: Story = {
  args: { orientation: 'vertical', defaultValue: ['center'] },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="left" aria-label="Align left">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}
