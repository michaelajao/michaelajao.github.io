import { memo } from 'react'

interface TechIconProps {
  name: 'python' | 'pytorch' | 'tensorflow' | 'flutter' | 'r' | 'julia'
  size?: number
  className?: string
}

// Map technology names to actual available icon files
const iconMapping: Record<string, { file: string; alt: string }> = {
  python: { file: 'python.png', alt: 'Python' },
  pytorch: { file: 'python.png', alt: 'PyTorch' }, // Fallback to Python icon
  tensorflow: { file: 'python.png', alt: 'TensorFlow' }, // Fallback to Python icon
  flutter: { file: 'flutter.svg', alt: 'Flutter' },
  r: { file: 'r-programming-language-icon.png', alt: 'R Programming' },
  julia: { file: 'julia.svg', alt: 'Julia' }
}

function TechIcon({ name, size = 20, className = '' }: TechIconProps) {
  const iconInfo = iconMapping[name] || { file: 'python.png', alt: name }

  return (
    <img
      src={`/icons/${iconInfo.file}`}
      alt={`${iconInfo.alt} technology icon`}
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