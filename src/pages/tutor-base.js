import * as React from "react"
import Header from '../components/_header'
import Footer from '../components/_footer'
import '../scss/index.scss'
import Tick from '../assets/tick.svg'
import Cross from '../assets/cross.svg'
import {Helmet} from "react-helmet";

const YourNotesPage = () => {
  return (
    <>
      <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Your teams</title>
          <meta name="description" content="The description" />
          {/*<meta name="image" content={image} />*/}
          <meta property="og:url" content="url" />
          <meta property="og:title" content="Quest 1" />
          <meta property="og:description" content="The description" />
          {/*<meta property="og:image" content={image} />*/}
      </Helmet>
    <main className="notes">
      <Header headerText="Your teams" />
      <section className="container" id="main">
          <div className="row tutor mt-4">
              <div className="col-lg-12">
                  <h2 className="sm-type-guitar">Tutor name here</h2>
              </div>
          </div>

          <div className="row tutor mt-4">
              <div className="col-lg-4">
                  <div className="quest-step quest-step-complete step">
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
  </>
  )
}

export default YourNotesPage
