import React from 'react'
import { Button } from '@crux/ui/components/button'

interface SocialAuthButtonProps {
  icon?: React.ReactNode
  text: string
  onClick: () => void
}

const SocialAuthButton: React.FC<SocialAuthButtonProps> = ({
  icon,
  text,
  onClick,
}) => (
  <Button
    disabled={false}
    variant="outline"
    onClick={onClick}
    className="w-full border-2 text-base font-medium mb-4"
    size="lg"
  >
    {icon}
    {text}
  </Button>
)

export default SocialAuthButton
