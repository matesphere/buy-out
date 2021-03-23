import * as React from "react"
import Header from '../../components/_header'
import Footer from '../../components/_footer'
import '../../scss/index.scss'
import Tick from '../../assets/tick.svg'
import {Link} from "gatsby";
import HelpIcon from "../../assets/help-icon.svg";

const YourNotesPage = () => {
  return (
    <main className="notes">
      <Header headerText="The quest" />
      <section className="container" id="main">
          <div className="row">
              <div className="col-lg-8">
                  <h1 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">Team notes</h1>
                  <p className="sm-type-lead">Your notes are listed below. Check your notes for feedback.</p>
                  <ol className="completed-nav">
                      <li className="sm-type-lead"><Link to="/student/your-notes-completed" className="completed-nav-completed">Research</Link> <Tick /></li>
                      <li className="sm-type-lead"><Link to="/student/your-notes-inprogress">Consult <span className="notification"></span></Link></li>
                  </ol>
              </div>
              <div className="col-lg-4">
                  <p className="sm-type-guitar mb-2"><span className="side-icon side-icon-orange"><HelpIcon /></span>Helpful information</p>
                  <div className="side-grey">
                      <p className="sm-type-amp">Click on previous Quests. Look for notifications symbolised by a red dot.</p>
                  </div>
              </div>
          </div>
      </section>
      <Footer />
    </main>
  )
}

export default YourNotesPage
