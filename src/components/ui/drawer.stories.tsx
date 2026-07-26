import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './drawer'

const meta = {
  title: 'ui/Drawer',
  component: Drawer,
  tags: ['autodocs'],
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Drawer {...args}>
      <DrawerTrigger render={<Button variant="outline">Open drawer</Button>} />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose render={<Button variant="outline">Cancel</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}
