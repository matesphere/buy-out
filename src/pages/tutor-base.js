import * as React from "react"
import Header from '../components/_header'
import Footer from '../components/_footer'
import '../scss/index.scss'
import Tick from '../assets/tick.svg'
import Cross from '../assets/cross.svg'
import {Link} from "gatsby";
import QuestBg from "../assets/quest-bg.svg";

const YourNotesPage = () => {
  return (
    <main className="notes">
      <Header headerText="TUTOR LOGIN" />
      <section className="container" id="main">
          <div className="row tutor mt-4">
              <div className="col-lg-12">
                  <h2 className="sm-type-guitar">Tutor name here</h2>
              </div>
          </div>

          <div className="row tutor mt-4">
              <div className="col-lg-4">
                  <div className="quest-step quest-step-complete step">
                      <QuestBg />
                      <div className="quest-step-text">
                          <span className="quest-step-number">1</span>
                          Team one name
                      </div>
                  </div>
                  <div className="mt-3">
                      <p className="sm-type-amp">Johnny D</p>
                      <p className="sm-type-amp">Jane D</p>
                      <p className="sm-type-amp">Johnny D</p>
                      <p className="sm-type-amp">Jane D</p>
                  </div>
              </div>
              <div className="col-lg-8">

                  <ul className="steps">
                      <li>
                          <p className="steps-step sm-type-guitar">Step 1</p>
                          <div>
                              <Tick /><span>Completed</span>
                              <span><a href="#">student notes</a></span>
                              <span><a href="#">tutor notes</a></span>
                          </div>
                      </li>

                      <li>
                          <p className="steps-step sm-type-guitar">Step 2</p>
                          <div>
                              <Tick />
                              <span>Completed</span>
                              <span><a href="#">student notes</a></span>
                              <span><a href="#">tutor notes</a></span>
                          </div>
                      </li>

                      <li>
                          <p className="steps-step sm-type-guitar">Step 3</p>
                          <div>
                              <Cross />
                              <span>Submitted</span>
                              <span><a href="#">student notes</a></span>
                              <span><a href="#">add tutor notes</a></span>
                          </div>
                      </li>

                      <li>
                          <p className="steps-step sm-type-guitar">Step 4</p>
                          <div>
                              <Cross />
                              <span>LOCKED</span>
                              <span><a href="#">unlock step</a></span>
                          </div>
                      </li>

                      <li>
                          <p className="steps-step sm-type-guitar">Step 5</p>
                          <div>
                              <Cross />
                              <span>LOCKED</span>
                              <span><a href="#">unlock step</a></span>
                          </div>
                      </li>

                      <li>
                          <p className="steps-step sm-type-guitar">Step 6</p>
                          <div>
                              <Cross />
                              <span>LOCKED</span>
                              <span><a href="#">unlock step</a></span>
                          </div>
                      </li>

                      <li>
                          <p className="steps-step sm-type-guitar">Step 7</p>
                          <div>
                              <Cross />
                              <span>LOCKED</span>
                              <span><a href="#">unlock step</a></span>
                          </div>
                      </li>

                      <li>
                          <p className="steps-step sm-type-guitar">Step 8</p>
                          <div>
                              <Cross />
                              <span>LOCKED</span>
                              <span><a href="#">unlock step</a></span>
                          </div>
                      </li>
                  </ul>

              </div>
          </div>


          <div className="row tutor mt-4">
              <div className="col-lg-4">
                  <div className="quest-step quest-step-complete step">
                      <QuestBg />
                      <div className="quest-step-text">
                          <span className="quest-step-number">2</span>
                          Team two name
                      </div>
                  </div>
                  <div className="mt-3">
                      <p className="sm-type-amp">Johnny D</p>
                      <p className="sm-type-amp">Jane D</p>
                      <p className="sm-type-amp">Johnny D</p>
                      <p className="sm-type-amp">Jane D</p>
                  </div>
              </div>
              <div className="col-lg-8">

                  <ul className="steps">
                      <li>
                          <p className="steps-step sm-type-guitar">Step 1</p>
                          <div>
                              <Tick /><span>Completed</span>
                              <span><a href="#">student notes</a></span>
                              <span><a href="#">tutor notes</a></span>
                          </div>
                      </li>

                      <li>
                          <p className="steps-step sm-type-guitar">Step 2</p>
                          <div>
                              <Tick />
                              <span>Completed</span>
                              <span><a href="#">student notes</a></span>
                              <span><a href="#">tutor notes</a></span>
                          </div>
                      </li>

                      <li>
                          <p className="steps-step sm-type-guitar">Step 3</p>
                          <div>
                              <Tick />
                              <span>Completed</span>
                              <span><a href="#">student notes</a></span>
                              <span><a href="#">add tutor notes</a></span>
                          </div>
                      </li>

                      <li>
                          <p className="steps-step sm-type-guitar">Step 4</p>
                          <div>
                              <Tick />
                              <span>Completed</span>
                              <span><a href="#">student notes</a></span>
                              <span><a href="#">add tutor notes</a></span>
                          </div>
                      </li>

                      <li>
                          <p className="steps-step sm-type-guitar">Step 5</p>
                          <div>
                              <Cross />
                              <span>Submitted</span>
                              <span><a href="#">student notes</a></span>
                              <span><a href="#">add tutor notes</a></span>
                          </div>
                      </li>

                      <li>
                          <p className="steps-step sm-type-guitar">Step 6</p>
                          <div>
                              <Cross />
                              <span>LOCKED</span>
                              <span><a href="#">unlock step</a></span>
                          </div>
                      </li>

                      <li>
                          <p className="steps-step sm-type-guitar">Step 7</p>
                          <div>
                              <Cross />
                              <span>LOCKED</span>
                              <span><a href="#">unlock step</a></span>
                          </div>
                      </li>

                      <li>
                          <p className="steps-step sm-type-guitar">Step 8</p>
                          <div>
                              <Cross />
                              <span>LOCKED</span>
                              <span><a href="#">unlock step</a></span>
                          </div>
                      </li>
                  </ul>

              </div>
          </div>
      </section>
      <Footer />
    </main>
  )
}

export default YourNotesPage
