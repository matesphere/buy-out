import React from "react"
import Header from '../components/_header'
import Footer from '../components/_footer'
import '../scss/index.scss'


import {graphql, Link, useStaticQuery} from "gatsby";
import {Helmet} from "react-helmet";
import TickSheet from "../assets/tick-sheet.svg";
import HelpIcon from "../assets/help-icon.svg";
import scrollTo from "gatsby-plugin-smoothscroll";

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

                <form className="login-student-form mb-4" id="form-login">

                    <div className="side-grey row mb-4">
                        <div className="col-lg-6 mb-2">
                            <p className="sm-type-guitar sm-type-guitar--medium">John Doe.</p>
                        </div>
                        <div className="col-lg-6 mb-2">
                            <p className="form-label sm-type-amp">Teams</p>
                            <div className="multiple-choice">
                                <input className="form-control" id="id1" type="radio" name="team" />
                                <label className="form-label" htmlFor="id1">Yellow</label>
                            </div>
                            <div className="multiple-choice">
                                <input className="form-control" id="id2" type="radio" name="team" />
                                <label className="form-label" htmlFor="id2">Red</label>
                            </div>
                            <div className="multiple-choice">
                                <input className="form-control" id="id4" type="radio" name="team" />
                                <label className="form-label" htmlFor="id4">Green</label>
                            </div>
                            <div className="multiple-choice">
                                <input className="form-control" id="id5" type="radio" name="team" />
                                <label className="form-label" htmlFor="id5">Blue</label>
                            </div>
                        </div>
                    </div>

                    <div className="side-grey row mb-4">
                        <div className="col-lg-6 mb-2">
                            <p className="sm-type-guitar sm-type-guitar--medium">Jane Doe.</p>
                        </div>
                        <div className="col-lg-6 mb-2">
                            <label className="form-label sm-type-amp">Teams</label>
                            <select className="form-control">
                                <option>Team Blue</option>
                                <option>Team Green</option>
                                <option>Team Yellow</option>
                            </select>
                        </div>
                    </div>

                    <div className="side-grey row mb-4">
                        <div className="col-lg-6 mb-2">
                            <p className="sm-type-guitar sm-type-guitar--medium">John Jones.</p>
                        </div>
                        <div className="col-lg-6 mb-2">
                            <label className="form-label sm-type-amp">Teams</label>
                            <select className="form-control">
                                <option>Team Blue</option>
                                <option>Team Green</option>
                                <option>Team Yellow</option>
                            </select>
                        </div>
                    </div>

                    <div className="side-grey row mb-4">
                        <div className="col-lg-6 mb-2">
                            <p className="sm-type-guitar sm-type-guitar--medium">Jane Smith.</p>
                        </div>
                        <div className="col-lg-6 mb-2">
                            <label className="form-label sm-type-amp">Teams</label>
                            <select className="form-control">
                                <option>Team Blue</option>
                                <option>Team Green</option>
                                <option>Team Yellow</option>
                            </select>
                        </div>
                    </div>



                  <div className="col-lg-12">
                    <p className="sm-type-lead"><a href="#">Add more names</a></p>
                  </div>

                  <button className="btn-solid-lg" to="/introduction">Save</button>
                </form>

              </div>
              <div className="col-lg-4">
                <p className="sm-type-guitar mb-2"><span className="side-icon side-icon-orange"><HelpIcon /></span>Helpful information</p>
                <div className="side-grey">
                    <p className="sm-type-lead sm-type-lead--medium">Team Yellow.</p>
                    <p className="sm-type-amp">John Doe</p>
                    <p className="sm-type-amp">Jane Doe</p>
                    <p className="sm-type-lead sm-type-lead--medium">Team Blue.</p>
                    <p className="sm-type-amp">John Doe</p>
                    <p className="sm-type-lead sm-type-lead--medium">Team Red.</p>
                    <p className="sm-type-amp">John Doe</p>
                    <p className="sm-type-amp">Jane Doe</p>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </main>
      </>
  )
}

export default IndexPage
