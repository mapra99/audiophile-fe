import type { ButtonVariant } from './types'

export const resolveStyles = (variant: ButtonVariant): string => {
  let styles = 'block px-8 py-4 uppercase font-sans text-xs tracking-widest font-bold transition-colors focus:outline-orange '
  if (variant === 'primary') {
    styles += 'bg-orange hover:bg-orange-light text-white'
  } else if (variant === 'secondary') {
    styles += 'bg-white hover:bg-black text-black hover:text-white border-2 border-black'
  } else if (variant === 'tertiary') {
    styles += 'flex items-center gap-2.5 text-black hover:text-orange'
  }

  return styles
}
