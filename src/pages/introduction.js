import React from "react"
import Header from '../components/_header'
import Footer from '../components/_footer'
import '../scss/index.scss'

import TickSheet from "../assets/tick-sheet.svg";

import { Link } from "gatsby";
import {Helmet} from "react-helmet";

const IntroPage = () => {


  return (
      <>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Quest 1</title>
          <meta name="description" content="The description" />
          {/*<meta name="image" content={image} />*/}
          <meta property="og:url" content="url" />
          <meta property="og:title" content="Quest 1" />
          <meta property="og:description" content="The description" />
          {/*<meta property="og:image" content={image} />*/}
        </Helmet>
        <main className="homepage">
          <Header headerText="Introduction" />
          <section className="container" id="main">
            <div className="row">
              <div className="col-lg-8">
                <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">You are about to embark on the community buy out quest.</h2>
                <p className="sm-type-guitar mb-4">You are going to work as the board of a
                  community group who will lead the purchase of some land that has come up for sale.</p>

                <p className="sm-type-lead mb-4">You will each adopt a specific role within the board, but throughout, you will need to work as a
                  team. Each decision that you make must take into account the views of everyone in the team. That
                  does not mean that you will agree on everything, in fact it is inevitable that you will disagree at
                  times. However, you must work out how you will reach decisions when there is disagreement
                  amongst the team.</p>

                <div className="side-grey">
                  <h3 className="task ticker mb-2">
                    <span className="ticker-sheet"><TickSheet /></span>
                    <span className="sm-type-drum">Task to complete:</span>
                  </h3>
                  <p className="sm-type-amp mb-2">You will need to work together and decided who will do the following.</p>
                  <ol className="sm-type-guitar">
                    <li>Chair</li>
                    <li>Vice-chair</li>
                    <li>Secretary</li>
                    <li>Treasurer.</li>
                  </ol>
                  <p className="sm-type-amp">Some more information <a href="/about-the-roles">about the roles can be found here</a>.</p>

                </div>

                <h4 className="sm-type-guitar mb-2 mt-4">Enter the names for the roles below:</h4>
                <form className="mb-4">
                    <ul>
                      <li className="mb-2">
                        <label className="form-label sm-type-amp">Chair</label>
                        <input class="form-control" />
                      </li>
                      <li className="mb-2">
                        <label className="form-label sm-type-amp">Vice-chair</label>
                        <input class="form-control" />
                      </li>
                      <li className="mb-2">
                        <label className="form-label sm-type-amp">Secretary</label>
                        <input class="form-control" />
                      </li>
                      <li className="mb-2">
                        <label className="form-label sm-type-amp">Treasurer</label>
                        <input class="form-control" />
                      </li>
                    </ul>
                    <button className="btn-solid-lg" to="/introduction">Submit names</button>
                </form>

              </div>
              <div className="col-lg-4">
                <p className="sm-type-guitar mb-2">Helpful information</p>
                <div className="side-grey">
                  <p className="sm-type-amp ticker"><span className="ticker-sheet"><TickSheet /></span>You will need to work together and decided who will do the following.</p>
                  <ul className="sm-type-amp">
                    <li>Chair</li>
                    <li>Vice-chair</li>
                    <li>Secretary</li>
                    <li>Treasurer</li>
                  </ul>
                  <p className="sm-type-amp">Some more information <Link to="/about-the-roles">about the roles can be found here</Link>.</p>


                </div>
                <div className="side-grey">
                  <p className="sm-type-amp">A lot of the information you will need is available here.</p>
                  <p className="sm-type-amp"><Link to="/about-glenclas">Read more about Glenclas here</Link></p>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </>
  )
}

export default IntroPage
