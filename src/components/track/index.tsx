import React from 'react'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  Grid,
} from '@material-ui/core'
import styled from 'styled-components'
import { PlayArrow } from '@material-ui/icons'

interface Props {
  title: string
  playcount?: string | null
}

const Track: React.FC<Props> = (props) => {
  const { title, playcount } = props

  return (
    <Container button>
      <ListItemIcon>
        <IconButton edge="start" aria-label="play">
          <PlayArrow />
        </IconButton>
      </ListItemIcon>
      <ListItemText disableTypography>
        <Grid container spacing={1}>
          <Grid item xs={6} zeroMinWidth>
            <Typography
              variant="subtitle2"
              color="textPrimary"
              noWrap
              style={{ fontWeight: 400 }}
            >
              {title}
            </Typography>
          </Grid>
          <Grid item xs={2} md={1} zeroMinWidth>
            {playcount && (
              <Typography
                variant="body2"
                noWrap
                color="textSecondary"
                style={{ fontSize: 14 }}
              >
                {playcount}
              </Typography>
            )}
          </Grid>
        </Grid>
      </ListItemText>
    </Container>
  )
}

const Container = styled(ListItem)`
  height: ${(props) => props.theme.spacing(6)}px;
  border-radius: ${(props) => props.theme.spacing(3)}px;

  .MuiListItemText-root {
    user-select: text;
  }
`

export default Track
