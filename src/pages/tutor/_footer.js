import React from 'react'
import { Link } from 'gatsby'
import { useMutation } from '@apollo/client'

import { RESET_DB } from '../../gql/mutations'

const TutorFooter = () => {
    const [resetDB, resetDBResponse] = useMutation(RESET_DB)

    return (
        <footer className="footer">
            <section className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <ul>
                            <li>
                                <Link to="/tutor/hub/">Tutor Hub</Link>
                            </li>
                            <li>
                                <button onClick={() => resetDB()}>
                                    Reset DB
                                </button>
                            </li>
                            {resetDBResponse.data && <span> DB reset!</span>}
                        </ul>

                        <p>Copyright 2021. All rights reserved.</p>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default TutorFooter
