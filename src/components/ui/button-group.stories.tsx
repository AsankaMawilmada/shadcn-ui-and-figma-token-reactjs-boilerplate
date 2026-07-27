import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bold, Italic, Underline } from 'lucide-react'
import { Button } from './button'
import { Input } from './input'
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from './button-group'

const meta = {
  title: 'ui/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="icon" aria-label="Bold">
        <Bold />
      </Button>
      <Button variant="outline" size="icon" aria-label="Italic">
        <Italic />
      </Button>
      <Button variant="outline" size="icon" aria-label="Underline">
        <Underline />
      </Button>
    </ButtonGroup>
  ),
}

export const WithTextAddon: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupText>https://</ButtonGroupText>
      <Input placeholder="example.com" />
      <Button variant="outline">Go</Button>
    </ButtonGroup>
  ),
}

export const WithSeparator: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Copy</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Paste</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Cut</Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical" className="w-40">
      <Button variant="outline">Profile</Button>
      <Button variant="outline">Billing</Button>
      <Button variant="outline">Settings</Button>
    </ButtonGroup>
  ),
}
