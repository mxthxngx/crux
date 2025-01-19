import React, { useState } from 'react'
import AuthLayout from './AuthLayout'
import { Input } from '@crux/ui/components/input'
import { Button } from '@crux/ui/components/button'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import SocialAuthButton from '@/components/SocialAuthButton'
import SeparatorWithText from '@/components/SeparatorWithText'
import * as yup from 'yup'
import { Link, useNavigate } from '@tanstack/react-router'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleGoogleSignup = () => {}
  const handleGithubSignup = () => {}

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      navigate({ to: '/about' })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <AuthLayout title="Sign up to Crux" isSignupPage={true}>
      <h1 className="text-xl font-medium mb-4 text-muted-foreground">
        Use one of the following methods to continue
      </h1>
      <SocialAuthButton
        icon={<FcGoogle className="w-8 h-8" />}
        text="Continue with Google"
        onClick={handleGoogleSignup}
      />
      <SocialAuthButton
        icon={<FaGithub className="w-8 h-8" />}
        text="Continue with Github"
        onClick={handleGithubSignup}
      />
      <SeparatorWithText text="OR" />
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <Input
            type="email"
            isSingleLineInput={true}
            placeholder="name@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <Button className="w-full font-medium text-base" type="submit">
          Continue
        </Button>
      </form>
      <div className="mt-4">
        <Link
          to="/login"
          className="text-muted-foreground font-medium hover:text-primary-blue text-sm sm:text-base"
        >
          Already have an account? Login
        </Link>
      </div>
    </AuthLayout>
  )
}
