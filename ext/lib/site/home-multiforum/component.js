import React, { Component } from 'react'
import { Link } from 'react-router'
import naturalCompare from 'string-natural-compare'
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
        forums: forums.sort((a, b) => naturalCompare(a.name, b.name))
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
            <p className='lead'>Esta página interactiva se propone conectar a todo el pueblo frenteamplista de manera completamente horizontal e igualitaria con la excusa del cuarto intermedio abierto por el Congreso del FA. Pretende ser un laboratorio político de intervención e interconexión. Sectorizados o independientes, comités o grupos políticos pueden participar aquí aportando libremente todo tipo de opiniones, enmiendas, contribuciones a la organización o lo que juzguen importante, con solo registrarse. Quedan invitados todos quienes se sientan frenteamplistas en la más plena igualdad.</p>
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
