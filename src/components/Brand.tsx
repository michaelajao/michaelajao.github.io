import { ICON_SYMBOLS, LOCKUP_INNER } from './brand-data'
import type { IconId } from '@/content/site'

/** SVG sprite: the L3 lockup and the profile icons. Rendered once in the layout. */
export function Sprite() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: 'absolute' }}
      aria-hidden="true"
      focusable="false"
      dangerouslySetInnerHTML={{
        __html: `<defs><symbol id="lockup" viewBox="10 24 350 76">${LOCKUP_INNER}</symbol>${ICON_SYMBOLS}</defs>`,
      }}
    />
  )
}

export function Lockup() {
  return (
    <svg className="lk" viewBox="10 24 350 76" focusable="false" aria-hidden="true">
      <use href="#lockup" />
    </svg>
  )
}

export function Icon({ id }: { id: IconId }) {
  return (
    <svg className="pi" aria-hidden="true" focusable="false">
      <use href={`#ic-${id}`} />
    </svg>
  )
}

export function Arr({ children = '→' }: { children?: string }) {
  return (
    <span className="arr" aria-hidden="true">
      {children}
    </span>
  )
}
