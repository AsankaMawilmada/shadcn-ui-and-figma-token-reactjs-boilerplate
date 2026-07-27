import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bold, Italic, Underline } from 'lucide-react'
import { ToggleGroup, ToggleGroupItem } from './toggle-group'

const meta = {
  title: 'ui/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs', '!dev'],
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ToggleGroup defaultValue={['center']}>
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
  render: () => (
    <ToggleGroup variant="outline" defaultValue={['center']}>
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
  render: () => (
    <ToggleGroup multiple defaultValue={['bold']}>
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
  render: () => (
    <ToggleGroup orientation="vertical" defaultValue={['center']}>
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
