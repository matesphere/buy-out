import React from "react"
import LoginHeader from '../account/_header'
import AccountFooter from './_footer'
import '../../scss/index.scss'

import { Helmet } from "react-helmet";
import HelpIcon from "../../assets/help-icon.svg";
import Cross from '../../assets/cross.svg'

const TutorAddStudentPage = () => {

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
          <LoginHeader headerText="Add students" />
          <section className="container" id="main">
            <div className="row">
              <div className="col-lg-8">
                <h2 className="sm-type-drum sm-type-drum--medium mt-4">Add student to teams</h2>
                <p className="sm-type-lead sm-type-lead--medium mb-4">03.05.2020 - Class 4B 2020</p>

                <form className="mb-4 container" id="form-login" action="/account/tutor-add-student-to-teams">
                    <div className="side-grey row mb-4">
                        <div className="col-lg-6">
                            <p className="sm-type-guitar sm-type-guitar--medium">John Doe</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="multiple-choice">
                                <select className="form-control">
                                    <option>Yellow</option>
                                    <option>Red</option>
                                    <option>Teal</option>
                                    <option>Purple</option>
                                    <option>Brown</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="side-grey row mb-4">
                        <div className="col-lg-6">
                            <p className="sm-type-guitar sm-type-guitar--medium">Jane Doe</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="multiple-choice">
                                <select className="form-control">
                                    <option>Yellow</option>
                                    <option>Red</option>
                                    <option>Teal</option>
                                    <option>Purple</option>
                                    <option>Brown</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="side-grey row mb-4">
                        <div className="col-lg-6">
                            <p className="sm-type-guitar sm-type-guitar--medium">John Smith</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="multiple-choice">
                                <select className="form-control">
                                    <option>Yellow</option>
                                    <option>Red</option>
                                    <option>Teal</option>
                                    <option>Purple</option>
                                    <option>Brown</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="side-grey row mb-4">
                        <div className="col-lg-6">
                            <p className="sm-type-guitar sm-type-guitar--medium">John Smith</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="multiple-choice">
                                <select className="form-control">
                                    <option>Yellow</option>
                                    <option>Red</option>
                                    <option>Teal</option>
                                    <option>Purple</option>
                                    <option>Brown</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="side-grey row mb-4">
                        <div className="col-lg-6">
                            <p className="sm-type-guitar sm-type-guitar--medium">John Smith</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="multiple-choice">
                                <select className="form-control">
                                    <option>Yellow</option>
                                    <option>Red</option>
                                    <option>Teal</option>
                                    <option>Purple</option>
                                    <option>Brown</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="side-grey row mb-4">
                        <div className="col-lg-6">
                            <p className="sm-type-guitar sm-type-guitar--medium">John Smith</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="multiple-choice">
                                <select className="form-control">
                                    <option>Yellow</option>
                                    <option>Red</option>
                                    <option>Teal</option>
                                    <option>Purple</option>
                                    <option>Brown</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="side-grey row mb-4">
                        <div className="col-lg-6">
                            <p className="sm-type-guitar sm-type-guitar--medium">John Smith</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="multiple-choice">
                                <select className="form-control">
                                    <option>Yellow</option>
                                    <option>Red</option>
                                    <option>Teal</option>
                                    <option>Purple</option>
                                    <option>Brown</option>
                                </select>
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
          <AccountFooter />
        </main>
      </>
  )
}

export default TutorAddStudentPage
