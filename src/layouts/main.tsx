import React from 'react'
import { Box, AppBar, Toolbar, Typography } from '@material-ui/core'
import styled from 'styled-components'
import { Sidebar } from '@components'

const MainLayout = ({ children }) => (
  <Box display="flex">
    <StyledAppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" noWrap>
          SpectreFM
        </Typography>
      </Toolbar>
    </StyledAppBar>
    <Sidebar />
    <Main>
      <Toolbar />
      {children}
    </Main>
  </Box>
)

const StyledAppBar = styled(AppBar)`
  z-index: ${(props) => props.theme.zIndex.drawer + 1};
`

const Main = styled.main`
  flex-grow: 1;
  padding: ${(props) => props.theme.spacing(3)}px;
`

export default MainLayout
