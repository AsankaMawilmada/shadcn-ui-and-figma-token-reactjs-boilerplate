import type { Meta, StoryObj } from '@storybook/react-vite'
import { Switch } from './switch'
import { Input } from './input'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from './field'

const meta = {
  title: 'ui/Field',
  component: Field,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal', 'responsive'],
    },
  },
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: (args) => (
    <Field {...args} className="w-72">
      <FieldLabel htmlFor="story-field-name">Name</FieldLabel>
      <Input id="story-field-name" placeholder="Ada Lovelace" />
      <FieldDescription>Your full name, as it appears on your profile.</FieldDescription>
    </Field>
  ),
}

export const Horizontal: Story = {
  args: { orientation: 'horizontal' },
  render: (args) => (
    <Field {...args} className="w-96">
      <FieldContent>
        <FieldLabel htmlFor="story-field-email">Email notifications</FieldLabel>
        <FieldDescription>Receive updates about your account via email.</FieldDescription>
      </FieldContent>
      <Switch id="story-field-email" defaultChecked />
    </Field>
  ),
}

export const WithError: Story = {
  render: (args) => (
    <Field {...args} className="w-72" data-invalid="true">
      <FieldLabel htmlFor="story-field-error">Email</FieldLabel>
      <Input id="story-field-error" aria-invalid defaultValue="not-an-email" />
      <FieldError errors={[{ message: 'Please enter a valid email address.' }]} />
    </Field>
  ),
}

export const FieldSetExample: Story = {
  render: () => (
    <FieldSet className="w-96">
      <FieldLegend>Notifications</FieldLegend>
      <FieldGroup>
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="story-fieldset-email">Email notifications</FieldLabel>
            <FieldDescription>Receive updates about your account via email.</FieldDescription>
          </FieldContent>
          <Switch id="story-fieldset-email" defaultChecked />
        </Field>
        <FieldSeparator />
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="story-fieldset-sms">SMS notifications</FieldLabel>
            <FieldDescription>Receive updates about your account via text.</FieldDescription>
          </FieldContent>
          <Switch id="story-fieldset-sms" />
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
}
