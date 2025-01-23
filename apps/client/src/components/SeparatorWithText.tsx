import React from 'react'
import { Separator } from '@crux/ui/components/separator'

interface SeparatorWithTextProps {
  text: string
}

const SeparatorWithText: React.FC<SeparatorWithTextProps> = ({ text }) => (
  <div className="flex items-center justify-between">
    <Separator className="flex-1 my-8" />
    <span className="px-4">{text}</span>
    <Separator className="flex-1 my-8" />
  </div>
)

export default SeparatorWithText
