import React from "react"
import Header from '../components/_header'
import Footer from '../components/_footer'
import '../scss/index.scss'

import { Link } from "gatsby";
import {Helmet} from "react-helmet";
import HelpIcon from "../assets/help-icon.svg";

const AboutRolesPage = () => {


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
        <main className="the-quest">
          <Header headerText="The quest" />
          <section className="container" id="main">
            <div className="row">
              <div className="col-lg-8">
                <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">About the roles</h2>

                <h2 className="sm-type-guitar mb-2 mt-4">Chair</h2>
                <p className="sm-type-lead mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex mi, sollicitudin in mauris et, consequat dapibus sapien. Proin varius luctus sapien in rhoncus. Quisque sed cursus eros. Morbi viverra faucibus est laoreet imperdiet. Donec ac blandit felis, eu sagittis justo. Quisque a erat fringilla, fermentum velit eget, lobortis nibh. Suspendisse dolor sem, scelerisque quis volutpat et, elementum consequat lectus. Mauris id ullamcorper est, quis consectetur sem. Morbi eget ipsum elementum, lacinia velit sed, accumsan quam. Curabitur sed ligula rutrum, hendrerit erat ut, porttitor diam. Phasellus vestibulum lacus est. Aliquam erat volutpat. In pretium sed orci in cursus.</p>

                <h2 className="sm-type-guitar mb-2">Vice-chair</h2>
                <p className="sm-type-lead mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex mi, sollicitudin in mauris et, consequat dapibus sapien. Proin varius luctus sapien in rhoncus. Quisque sed cursus eros. Morbi viverra faucibus est laoreet imperdiet. Donec ac blandit felis, eu sagittis justo. Quisque a erat fringilla, fermentum velit eget, lobortis nibh. Suspendisse dolor sem, scelerisque quis volutpat et, elementum consequat lectus. Mauris id ullamcorper est, quis consectetur sem. Morbi eget ipsum elementum, lacinia velit sed, accumsan quam. Curabitur sed ligula rutrum, hendrerit erat ut, porttitor diam. Phasellus vestibulum lacus est. Aliquam erat volutpat. In pretium sed orci in cursus.</p>

                <h2 className="sm-type-guitar mb-2">Secretary</h2>
                <p className="sm-type-lead mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex mi, sollicitudin in mauris et, consequat dapibus sapien. Proin varius luctus sapien in rhoncus. Quisque sed cursus eros. Morbi viverra faucibus est laoreet imperdiet. Donec ac blandit felis, eu sagittis justo. Quisque a erat fringilla, fermentum velit eget, lobortis nibh. Suspendisse dolor sem, scelerisque quis volutpat et, elementum consequat lectus. Mauris id ullamcorper est, quis consectetur sem. Morbi eget ipsum elementum, lacinia velit sed, accumsan quam. Curabitur sed ligula rutrum, hendrerit erat ut, porttitor diam. Phasellus vestibulum lacus est. Aliquam erat volutpat. In pretium sed orci in cursus.</p>

                <h2 className="sm-type-guitar mb-2">Treasurer</h2>
                <p className="sm-type-lead mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex mi, sollicitudin in mauris et, consequat dapibus sapien. Proin varius luctus sapien in rhoncus. Quisque sed cursus eros. Morbi viverra faucibus est laoreet imperdiet. Donec ac blandit felis, eu sagittis justo. Quisque a erat fringilla, fermentum velit eget, lobortis nibh. Suspendisse dolor sem, scelerisque quis volutpat et, elementum consequat lectus. Mauris id ullamcorper est, quis consectetur sem. Morbi eget ipsum elementum, lacinia velit sed, accumsan quam. Curabitur sed ligula rutrum, hendrerit erat ut, porttitor diam. Phasellus vestibulum lacus est. Aliquam erat volutpat. In pretium sed orci in cursus.</p>

                <p className="sm-type-amp"><Link to="/the-roles">Back to roles</Link></p>
              </div>
              <div className="col-lg-4">
                <p className="sm-type-guitar mb-2"><span className="side-icon side-icon-orange"><HelpIcon /></span>Helpful information</p>
                <div className="side-grey">
                  <p className="sm-type-amp">Read the information and decide who will do what.</p>
                  <p className="sm-type-amp"><Link to="/the-roles">Back to roles</Link></p>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </>
  )
}

export default AboutRolesPage
