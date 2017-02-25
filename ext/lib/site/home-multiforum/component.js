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
            <p className='lead'>Esta página interactiva se propone <strong>conectar</strong> a todo el <strong>pueblo frenteamplista</strong> de manera completamente <strong>horizontal e igualitaria</strong> con la excusa del cuarto intermedio abierto por el <strong>Congreso</strong> del FA. Pretende ser un laboratorio político de intervención, interconexión, transparencia y elaboración colectiva. Sectorizados o independientes, comités o grupos políticos pueden participar aquí aportando libremente todo tipo de <strong>opiniones, enmiendas, contribuciones a la organización</strong> o lo que juzguen importante, con solo registrarse. Un mayor detalle acerca de cómo hacerlo, los fundamentos de la iniciativa, autores y posibilidades se encuentra en <a href='https://docs.google.com/document/d/1RmFWOv3wyKEd29ysUSUFANXA2OwZJlrplJQj_bLOcq4' rel='noopener nofollow' target='_blank'>leer más</a>. Quedan invitados todos quienes se sientan frenteamplistas en la más <strong>plena igualdad.</strong></p>
            <p style={{textAlign: 'right'}}>
              <a href='https://docs.google.com/document/d/1RmFWOv3wyKEd29ysUSUFANXA2OwZJlrplJQj_bLOcq4' rel='noopener nofollow' target='_blank'>Leer más ></a>
            </p>
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
        Ver Parágrafos &gt;
      </Link>
    </div>
  </div>
)
