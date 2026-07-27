import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet'

const meta = {
  title: 'ui/Sheet',
  component: Sheet,
  tags: ['autodocs'],
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

function renderSheet(side: 'top' | 'right' | 'bottom' | 'left') {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline">Open {side}</Button>} />
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile here.</SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose render={<Button variant="outline">Close</Button>} />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export const Top: Story = { render: () => renderSheet('top') }
export const Right: Story = { render: () => renderSheet('right') }
export const Bottom: Story = { render: () => renderSheet('bottom') }
export const Left: Story = { render: () => renderSheet('left') }
