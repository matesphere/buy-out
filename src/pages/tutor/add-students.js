import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useMutation } from '@apollo/client'
import { INSERT_STUDENTS, insertStudentsMapper } from '../../gql/mutations'

import LoginHeader from './_header'
import AccountFooter from './_footer'

import HelpIcon from '../../assets/help-icon.svg'
import '../../scss/index.scss'

const SCHOOL_ID = 'e89e1d0c-4be6-4716-a597-a7c1f6d0ee6f' // TODO: retrieve & store school ID somewhere

const EMPTY_STUDENT = {
    name: '',
    email: '',
}

const StudentInput = ({ num, name, email, setStudents }) => (
    <div className="side-grey row mb-4">
        <div className="col-lg-12">
            <p className="sm-type-lead sm-type-lead--medium">
                Student {num + 1}
            </p>
        </div>
        <div className="col-lg-6 mb-2">
            <label className="form-label sm-type-amp">Name</label>
            <input
                type="name"
                className="form-control"
                value={name}
                onChange={({ target: { value } }) =>
                    setStudents(updateField(num, 'name', value))
                }
            />
        </div>
        <div className="col-lg-6 mb-2">
            <label className="form-label sm-type-amp">Email</label>
            <input
                type="email"
                className="form-control"
                value={email}
                onChange={({ target: { value } }) =>
                    setStudents(updateField(num, 'email', value))
                }
            />
        </div>
    </div>
)

const updateField = (studentNum, field, value) => (students) => {
    const studentsToUpdate = [...students]
    const updatedStudent = { ...students[studentNum], [field]: value }
    studentsToUpdate[studentNum] = updatedStudent

    return studentsToUpdate
}

const TutorAddPage = () => {
    const [students, setStudents] = useState([EMPTY_STUDENT])
    const [insertStudents, { data }] = useMutation(INSERT_STUDENTS)

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>New Quest - Add Students</title>
            </Helmet>

            <main className="the-quest">
                <LoginHeader headerText="New Quest" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="sm-type-drum sm-type-drum--medium mt-4">
                                Add students
                            </h2>
                            {/* <div className="side-grey row mb-4">
                                <div className="col-lg-12">
                                    <p className="sm-type-lead sm-type-lead--medium">
                                        03.05.2020 - Class 4B 2020
                                    </p>
                                </div>
                            </div>

                            <h2 className="sm-type-drum sm-type-drum--medium mt-4">
                                Student details
                            </h2> */}

                            <form
                                className="mb-4"
                                // id="form-login"
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    console.log('submit')
                                    insertStudents({
                                        variables: insertStudentsMapper(
                                            students,
                                            SCHOOL_ID
                                        ),
                                    })
                                }}
                            >
                                {students.map((student, i) => (
                                    <StudentInput
                                        key={i}
                                        num={i}
                                        setStudents={setStudents}
                                        {...{ student }}
                                    />
                                ))}

                                <div className="col-lg-12">
                                    <p className="sm-type-lead">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setStudents([
                                                    ...students,
                                                    EMPTY_STUDENT,
                                                ])
                                            }
                                        >
                                            Add more names
                                        </button>
                                    </p>
                                </div>

                                <button type="submit" className="btn-solid-lg">
                                    Submit names
                                </button>
                            </form>
                        </div>

                        {data && (
                            <>
                                <div className="col-lg-12">
                                    {`Added ${data.insert_student.returning.length} students!`}{' '}
                                    <a href="/tutor/create-team">
                                        Next step ->
                                    </a>
                                </div>
                                <br />
                                <br />
                            </>
                        )}

                        <div className="col-lg-4">
                            <p className="sm-type-guitar mb-2">
                                <span className="side-icon side-icon-orange">
                                    <HelpIcon />
                                </span>
                                Helpful information
                            </p>
                            <div className="side-grey">
                                <p className="sm-type-amp">
                                    Make sure to double check emails!
                                </p>
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