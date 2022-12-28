import type { RadioInputProps } from './types'

const RadioInput = ({ id, label, className, onChange, checked, ...props }: RadioInputProps) => {
  let inputStyles = 'absolute left-4 top-5 appearance-none bg-white m-0 w-5 h-5 rounded-full border-2 border-gray ' // base, unchecked state
  inputStyles += 'flex items-center justify-center checked:before:block checked:before:w-2.5 checked:before:h-2.5 checked:before:bg-orange checked:before:rounded-full' // checked state

  const labelStyles = `w-full py-4.5 px-13 text-sm border-2 border-gray rounded-lg font-bold hover:border-orange hover:cursor-pointer transition-all`

  return (
    <div className={`flex relative ${className || ''}`}>
      <input
        {...props}
        id={id}
        type="radio"
        className={inputStyles}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id} className={labelStyles}>
        { label }
      </label>
    </div>
  )
}

export default RadioInput
