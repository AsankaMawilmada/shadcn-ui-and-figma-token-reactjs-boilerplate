import type { Meta, StoryObj } from '@storybook/react-vite'
import { FileText, X } from 'lucide-react'
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from './attachment'

const meta = {
  title: 'ui/Attachment',
  component: Attachment,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['idle', 'uploading', 'processing', 'error', 'done'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'xs'],
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof Attachment>

export default meta
type Story = StoryObj<typeof meta>

function renderAttachment(args: Story['args']) {
  return (
    <Attachment {...args}>
      <AttachmentMedia>
        <FileText />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>report.pdf</AttachmentTitle>
        <AttachmentDescription>2.4 MB</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Remove">
          <X />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
  )
}

export const Done: Story = {
  args: { state: 'done' },
  render: renderAttachment,
}

export const Uploading: Story = {
  args: { state: 'uploading' },
  render: renderAttachment,
}

export const Error: Story = {
  args: { state: 'error' },
  render: renderAttachment,
}

export const Vertical: Story = {
  args: { state: 'done', orientation: 'vertical' },
  render: renderAttachment,
}
