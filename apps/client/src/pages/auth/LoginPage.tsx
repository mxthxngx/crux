import React from 'react'
import AuthLayout from './AuthLayout'
import { Input } from '@crux/ui/components/input'
import { Button } from '@crux/ui/components/button'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import SocialAuthButton from '@/components/SocialAuthButton'
import SeparatorWithText from '@/components/SeparatorWithText'
import { Link } from '@tanstack/react-router'

export default function LoginPage() {
  const handleGoogleLogin = () => {}
  const handleGithubLogin = () => {}

  return (
    <AuthLayout title="Sign in to Crux">
      <h1 className="text-xl font-medium mb-8 text-muted-foreground">
        Use one of the following methods to continue
      </h1>
      <SocialAuthButton
        icon={<FcGoogle className="w-8 h-8" />}
        text="Continue with Google"
        onClick={handleGoogleLogin}
      />
      <SocialAuthButton
        icon={<FaGithub className="w-8 h-8" />}
        text="Continue with Github"
        onClick={handleGithubLogin}
      />
      <SeparatorWithText text="OR" />
      <form className="space-y-4">
        <Input
          type="email"
          isSingleLineInput={true}
          placeholder="name@email.com"
          required
        />
        <Input
          type="password"
          placeholder="password"
          isSingleLineInput={true}
          required
        />
        <Button className="w-full font-medium text-base" onClick={() => {}}>
          Continue
        </Button>
      </form>
      <div className="mt-4">
        <Link
          to="/signup"
          className="text-muted-foreground font-medium hover:text-primary-blue text-sm sm:text-base"
        >
          Don&apos;t have an account? Sign up
        </Link>
      </div>
    </AuthLayout>
  )
}
