import React from "react"
import LoginHeader from '../account/_header'
import AccountFooter from './_footer'
import '../../scss/index.scss'

import {Helmet} from "react-helmet";
import HelpIcon from "../../assets/help-icon.svg";

const NewQuestPage = () => {

  return (
      <>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Login</title>
          <meta name="description" content="The description" />
          <meta property="og:url" content="url" />
          <meta property="og:title" content="Quest 1" />
          <meta property="og:description" content="The description" />
        </Helmet>

        <main className="the-quest">
          <LoginHeader headerText="Tutor Hub" />
          <section className="container" id="main">
            <div className="row">
              <div className="col-lg-8">
                <h2 className="sm-type-drum sm-type-drum--medium mt-4">New Quests</h2>

                <form className="mb-4" id="form-login" action="/account/tutor-add-student">
                  <div className="side-grey mb-2">
                    <div className="mb-2">
                      <label className="form-label sm-type-amp">Enter the name of the quest</label>
                      <input type="email" className="form-control"/>
                    </div>
                  </div>

                  <div className="side-grey mb-2">
                    <div className="mb-2">
                      <label className="form-label sm-type-amp">Team name 1</label>
                      <input type="email" className="form-control"/>
                    </div>

                    <div className="mb-2">
                      <label className="form-label sm-type-amp">Team name 2</label>
                      <input type="email" className="form-control"/>
                    </div>

                    <div className="mb-2">
                      <label className="form-label sm-type-amp">Team name 3</label>
                      <input type="email" className="form-control"/>
                    </div>

                    <div className="mb-2">
                      <label className="form-label sm-type-amp">Team name 4</label>
                      <input type="email" className="form-control"/>
                    </div>

                    <div className="mb-2">
                      <label className="form-label sm-type-amp">Team name 5</label>
                      <input type="email" className="form-control"/>
                    </div>

                    <div className="mb-2">
                      <label className="form-label sm-type-lead">Team name 6</label>
                      <input type="email" className="form-control"/>
                    </div>

                    <div className="mb-2">
                      <label className="form-label sm-type-amp">Team name 7</label>
                      <input type="email" className="form-control"/>
                    </div>

                    <div className="mb-2">
                      <label className="form-label sm-type-amp">Team name 8</label>
                      <input type="email" className="form-control"/>
                    </div>

                    <div className="mb-2">
                      <label className="form-label sm-type-amp">Team name 9</label>
                      <input type="email" className="form-control"/>
                    </div>

                    <div className="mb-2">
                      <label className="form-label sm-type-amp">Team name 10</label>
                      <input type="email" className="form-control"/>
                    </div>
                  </div>

                  <button className="btn-solid-lg">Submit new Quest</button>
                </form>

              </div>
              <div className="col-lg-4">
                <p className="sm-type-guitar mb-2"><span className="side-icon side-icon-orange"><HelpIcon /></span>Helpful information</p>
                <div className="side-grey">
                  <p className="sm-type-amp">Here you can see your previous and current Quests. You can also start a new Quest</p>
                </div>
              </div>
            </div>
          </section>
          <AccountFooter />
        </main>
      </>
  )
}

export default NewQuestPage
