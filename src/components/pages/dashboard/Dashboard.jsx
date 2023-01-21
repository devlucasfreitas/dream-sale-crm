import React from 'react'
import BarraLateral from '../../organisms/barraLateral/BarraLateral'
import CardInfo from '../../organisms/cardInfo/CardInfo'
import KanbanDnd from '../../organisms/kanBan/KanbanDnd'
import "./Dashboard.css"
// import Header from '../../organisms/header/Header'

export default function Dashboard() {
  return (
    <div className='corpo'>
      <div className='BarraLateral'>
      <BarraLateral />
      </div>
      <div>
      <div className='CardInfo'>
      <CardInfo />
    </div>
    <div className='Kanban'>
    <KanbanDnd />
    </div>
      </div>
     
    </div>
    
  )
}
