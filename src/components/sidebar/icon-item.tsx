import React, { forwardRef } from 'react'
import { Typography } from '@material-ui/core'
import { css } from 'styled-components'

interface Props {
  icon?: JSX.Element
  label: string
  isActive?: boolean
  href?: string
}

interface AnchorProps {
  isActive: boolean
}
const containerStyle = (isActive) => css<AnchorProps>`
  display: flex;
  border-radius: ${(props) => props.theme.spacing(3)}px;
  background-color: ${(props) =>
    isActive ? props.theme.palette.primary.light : 'unset'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.theme.spacing(11)}px;
  width: 80%;
`

const IconItem: React.FC<Props> = forwardRef((props, ref) => {
  const { icon, label, isActive, href } = props

  const content = (
    <>
      {icon}
      <Typography>{label}</Typography>
    </>
  )

  const style = containerStyle(isActive)

  if (href) {
    return (
      <a
        css={style}
        href={href}
        ref={ref as React.LegacyRef<HTMLAnchorElement>}
      >
        {content}
      </a>
    )
  }

  return (
    <div role="button" css={style}>
      {content}
    </div>
  )
})

IconItem.displayName = 'IconItem'

export default IconItem
