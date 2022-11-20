import { useState } from 'react'
import type { ChangeEvent } from 'react'
import type { RadioInputProps } from './types'

const RadioInput = ({ id, label, className, onChange, checked, ...props }: RadioInputProps) => {
  const [isChecked, setIsChecked] = useState<boolean | undefined>(checked)

  let inputStyles = 'absolute left-4 top-5 appearance-none bg-white m-0 w-5 h-5 rounded-full border-2 border-gray ' // base, unchecked state
  inputStyles += 'flex items-center justify-center checked:before:block checked:before:w-2.5 checked:before:h-2.5 checked:before:bg-orange checked:before:rounded-full' // checked state

  const labelStyles = `py-4.5 px-13 text-sm border-2 border-gray rounded-lg font-bold hover:border-orange transition-all ${isChecked ? 'border-orange' : ''}`

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
    if (onChange) onChange(event)
  }

  return (
    <div className="flex relative">
      <input
        {...props}
        id={id}
        type="radio"
        className={`${inputStyles} ${className || ''}`}
        onChange={handleChange}
        checked={checked}
      />
      <label htmlFor={id} className={labelStyles}>
        { label }
      </label>
    </div>
  )
}

export default RadioInput
