import * as React from "react"
import Header from '../components/_header'
import Footer from '../components/_footer'
import '../scss/index.scss'
import Tick from '../assets/tick.svg'
import {Link} from "gatsby";

const YourNotesPage = () => {
  return (
    <main className="notes">
      <Header headerText="NOTES" />
      <section className="container" id="main">
          <div className="row">
              <div className="col-lg-12">
                  <h1 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">Your notes</h1>
                  <p className="sm-type-lead">Your notes are listed below. Check your notes for feedback.</p>
                  <ul className="completed-nav">
                      <li className="sm-type-lead"><Link to="/your-notes-completed" className="completed-nav-completed">1. Research</Link> <Tick /></li>
                      <li className="sm-type-lead"><Link to="/your-notes-inprogress">2. Consult <span className="notification"></span></Link></li>
                  </ul>
              </div>
          </div>
      </section>
      <Footer />
    </main>
  )
}

export default YourNotesPage
