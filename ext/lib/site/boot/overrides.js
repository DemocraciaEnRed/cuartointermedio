import * as HomeMultiForum from 'lib/site/home-multiforum/component'
import HomeMultiForumExt from 'ext/lib/site/home-multiforum/component'

import * as HomeForum from 'lib/site/home-forum/component'
import HomeForumExt from 'ext/lib/site/home-forum/component'

import * as Sidebar from 'lib/site/topic-layout/sidebar/component'
import SidebarExt from 'ext/lib/site/topic-layout/sidebar/component'

HomeMultiForum.default = HomeMultiForumExt
HomeForum.default = HomeForumExt
Sidebar.default = SidebarExt
