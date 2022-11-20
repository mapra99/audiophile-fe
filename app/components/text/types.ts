import type { ReactNode } from 'react'

export type TextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
export type TextVariant = 'heading-1' | 'heading-2' | 'heading-3' | 'heading-4' | 'heading-5' | 'heading-6' | 'overline' | 'subtitle' | 'body'
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export interface TextProps {
  variant: TextVariant
  as?: TextTag
  className?: string
  children: ReactNode
}

export interface DefaultTags {
  'heading-1': TextTag
  'heading-2': TextTag
  'heading-3': TextTag
  'heading-4': TextTag
  'heading-5': TextTag
  'heading-6': TextTag
  'overline': TextTag
  'subtitle': TextTag
  'body': TextTag
}
