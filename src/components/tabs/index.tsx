import { Tabs as ReactTabs, TabsProps } from 'react-tabs'
import { LazyTabPanel, TabButton, TabList } from './components'

interface TabsComponent extends React.FC<TabsProps> {
  LazyTabPanel: typeof LazyTabPanel
  TabList: typeof TabList
  TabButton: typeof TabButton
}

const Tabs: TabsComponent = (props) => <ReactTabs {...props} />

Tabs.LazyTabPanel = LazyTabPanel
Tabs.TabList = TabList
Tabs.TabButton = TabButton

export default Tabs
