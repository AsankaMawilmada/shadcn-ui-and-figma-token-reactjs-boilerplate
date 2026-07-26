import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from './chart'

const chartData = [
  { month: 'Jan', visitors: 186 },
  { month: 'Feb', visitors: 305 },
  { month: 'Mar', visitors: 237 },
  { month: 'Apr', visitors: 273 },
  { month: 'May', visitors: 209 },
]

const chartConfig = {
  visitors: { label: 'Visitors', color: 'var(--primary)' },
} satisfies ChartConfig

const meta = {
  title: 'ui/Chart',
  component: ChartContainer,
  tags: ['autodocs'],
  args: {
    config: chartConfig,
    children: <BarChart data={chartData} />,
  },
} satisfies Meta<typeof ChartContainer>

export default meta
type Story = StoryObj<typeof meta>

export const BarChartExample: Story = {
  render: () => (
    <ChartContainer config={chartConfig} className="h-56 w-96">
      <BarChart data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="visitors" fill="var(--color-visitors)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
}
