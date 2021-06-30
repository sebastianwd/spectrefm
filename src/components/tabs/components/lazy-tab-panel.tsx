import { useEffect, useState } from 'react'
import { TabPanel as ReactTabPanel } from 'react-tabs'

export interface LazyTabComponent extends React.FC<{ selected?: boolean }> {
  tabsRole: string
}

const LazyTabPanel: LazyTabComponent = (props) => {
  const { selected } = props

  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    if (selected && !initialized) {
      setInitialized(true)
    }
  }, [selected, initialized])

  return <ReactTabPanel forceRender={initialized} {...props} />
}

LazyTabPanel.tabsRole = 'TabPanel'

export default LazyTabPanel
