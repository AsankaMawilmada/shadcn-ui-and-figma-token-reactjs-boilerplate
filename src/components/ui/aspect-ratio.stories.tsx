import type { Meta, StoryObj } from '@storybook/react-vite'
import { AspectRatio } from './aspect-ratio'

const meta = {
  title: 'ui/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  args: {
    ratio: 16 / 9,
  },
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

export const Widescreen: Story = {
  render: () => (
    <div className="w-80">
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg bg-muted">
        <div className="flex size-full items-center justify-center text-sm text-muted-foreground">
          16:9
        </div>
      </AspectRatio>
    </div>
  ),
}

export const Square: Story = {
  render: () => (
    <div className="w-48">
      <AspectRatio ratio={1} className="overflow-hidden rounded-lg bg-muted">
        <div className="flex size-full items-center justify-center text-sm text-muted-foreground">
          1:1
        </div>
      </AspectRatio>
    </div>
  ),
}

export const Portrait: Story = {
  render: () => (
    <div className="w-40">
      <AspectRatio ratio={3 / 4} className="overflow-hidden rounded-lg bg-muted">
        <div className="flex size-full items-center justify-center text-sm text-muted-foreground">
          3:4
        </div>
      </AspectRatio>
    </div>
  ),
}
