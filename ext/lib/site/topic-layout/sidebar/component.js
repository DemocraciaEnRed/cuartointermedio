import Sidebar from 'lib/site/topic-layout/sidebar/component'

export default class ExtSidebar extends Sidebar {
  constructor (props) {
    super(props)

    this.state.filterCurrentSort = 'by-title-asc'
  }
}
