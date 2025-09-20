import { memo } from 'react'

interface TechIconProps {
  name: 'python' | 'pytorch' | 'tensorflow' | 'flutter' | 'r' | 'julia'
  size?: number
  className?: string
}

function TechIcon({ name, size = 20, className = '' }: TechIconProps) {
  return (
    <img
      src={`/icons/${name}.svg`}
      alt={`${name} technology icon`}
      width={size}
      height={size}
      className={`${className} select-none`}
      style={{ minWidth: size, minHeight: size }}
      loading="lazy"
      decoding="async"
    />
  )
}

export default memo(TechIcon)