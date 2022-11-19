import type { TextProps, TextTag, DefaultTags, TextVariant, Breakpoint, ResponsiveVariants } from './types'

const DEFAULT_TAGS: DefaultTags = {
  'heading-1': 'h1',
  'heading-2': 'h2',
  'heading-3': 'h3',
  'heading-4': 'h4',
  'heading-5': 'h5',
  'heading-6': 'h6',
  'overline': 'span',
  'subtitle': 'p',
  'body': 'p'
}

const buildStylesFor = (variantName: TextVariant, breakpoint?: Breakpoint): string => {
  let styles = ['font-sans', 'text-black']
  if (variantName === 'heading-1') {
    styles = styles.concat(['text-6xl', 'font-bold uppercase'])
  } else if (variantName === 'heading-2') {
    styles = styles.concat(['text-5xl', 'font-bold uppercase'])
  } else if (variantName === 'heading-3') {
    styles = styles.concat(['text-4xl' ,'font-bold', 'uppercase'])
  } else if (variantName === 'heading-4') {
    styles = styles.concat(['text-3xl', 'font-bold', 'uppercase'])
  } else if (variantName === 'heading-5') {
    styles = styles.concat(['text-2xl', 'font-bold', 'uppercase'])
  } else if (variantName === 'heading-6') {
    styles = styles.concat(['text-lg', 'font-bold', 'uppercase'])
  } else if (variantName === 'overline') {
    styles = styles.concat(['text-sm', 'text-orange', 'font-normal', 'uppercase', 'tracking-super-wide'])
  } else if (variantName === 'subtitle') {
    styles = styles.concat(['text-xs', 'text-orange', 'font-bold', 'uppercase', 'tracking-widest'])
  } else if (variantName === 'body') {
    styles = styles.concat(['text-base', 'font-medium'])
  }

  if (breakpoint && breakpoint !== 'xs') {
    styles = styles.map(style => `${breakpoint}:${style}`)
  }

  return styles.join(' ')
}

const resolveStyles = (variant: TextVariant | ResponsiveVariants): string => {
  let styles = ''
  if (typeof(variant) === "string") {
    styles = buildStylesFor(variant)
  } else {
    const breakpoints = Object.keys(variant) as Breakpoint[]
    breakpoints.forEach((breakpoint) => {
      styles += ` ${buildStylesFor(variant[breakpoint] as TextVariant, breakpoint)}`
    })
  }

  return styles
}

const resolveElement = (variant: TextVariant | ResponsiveVariants, as?: TextTag): TextTag => {
  const isSingleVariant = typeof(variant) === 'string'
  return as || DEFAULT_TAGS[isSingleVariant ? variant : variant.xs]
}

const Text = ({ as, variant, className, children }: TextProps) => {
  const Element = resolveElement(variant, as)
  const styles = resolveStyles(variant)

  return (
    <Element className={`${styles} ${className || ''}`}>
      { children }
    </Element>
  )
}

export default Text
