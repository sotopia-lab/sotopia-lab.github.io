/* eslint-disable react/display-name */
import * as React from 'react'
import { Compass } from 'react-feather'

import { LoadingSpinner } from '@/components/LoadingSpinner'

import Button from '../Button'
import { TitleBar } from './TitleBar'

function ContentContainer(props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="mx-auto w-full max-w-3xl px-4 py-12 pb-10 md:px-8"
      {...props}
    />
  )
}

interface DetailContainerProps {
  children: React.ReactNode
}

const Container = React.forwardRef<HTMLDivElement, DetailContainerProps>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        id="main"
        className="relative flex max-h-screen w-full flex-col overflow-y-auto bg-white dark:bg-black"
        {...props}
      />
    )
  }
)

function Header(props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) {
  return <div className="space-y-3" {...props} />
}

interface TitleProps {
  children: React.ReactNode
}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
  return (
    <h1
      ref={ref}
      className="text-primary font-sans text-2xl font-bold xl:text-3xl"
      {...props}
    />
  )
})

function Loading() {
  return (
    <Container>
      <div className="flex flex-1 flex-col items-center justify-center">
        <LoadingSpinner />
      </div>
    </Container>
  )
}

function Null() {
  return (
    <Container>
      <TitleBar title="Not found" />
      <div className="flex flex-1 flex-col items-center justify-center space-y-6 px-8 text-center lg:px-16">
        <Compass className="text-secondary" size={32} />
        <div className="flex flex-col space-y-1">
          <p className="text-primary font-semibold">
            What you seek does not exist.
          </p>
          <p className="text-tertiary">
            Hey there, thank you for your curiosity. However, this site is still
            under construction, I will be fixing the deadlinks one by one. Email
            me if you have any questions.
          </p>
        </div>
        <Button href="/">Go home</Button>
      </div>
    </Container>
  )
}

export const Detail = {
  Container,
  ContentContainer,
  Header,
  Title,
  Loading,
  Null,
}
