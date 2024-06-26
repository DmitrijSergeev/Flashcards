import type { Meta, StoryObj } from '@storybook/react'

import { Table } from '@/components/ui/table/table'

const meta = {
  component: Table,
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
