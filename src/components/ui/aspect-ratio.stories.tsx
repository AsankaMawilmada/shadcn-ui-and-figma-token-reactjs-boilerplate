import type { Meta, StoryObj } from '@storybook/react-vite'
import { AspectRatio } from './aspect-ratio'

const meta = {
  title: 'ui/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  argTypes: {
    ratio: { control: 'number' },
  },
  args: {
    ratio: 16 / 9,
  },
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

export const Widescreen: Story = {
  render: (args) => (
    <div className="w-80">
      <AspectRatio {...args} className="overflow-hidden rounded-lg bg-muted">
        <div className="flex size-full items-center justify-center text-sm text-muted-foreground">
          16:9
        </div>
      </AspectRatio>
    </div>
  ),
}

export const Square: Story = {
  args: { ratio: 1 },
  render: (args) => (
    <div className="w-60">
      <AspectRatio {...args} className="overflow-hidden rounded-lg bg-muted">
        <div className="flex size-full items-center justify-center text-sm text-muted-foreground">
          1:1
        </div>
      </AspectRatio>
    </div>
  ),
}

export const Portrait: Story = {
  args: { ratio: 3 / 4 },
  render: (args) => (
    <div className="w-48">
      <AspectRatio {...args} className="overflow-hidden rounded-lg bg-muted">
        <div className="flex size-full items-center justify-center text-sm text-muted-foreground">
          3:4
        </div>
      </AspectRatio>
    </div>
  ),
}
