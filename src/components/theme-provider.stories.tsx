import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { ThemeProvider } from './theme-provider'

const meta = {
  title: 'ui/ThemeProvider',
  component: ThemeProvider,
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeProvider>

export default meta
type Story = StoryObj<typeof meta>

const Demo = () => (
  <Card className="w-72">
    <CardHeader>
      <CardTitle>Themed card</CardTitle>
    </CardHeader>
    <CardContent>
      <Button>Primary action</Button>
    </CardContent>
  </Card>
)

export const Default: Story = {
  args: {
    theme: 'default',
    children: <Demo />,
  },
}
