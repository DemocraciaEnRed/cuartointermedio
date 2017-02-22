import React, { Component } from 'react'
import { Link } from 'react-router'
import forumStore from 'lib/stores/forum-store/forum-store'

export default class HomeMultiForum extends Component {
  constructor (props) {
    super(props)

    this.state = {
      forums: []
    }
  }

  componentWillMount () {
    forumStore.findAll({
      limit: 50
    }).then((forums) => {
      this.setState({
        forums: forums
      })
    }).catch((err) => {
      console.error(err)

      this.setState({
        forums: []
      })
    })
  }

  render (props)  {
    return (
      <div className='ext-home-multiforum'>
        <div className='jumbotron'>
          <div className='container'>
            <h1 className='display-3'>Cuarto Intermedio</h1>
            <p className='lead'>Aquí encontrarán una desagregación de los 4 últimos capítulos del documento <strong>“Principios y valores compartidos del Frente Amplio”</strong>, que serán sometidos a debate y aprobación por el Congreso cuando reanude su sesión, ya que el primero fue aprobado con sustantivas enmiendas el pasado noviembre.</p>
          </div>
        </div>
        {this.state.forums.length > 0 && (
          <div className='ext-forum-card-container'>
            {this.state.forums.map((forum) => (
              <ForumCard key={forum.id} forum={forum} />
            ))}
          </div>
        )}
      </div>
    )
  }
}

const ForumCard = ({ forum }) => (
  <div className='ext-forum-card card'>
    <div className='card-block'>
      <h3 className='card-title'>{ forum.title }</h3>
      <p className='card-text'>{ forum.summary }</p>
      <Link className='btn btn-primary' to={ forum.url }>
        Ver Artículos &gt;
      </Link>
    </div>
  </div>
)
