import type { Meta, StoryObj } from '@storybook/react-vite'
import { CreditCard, Mail, Search } from 'lucide-react'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText } from './input-group'

const meta = {
  title: 'ui/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof InputGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <InputGroup className="w-72">
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const WithButton: Story = {
  render: () => (
    <InputGroup className="w-72">
      <InputGroupInput placeholder="Email" />
      <InputGroupAddon>
        <Mail />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="xs">Subscribe</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const WithTextAddon: Story = {
  render: () => (
    <InputGroup className="w-72">
      <InputGroupAddon>
        <InputGroupText>
          <CreditCard className="size-4" />
        </InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="Card number" />
    </InputGroup>
  ),
}
