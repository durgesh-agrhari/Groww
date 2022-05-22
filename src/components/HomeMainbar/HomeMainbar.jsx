import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import QuestionList from './QuestionList'
import './HomeMainbar.css'
import dest from '../../assets/clau.PNG'
//import destd from '../../assets/Dashboard.PNG'

const HomeMainbar = () => {

  var questionsList = [{
    id: 1,
    votes: 3,
    noOfAnswers: 2,
    questinTitle: "What is the function?",
    questinBody: "It ment to be",
    questinTags: ['C','DBMS', ' Beast CSS ', 'Best HTML'],
    userPosted:"mono",
    askedOn:"jan 1"
  }, {
    id: 1,
    votes: 3,
    noOfAnswers: 2,
    questinTitle: "What is the function?",
    questinBody: "It ment to be",
    questinTags: ['C','DBMS', ' Beast CSS ', 'Best HTML'],
    userPosted:"mono",
    askedOn:"jan 1"
  }, {
    id: 1,
    votes: 3,
    noOfAnswers: 2,
    questinTitle: "What is the function?",
    questinBody: "It ment to be",
    questinTags: ['C','DBMS', ' Beast CSS ', 'Best Html'],
    userPosted:"mono",
    askedOn:"jan 1"
  }
  ]

  const location = useLocation()
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Stoks  Fixed Deposits HUBX</h1> : <h1>All Questions</h1>
        }
        <Link to='/AskQuestion' className="ask-btn" > Us Stokes</Link>
      </div>

      <div className='cal'>
      <img src={dest} alt='Groww' width='800'/>
      </div>
      {/* <div className='cal'>
      <img src={destd} alt='Groww' width='800' />
      </div> */}
      <div>
        {
           questionsList === null ?
          <h1>Loading.....</h1> :
          <>
            <p>{questionsList.length}Questions</p>
            <QuestionList questionsList={questionsList} />
          </>
        }
      </div>

    </div>
  )
}

export default HomeMainbar