import type { ProgressBarProps } from "./types"

const ProgressBar = ({ progress }: ProgressBarProps) => {
  console.log({ progress })
  return (
    <div className="w-full">
      <div style={{width: progress}} className="h-1 bg-orange transition-all" />
    </div>
  )
}

export default ProgressBar
