import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import urlBuilder from 'lib/url-builder'
import forumStore from 'lib/stores/forum-store/forum-store'
import topicStore from 'lib/stores/topic-store/topic-store'

export default class HomeForum extends Component {
  componentWillMount () {
    const name = this.props.params.forum

    forumStore.findOneByName(name)
      .then(({ id }) => topicStore.findAll({ forum: id }))
      .then((topics) => {
        if (topics.length === 0) return

        const topic = topics[0]

        const url = urlBuilder.for('site.topic', {
          forum: name,
          id: topic.id
        })

        browserHistory.push(url)
      })
      .catch((err) => {
        if (err.status === 404) browserHistory.push('/404')
        if (err.status === 401) browserHistory.push('/401')
      })
  }

  render = () => null
}
