import * as React from "react"
import Header from '../../components/_header'
import Footer from '../../components/_footer'
import '../../scss/index.scss'
import Submit from '../../assets/submit.svg'
import Tick from '../../assets/tick.svg'
import HelpIcon from "../../assets/help-icon.svg";
import { Link } from "gatsby";

const YourNotesPage = () => {
  return (
    <main className="notes">
      <Header headerText="Notes" />
      <section className="container" id="main">
          <div className="row" id="guest-2">
              <div className="col-lg-8">
                  <h1 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">Team notes</h1>
                  <ul className="completed-nav">
                      <li className="sm-type-lead"><Link to="/student/your-notes-completed" className="completed-nav-completed">1. Research</Link> <Tick /></li>
                      <li className="sm-type-lead"><Link to="/student/your-notes-inprogress">2. Consult <span className="notification"></span></Link></li>
                  </ul>

                  <div className="side-grey">
                      <div className="quest-step quest-step-page quest-step-complete">
                          <div className="quest-step-text">
                              <span className="quest-step-number">2</span>
                              CONSULT
                          </div>
                      </div>
                      <div className="mt-4 mb-4">
                          <h3 className="sm-type-guitar mb-2">Team notes</h3>
                          <p className="sm-type-lead">Chair: John Doe</p>
                          <p className="sm-type-lead">Vice-chair: Jane Doe</p>
                          <p className="sm-type-lead">Secretary: John Doe, Jane Doe</p>
                          <p className="sm-type-lead">Treasurer:</p>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4">
                  <p className="sm-type-guitar mb-2"><span className="side-icon side-icon-orange"><HelpIcon /></span>Helpful information</p>
                  <div className="side-grey">
                      <h3 className="sm-type-guitar mb-2">Tutor notes</h3>
                      <ol>
                          <li>
                              <p className="sm-type-amp mb-4">It seems you have forgotten to assign a Treasurer, go back and re submit.</p>
                          </li>
                      </ol>
                      <button className="btn-solid-lg">
                          <Submit />
                          Update notes
                      </button>
                  </div>
              </div>
          </div>

      </section>
      <Footer />
    </main>
  )
}

export default YourNotesPage
