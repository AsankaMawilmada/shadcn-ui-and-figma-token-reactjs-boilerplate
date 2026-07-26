import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChevronsUpDown, Home, Search, Settings } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from './sidebar'

const meta = {
  title: 'ui/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <SidebarProvider className="min-h-0 items-stretch">
      <div className="flex h-64 w-full overflow-hidden rounded-lg border">
        <Sidebar collapsible="none" className="border-r">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Application</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Home />
                      Home
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive>
                      <Search />
                      Search
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Settings />
                      Settings
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <div className="flex flex-1 items-center justify-center gap-2 text-sm text-muted-foreground">
          <ChevronsUpDown className="size-4" />
          Main content
        </div>
      </div>
    </SidebarProvider>
  ),
}
