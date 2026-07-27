import type { Meta, StoryObj } from '@storybook/react-vite'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './carousel'

const meta = {
  title: 'ui/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Carousel {...args} className="w-56">
      <CarouselContent>
        {[1, 2, 3].map((n) => (
          <CarouselItem key={n}>
            <div className="flex h-32 items-center justify-center rounded-lg border text-2xl font-medium">
              {n}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: (args) => (
    <Carousel {...args} className="h-64 w-56">
      <CarouselContent className="h-64">
        {[1, 2, 3].map((n) => (
          <CarouselItem key={n}>
            <div className="flex h-32 items-center justify-center rounded-lg border text-2xl font-medium">
              {n}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}
