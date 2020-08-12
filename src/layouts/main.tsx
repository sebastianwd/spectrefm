import React from 'react'
import { Box, AppBar, Toolbar, Typography } from '@material-ui/core'
import styled from 'styled-components'
import { Sidebar } from '@components'
import { useStoreState } from '@hooks'

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
      </Main>
    </Box>
  )
}

const StyledAppBar = styled(AppBar)`
  z-index: ${(props) => props.theme.zIndex.drawer + 1};
  background-color: ${(props) => props.theme.palette.secondary.dark};
`

const Main = styled.main<{ leftDrawerWidth: number }>`
  flex-grow: 1;
  max-width: calc(100vw - ${(props) => props.leftDrawerWidth}px);
`

export default MainLayout
