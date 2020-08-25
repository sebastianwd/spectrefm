import React, { MouseEventHandler } from 'react'
import { ListItem, IconButton, Typography, Grid } from '@material-ui/core'
import styled from 'styled-components'
import { FavoriteBorder } from '@material-ui/icons'

interface Props {
  title: string
  playcount?: string | null
  number?: number
  onClick?: MouseEventHandler<HTMLDivElement>
  loading?: boolean
}

const Track: React.FC<Props> = (props) => {
  const { title, playcount, number, onClick, loading } = props

  return (
    <Container button onClick={onClick}>
      <LeftActions>
        <NumberLabel variant="caption" color="textPrimary" noWrap>
          {number}
        </NumberLabel>
        <IconButton edge="start" aria-label="play" size="small">
          <FavoriteBorder fontSize="small" />
        </IconButton>
      </LeftActions>
      <Grid container spacing={1}>
        <Grid item xs={6} zeroMinWidth>
          <Typography variant="body2" color="textPrimary" noWrap component="p">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={2} md={1} zeroMinWidth>
          {playcount && (
            <Typography
              variant="body2"
              noWrap
              color="textSecondary"
              component="p"
            >
              {playcount}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}

const Container = styled(ListItem)`
  height: ${(props) => props.theme.spacing(6)}px;
  border-radius: ${(props) => props.theme.spacing(3)}px;
`

const NumberLabel = styled(Typography).attrs(() => ({
  component: 'span',
}))`
  direction: rtl;
  display: block;
`

const LeftActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-right: ${(props) => props.theme.spacing(2)}px;
  width: ${(props) => props.theme.spacing(8)}px;

  ${NumberLabel} {
    margin-right: auto;
    max-width: ${(props) => props.theme.spacing(4)}px;
  }
`

export default Track
