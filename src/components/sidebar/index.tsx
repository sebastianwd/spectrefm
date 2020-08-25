import React, { useState } from 'react'
import { DrawerProps, Drawer, Toolbar } from '@material-ui/core'
import styled from 'styled-components'
import { useStoreState } from '@hooks'
import IconItem from './icon-item'
import { MusicFolderIcon, HomeIcon } from '../icons'
import Link from '../link'

const Sidebar: React.FC<DrawerProps> = (props) => {
  const [playlistDrawerOpen, setPlaylistDrawerOpen] = useState(false)

  const width = useStoreState((state) => state.layout.leftDrawerWidth)

  return (
    <StyledDrawer variant="permanent" {...props} width={width}>
      <Toolbar />
      <Content>
        <Link href="/" passHref>
          <IconItem icon={<HomeIcon style={{ fontSize: 28 }} />} label="Home" />
        </Link>
        <IconItem
          icon={<MusicFolderIcon style={{ fontSize: 32 }} />}
          label="Playlists"
          isActive={playlistDrawerOpen}
          onClick={() => setPlaylistDrawerOpen(!playlistDrawerOpen)}
        />
      </Content>
    </StyledDrawer>
  )
}

const StyledDrawer = styled(Drawer)<{ width: number }>`
  flex-shrink: 0;
  width: ${(props) => props.width}px;

  > div {
    border: none;
    background-color: unset;
    width: ${(props) => props.width}px;
  }
`

const Content = styled.aside`
  padding: ${(props) => props.theme.spacing(5)}px 0;
  background-color: ${(props) => props.theme.palette.background.paper};
  border-radius: ${(props) => props.theme.spacing(5)}px;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;

  > *:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing(3)}px;
  }
`

export default Sidebar
