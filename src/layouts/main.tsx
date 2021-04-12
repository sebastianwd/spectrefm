import React from 'react'
import { Box, AppBar, Toolbar, Typography } from '@material-ui/core'
import styled from 'styled-components'
import { Sidebar } from '~/components'
import { useStoreState } from '~/hooks'
import Player from '~/components/player'

const MainLayout: React.FC = ({ children }) => {
  const leftDrawerWidth = useStoreState((state) => state.layout.leftDrawerWidth)

  return (
    <Box display="flex">
      <StyledAppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            style={{ fontFamily: 'Permanent Marker', fontWeight: 400 }}
          >
            SpectreFM
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <Sidebar />
      <Main leftDrawerWidth={leftDrawerWidth}>
        <Toolbar />
        {children}
        <PlayerSpacing />
      </Main>
      <StyledPlayer />
    </Box>
  )
}

const PlayerSpacing = styled.div`
  height: ${(props) => props.theme.spacing(12)}px;
`

const StyledPlayer = styled(Player)`
  position: fixed;
  bottom: 0;
  z-index: ${(props) => props.theme.zIndex.drawer + 1};
`

const StyledAppBar = styled(AppBar)`
  z-index: ${(props) => props.theme.zIndex.drawer + 1};
  background-color: ${(props) => props.theme.palette.secondary.dark};
`

const Main = styled.main<{ leftDrawerWidth: number }>`
  flex-grow: 1;
  margin: 0 auto;
  max-width: calc(1920px - ${(props) => props.leftDrawerWidth}px);
`

export default MainLayout
