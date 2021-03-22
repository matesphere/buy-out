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
                <h2 className="sm-type-drum sm-type-drum--medium mt-4">Add student details here</h2>

                <form className="login-student-form mb-4" id="form-login">

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

                  <button className="btn-solid-lg" to="/introduction">Submit names</button>
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
          <Footer />
        </main>
      </>
  )
}

export default IndexPage
