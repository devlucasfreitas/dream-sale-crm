import React from 'react'
import BarraLateral from '../../organisms/barraLateral/BarraLateral'
import Kanban from '../../organisms/kanBan/Kanban'
import "./Dashboard.css"
// import Header from '../../organisms/header/Header'

export default function Dashboard() {
  return (
    <div className='corpo'>
      <div className='BarraLateral'>
      <BarraLateral />
      </div>
    <div>
    <Kanban />
    </div>
    
    </div>
    
  )
}
