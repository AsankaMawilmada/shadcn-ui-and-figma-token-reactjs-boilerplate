import type { Meta, StoryObj } from '@storybook/react-vite'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './resizable'

const meta = {
  title: 'ui/Resizable',
  component: ResizablePanelGroup,
  tags: ['autodocs', '!dev'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
  },
} satisfies Meta<typeof ResizablePanelGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <ResizablePanelGroup className="h-40 w-96 rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex size-full items-center justify-center text-sm">One</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex size-full items-center justify-center text-sm">Two</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ResizablePanelGroup orientation="vertical" className="h-64 w-64 rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex size-full items-center justify-center text-sm">Top</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex size-full items-center justify-center text-sm">Bottom</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}
