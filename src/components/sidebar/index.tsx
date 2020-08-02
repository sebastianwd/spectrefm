import React from 'react'
import { DrawerProps, Drawer, Toolbar } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import styled from 'styled-components'
import IconItem from './icon-item'
import { MusicFolderIcon } from '../icons'
import Link from '../link'

const Sidebar: React.FC<DrawerProps> = (props) => {
  return (
    <StyledDrawer variant="permanent" {...props}>
      <Toolbar />
      <Content>
        <Link href="/" passHref>
          <IconItem icon={<HomeIcon fontSize="large" />} label="Home" />
        </Link>
        <IconItem
          icon={<MusicFolderIcon fontSize="large" />}
          label="Playlists"
        />
      </Content>
    </StyledDrawer>
  )
}

const drawerWidth = 140

const StyledDrawer = styled(Drawer)`
  flex-shrink: 0;
  width: ${drawerWidth}px;

  > div {
    border: none;
    background-color: unset;
    width: ${drawerWidth}px;
  }
`

const Content = styled.div`
  background-color: ${(props) => props.theme.palette.primary.main};
  border-radius: ${(props) => props.theme.spacing(5)}px;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`

export default Sidebar
