import React, { forwardRef } from 'react'
import { Typography } from '@material-ui/core'
import { css } from 'styled-components'
import { lighten } from 'polished'

interface Props {
  icon?: JSX.Element
  label: string
  isActive?: boolean
  href?: string
  onClick?: () => void
}

const containerStyle = (isActive: boolean) => css`
  display: flex;
  border-radius: ${(props) => props.theme.spacing(isActive ? 3 : 10)}px;
  color: ${(props) =>
    props.theme.palette.text[isActive ? 'primary' : 'secondary']};
  background-color: ${(props) =>
    isActive ? lighten(0.02, props.theme.palette.background.paper) : 'unset'};
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.theme.spacing(11)}px;
  transition: border-radius 0.4s ease-in -0.3s, color 0.2s;
  width: 80%;
`

const IconItem: React.FC<Props> = forwardRef((props, ref) => {
  const { icon, label, isActive, onClick, href } = props

  const content = (
    <>
      {icon}
      <Typography variant="subtitle2">{label}</Typography>
    </>
  )

  const style = containerStyle(!!isActive)

  if (href) {
    return (
      <a
        css={style}
        href={href}
        ref={ref as React.LegacyRef<HTMLAnchorElement>}
        onClick={onClick}
      >
        {content}
      </a>
    )
  }

  return (
    <div
      role="button"
      css={style}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      onKeyDown={onClick}
      tabIndex={0}
    >
      {content}
    </div>
  )
})

IconItem.displayName = 'IconItem'

export default IconItem
