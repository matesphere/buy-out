import React from "react"
import LoginHeader from '../account/_header'
import AccountFooter from './_footer'
import '../../scss/index.scss'


import {Helmet} from "react-helmet";
import HelpIcon from "../../assets/help-icon.svg";

const TutorAddPage = () => {

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
                <h2 className="sm-type-drum sm-type-drum--medium mt-4">Add student for Quest</h2>
                <div className="side-grey row mb-4">
                  <div className="col-lg-12">
                    <p className="sm-type-lead sm-type-lead--medium">03.05.2020 - Class 4B 2020</p>
                  </div>
                </div>

                <h2 className="sm-type-drum sm-type-drum--medium mt-4">Student details</h2>

                <form className="mb-4" id="form-login" action="/account/tutor-add-student-to-teams">

                  <div className="side-grey row mb-4">
                    <div className="col-lg-12">
                      <p className="sm-type-lead sm-type-lead--medium">Student 1.</p>
                    </div>
                    <div className="col-lg-6 mb-2">
                      <label className="form-label sm-type-amp">Name</label>
                      <input type="name" className="form-control"/>
                    </div>
                    <div className="col-lg-6 mb-2">
                      <label className="form-label sm-type-amp">Email</label>
                      <input type="email" className="form-control"/>
                    </div>
                  </div>

                  <div className="side-grey row mb-4">
                    <div className="col-lg-12">
                      <p className="sm-type-lead sm-type-lead--medium">Student 2.</p>
                    </div>
                    <div className="col-lg-6 mb-2">
                      <label className="form-label sm-type-amp">Name</label>
                      <input type="name" className="form-control"/>
                    </div>
                    <div className="col-lg-6 mb-2">
                      <label className="form-label sm-type-amp">Email</label>
                      <input type="email" className="form-control"/>
                    </div>
                  </div>

                  <div className="side-grey row mb-4">
                    <div className="col-lg-12">
                      <p className="sm-type-lead sm-type-lead--medium">Student 3.</p>
                    </div>
                    <div className="col-lg-6 mb-2">
                      <label className="form-label sm-type-amp">Name</label>
                      <input type="name" className="form-control"/>
                    </div>
                    <div className="col-lg-6 mb-2">
                      <label className="form-label sm-type-amp">Email</label>
                      <input type="email" className="form-control"/>
                    </div>
                  </div>


                  <div className="col-lg-12">
                    <p className="sm-type-lead"><a href="#">Add more names</a></p>
                  </div>

                  <button className="btn-solid-lg">Submit names</button>
                </form>

              </div>
              <div className="col-lg-4">
                <p className="sm-type-guitar mb-2"><span className="side-icon side-icon-orange"><HelpIcon /></span>Helpful information</p>
                <div className="side-grey">
                  <p className="sm-type-amp">Use your email address and password provided.</p>
                </div>
              </div>
            </div>
          </section>
          <AccountFooter />
        </main>
      </>
  )
}

export default TutorAddPage
