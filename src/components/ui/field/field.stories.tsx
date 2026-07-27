import type { Meta, StoryObj } from '@storybook/react-vite'
import { Switch } from '../switch'
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from './field'

const meta = {
  title: 'ui/Field',
  component: Field,
  tags: ['autodocs', '!dev'],
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
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
