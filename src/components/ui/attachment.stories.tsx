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
    state: { control: 'select', options: ['idle', 'uploading', 'processing', 'error', 'done'] },
    size: { control: 'select', options: ['default', 'sm', 'xs'] },
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
  },
} satisfies Meta<typeof Attachment>

export default meta
type Story = StoryObj<typeof meta>

function AttachmentExample(args: React.ComponentProps<typeof Attachment>) {
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

export const Idle: Story = {
  args: { state: 'idle' },
  render: (args) => <AttachmentExample {...args} />,
}

export const Uploading: Story = {
  args: { state: 'uploading' },
  render: (args) => <AttachmentExample {...args} />,
}

export const Processing: Story = {
  args: { state: 'processing' },
  render: (args) => <AttachmentExample {...args} />,
}

export const ErrorState: Story = {
  args: { state: 'error' },
  render: (args) => <AttachmentExample {...args} />,
}

export const Done: Story = {
  args: { state: 'done' },
  render: (args) => <AttachmentExample {...args} />,
}

export const Vertical: Story = {
  args: { state: 'done', orientation: 'vertical' },
  render: (args) => <AttachmentExample {...args} />,
}
