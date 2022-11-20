import type { TextInputProps } from './types'

const TextInput = ({label, id, className, error, ...props}: TextInputProps) => {
  let inputStyles = 'px-6 py-4.5 border-2 border-gray text-sm placehodlder:text-gray font-bold rounded-lg focus:border-orange focus:outline-orange focus:caret-orange '
  if (error) inputStyles += 'border-danger'

  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-2.5">
        <label htmlFor={id} className={`text-xs font-bold leading-4 ${error ? 'text-danger' : ''}`}>
          { label }
        </label>

        { error && (
          <span className="text-xs font-medium leading-4 text-danger">
            { error }
          </span>
        )}
      </div>
      <input
        {...props}
        id = {id}
        className={`${inputStyles} ${className || ''}`}
      />
    </div>
  )
}

export default TextInput
