import React from "react"
import Header from '../components/_header'
import Footer from '../components/_footer'
import '../scss/index.scss'


import {graphql, Link, useStaticQuery} from "gatsby";
import {Helmet} from "react-helmet";
import HelpIcon from "../assets/help-icon.svg";
import Cross from '../assets/cross.svg'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "cls-ppt3-no-text-crop-1024x322.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `)

  return (
      <>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Add students</title>
          <meta name="description" content="The description" />
          <meta property="og:url" content="url" />
          <meta property="og:title" content="Quest 1" />
          <meta property="og:description" content="The description" />
        </Helmet>

        <main className="the-quest">
          <Header headerText="Add students" />
          <section className="container" id="main">
            <div className="row">
              <div className="col-lg-8">
                <h2 className="sm-type-drum sm-type-drum--medium mt-4">Add student to teams</h2>

                <form className="mb-4 container" id="form-login">
                    <div className="side-grey row mb-4">
                        <div className="col-lg-12 mb-2">
                            <p className="sm-type-guitar sm-type-guitar--medium">John Doe.</p>
                            <div className="team-select">
                                <div className="multiple-choice">
                                    <input className="form-control" id="11" type="radio" name="team" />
                                    <label className="form-label" htmlFor="11">Yellow</label>
                                </div>
                                <div className="multiple-choice">
                                    <input className="form-control" id="22" type="radio" name="team" />
                                    <label className="form-label" htmlFor="22">Red</label>
                                </div>
                                <div className="multiple-choice">
                                    <input className="form-control" id="33" type="radio" name="team" />
                                    <label className="form-label" htmlFor="33">Teal</label>
                                </div>
                                <div className="multiple-choice">
                                    <input className="form-control" id="44" type="radio" name="team" />
                                    <label className="form-label" htmlFor="44">Purple</label>
                                </div>
                                <div className="multiple-choice">
                                    <input className="form-control" id="55" type="radio" name="team" />
                                    <label className="form-label" htmlFor="55">Brown</label>
                                </div>
                                <div className="multiple-choice">
                                    <input className="form-control" id="66" type="radio" name="team" />
                                    <label className="form-label" htmlFor="66">Orange</label>
                                </div>
                                <div className="multiple-choice">
                                    <input className="form-control" id="77" type="radio" name="team" />
                                    <label className="form-label" htmlFor="77">Blue</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="side-grey row mb-4">
                        <div className="col-lg-12 mb-2">
                            <p className="sm-type-guitar sm-type-guitar--medium">Jane Doe.</p>
                            <div className="team-select">
                                <div className="multiple-choice">
                                    <input className="form-control" id="1" type="radio" name="team2" />
                                    <label className="form-label" htmlFor="1">Yellow</label>
                                </div>
                                <div className="multiple-choice">
                                    <input className="form-control" id="2" type="radio" name="team2" />
                                    <label className="form-label" htmlFor="2">Red</label>
                                </div>
                                <div className="multiple-choice">
                                    <input className="form-control" id="3" type="radio" name="team2" />
                                    <label className="form-label" htmlFor="3">Teal</label>
                                </div>
                                <div className="multiple-choice">
                                    <input className="form-control" id="4" type="radio" name="team2" />
                                    <label className="form-label" htmlFor="4">Purple</label>
                                </div>
                                <div className="multiple-choice">
                                    <input className="form-control" id="5" type="radio" name="team2" />
                                    <label className="form-label" htmlFor="5">Brown</label>
                                </div>
                                <div className="multiple-choice">
                                    <input className="form-control" id="6" type="radio" name="team2" />
                                    <label className="form-label" htmlFor="6">Orange</label>
                                </div>
                                <div className="multiple-choice">
                                    <input className="form-control" id="7" type="radio" name="team2" />
                                    <label className="form-label" htmlFor="7">Pink</label>
                                </div>
                                <div className="multiple-choice">
                                    <input className="form-control" id="8" type="radio" name="team2" />
                                    <label className="form-label" htmlFor="8">Beige</label>
                                </div>
                                <div className="multiple-choice">
                                    <input className="form-control" id="9" type="radio" name="team2" />
                                    <label className="form-label" htmlFor="9">Gold</label>
                                </div>
                                <div className="multiple-choice">
                                    <input className="form-control" id="id5" type="radio" name="team" />
                                    <label className="form-label" htmlFor="q2">Silver</label>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>

              </div>
              <div className="col-lg-4">
                  <p className="sm-type-guitar mb-2"><span className="side-icon side-icon-orange"><HelpIcon /></span>Teams</p>
                  <div className="side-grey">
                      <p className="sm-type-leadguitar sm-type-lead--medium"><span className="yellowdot"></span> Team Yellow.</p>
                      <p className="sm-type-amp">John Doe <span className="cross-icon"><Cross /></span></p>
                      <p className="sm-type-amp">Jane Doe <span className="cross-icon"><Cross /></span></p>
                      <p className="sm-type-lead sm-type-lead--medium mt-4"><span className="tealdot"></span> Team Teal.</p>
                      <p className="sm-type-amp">John Doe <span className="cross-icon"><Cross /></span></p>
                      <p className="sm-type-lead sm-type-lead--medium mt-4"><span className="reddot"></span> Team Red.</p>
                      <p className="sm-type-amp">John Doe <span className="cross-icon"><Cross /></span></p>
                      <p className="sm-type-amp">Jane Doe <span className="cross-icon"><Cross /></span></p>
                      <p className="sm-type-lead-guitar sm-type-lead--medium mt-4"><span className="purpledot"></span> Team Purple.</p>
                      <p className="sm-type-amp"> John Doe <span className="cross-icon"><Cross /></span></p>
                      <p className="sm-type-amp">Jane Doe <span className="cross-icon"><Cross /></span></p>
                  </div>
                  <button className="btn-solid-lg mt-4" to="/introduction">Save teams</button>
              </div>
            </div>
          </section>
          <Footer />
        </main>
      </>
  )
}

export default IndexPage
