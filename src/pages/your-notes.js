import * as React from "react"
import Header from '../components/_header'
import Footer from '../components/_footer'
import '../scss/index.scss'
import Submit from '../assets/submit.svg'
import QuestBg from '../assets/quest-bg.svg'
import Tick from '../assets/tick.svg'
import {Link} from "gatsby";

const YourNotesPage = () => {
  return (
    <main className="notes">
      <Header headerText="the Quest" />
      <section className="container" id="main">
          <div className="row">
              <div className="col-lg-12">
                  <h1 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">Your Quests</h1>
                  <ul className="completed-nav">
                      <li className="sm-type-lead"><a href="#guest-1" className="completed-nav-completed">1. Research</a> <Tick /></li>
                      <li className="sm-type-lead"><a href="#guest-2">2. Consult <span className="notification"></span></a></li>
                      <li className="sm-type-lead"><a href="#guest-3">3. Lay the foundations</a></li>
                  </ul>
                  <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">Your notes</h2>
              </div>
          </div>
          <div className="row quest-notes" id="guest-1">
              <div className="col-lg-8">
                  <div className="quest-step quest-step-page quest-step-complete">
                      <QuestBg />
                      <div className="quest-step-text">
                          <span className="quest-step-number">1</span>
                          RESEARCH
                      </div>
                  </div>
                  <div className="mt-4 mb-4">
                      <p className="sm-type-lead mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex mi, sollicitudin in mauris et, consequat dapibus sapien. Proin varius luctus sapien in rhoncus. Quisque sed cursus eros. Morbi viverra faucibus est laoreet imperdiet. Donec ac blandit felis, eu sagittis justo. Quisque a erat fringilla, fermentum velit eget, lobortis nibh. Suspendisse dolor sem, scelerisque quis volutpat et, elementum consequat lectus. Mauris id ullamcorper est, quis consectetur sem. Morbi eget ipsum elementum, lacinia velit sed, accumsan quam. Curabitur sed ligula rutrum, hendrerit erat ut, porttitor diam. Phasellus vestibulum lacus est. Aliquam erat volutpat. In pretium sed orci in cursus.</p>
                      <p className="sm-type-lead mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex mi, sollicitudin in mauris et, consequat dapibus sapien. Proin varius luctus sapien in rhoncus. Quisque sed cursus eros. Morbi viverra faucibus est laoreet imperdiet. Donec ac blandit felis, eu sagittis justo. Quisque a erat fringilla, fermentum velit eget, lobortis nibh. Suspendisse dolor sem, scelerisque quis volutpat et, elementum consequat lectus. Mauris id ullamcorper est, quis consectetur sem. Morbi eget ipsum elementum, lacinia velit sed, accumsan quam. Curabitur sed ligula rutrum, hendrerit erat ut, porttitor diam. Phasellus vestibulum lacus est. Aliquam erat volutpat. In pretium sed orci in cursus.</p>
                      <p className="sm-type-drum mb-4">Tutor notes</p>
                      <p className="sm-type-lead mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex mi, sollicitudin in mauris et, consequat dapibus sapien. Proin varius luctus sapien in rhoncus. Quisque sed cursus eros. Morbi viverra faucibus est laoreet imperdiet. Donec ac blandit felis, eu sagittis justo. Quisque a erat fringilla, fermentum velit eget, lobortis nibh. Suspendisse dolor sem, scelerisque quis volutpat et, elementum consequat lectus. Mauris id ullamcorper est, quis consectetur sem. Morbi eget ipsum elementum, lacinia velit sed, accumsan quam. Curabitur sed ligula rutrum, hendrerit erat ut, porttitor diam. Phasellus vestibulum lacus est. Aliquam erat volutpat. In pretium sed orci in cursus.</p>
                      <p className="sm-type-lead mb-4">
                          <ul className="completed-nav">
                              <li className="sm-type-lead"><a href="#guest-1" className="completed-nav-completed">Completed</a> <Tick /></li>
                          </ul>
                      </p>
                  </div>
              </div>
              <div className="col-lg-4">
                  <div className="side-color">
                      <div className="side-color-text">
                          <p className="sm-type-guitar">Congratulations?</p>
                          <p className="sm-type-amp mb-4">You have completed Quest 1.</p>
                          <Tick />
                      </div>
                  </div>
              </div>
          </div>

          <div className="row quest-notes" id="guest-2">
              <div className="col-lg-8">
                  <div className="quest-step quest-step-page quest-step-complete">
                      <QuestBg />
                      <div className="quest-step-text">
                          <span className="quest-step-number">2</span>
                          CONSULT
                      </div>
                  </div>
                  <div className="mt-4 mb-4">
                      <p className="sm-type-lead mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex mi, sollicitudin in mauris et, consequat dapibus sapien. Proin varius luctus sapien in rhoncus. Quisque sed cursus eros. Morbi viverra faucibus est laoreet imperdiet. Donec ac blandit felis, eu sagittis justo. Quisque a erat fringilla, fermentum velit eget, lobortis nibh. Suspendisse dolor sem, scelerisque quis volutpat et, elementum consequat lectus. Mauris id ullamcorper est, quis consectetur sem. Morbi eget ipsum elementum, lacinia velit sed, accumsan quam. Curabitur sed ligula rutrum, hendrerit erat ut, porttitor diam. Phasellus vestibulum lacus est. Aliquam erat volutpat. In pretium sed orci in cursus.</p>
                      <p className="sm-type-lead mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex mi, sollicitudin in mauris et, consequat dapibus sapien. Proin varius luctus sapien in rhoncus. Quisque sed cursus eros. Morbi viverra faucibus est laoreet imperdiet. Donec ac blandit felis, eu sagittis justo. Quisque a erat fringilla, fermentum velit eget, lobortis nibh. Suspendisse dolor sem, scelerisque quis volutpat et, elementum consequat lectus. Mauris id ullamcorper est, quis consectetur sem. Morbi eget ipsum elementum, lacinia velit sed, accumsan quam. Curabitur sed ligula rutrum, hendrerit erat ut, porttitor diam. Phasellus vestibulum lacus est. Aliquam erat volutpat. In pretium sed orci in cursus.</p>
                      <p className="sm-type-drum tutor-note mb-4">Tutor notes</p>
                      <p className="sm-type-lead mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex mi, sollicitudin in mauris et, consequat dapibus sapien. Proin varius luctus sapien in rhoncus. Quisque sed cursus eros. Morbi viverra faucibus est laoreet imperdiet. Donec ac blandit felis, eu sagittis justo. Quisque a erat fringilla, fermentum velit eget, lobortis nibh. Suspendisse dolor sem, scelerisque quis volutpat et, elementum consequat lectus. Mauris id ullamcorper est, quis consectetur sem. Morbi eget ipsum elementum, lacinia velit sed, accumsan quam. Curabitur sed ligula rutrum, hendrerit erat ut, porttitor diam. Phasellus vestibulum lacus est. Aliquam erat volutpat. In pretium sed orci in cursus.</p>
                  </div>
              </div>
              <div className="col-lg-4">
                  <div className="side-color">
                      <div className="side-color-text">
                          <p className="sm-type-guitar">Things to remember</p>
                          <ul>
                              <li className="sm-type-amp mb-2">No move on to submitting your findings.</li>
                              <li className="sm-type-amp mb-2">No move on to submitting your findings.</li>
                              <li className="sm-type-amp mb-2">No move on to submitting your findings.</li>
                              <li className="sm-type-amp mb-2">No move on to submitting your findings.</li>
                          </ul>
                          <p className="sm-type-lead">In order to move on you need to read the tutor notes and re-submit your findings.</p>
                          <button className="btn-solid-lg">
                              <Submit />
                              Update notes
                          </button>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row quest-notes" id="guest-3">
              <div className="col-lg-8">
                  <div className="quest-step quest-step-page quest-step-complete">
                      <QuestBg />
                      <div className="quest-step-text">
                          <span className="quest-step-number">3</span>
                          LAY THE FOUNDATIONS
                      </div>
                  </div>
                  <div className="mt-4 mb-4">
                      <label className="sm-type-lead" htmlFor="notes-1">Enter your notes here</label>
                      <textarea id ="notes-1" className="notes-textarea"></textarea>
                      <button className="btn-solid-lg">
                          <Submit />
                          Submit
                      </button>
                  </div>
              </div>

              <div className="col-lg-4">
                  <div className="side-color">
                      <div className="side-color-text">
                          <p className="sm-type-guitar">Things to remember</p>
                          <ul>
                              <li className="sm-type-amp mb-2">No move on to submitting your findings.</li>
                              <li className="sm-type-amp mb-2">No move on to submitting your findings.</li>
                              <li className="sm-type-amp mb-2">No move on to submitting your findings.</li>
                              <li className="sm-type-amp mb-2">No move on to submitting your findings.</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>

      </section>
      <Footer />
    </main>
  )
}

export default YourNotesPage
