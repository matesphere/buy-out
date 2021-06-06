import React, { useState, useContext, FC, Dispatch } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import LoginHeader from './_header'
import AccountFooter from './_footer'

import { NewQuestContext } from '../tutor'

import { StudentType } from '../../gql/types'

import HelpIcon from '../../assets/help-icon.svg'
import '../../scss/index.scss'

const SCHOOL_ID = 'e89e1d0c-4be6-4716-a597-a7c1f6d0ee6f' // TODO: retrieve & store school ID somewhere

// TODO: validation to check for any missing fields on students - show error in modal?
const EMPTY_STUDENT: StudentType = {
    firstName: '',
    lastName: '',
    email: '',
}

interface StudentInputType {
    num: number
    name: string
    email: string
    setStudents: Dispatch<Array<StudentType>>
}

const updateField = (studentNum: number, field: string, value: string) => (students) => {
    const studentsToUpdate = [...students]
    const updatedStudent = { ...students[studentNum], [field]: value }
    studentsToUpdate[studentNum] = updatedStudent

    return studentsToUpdate
}

const StudentInput: FC<StudentInputType> = ({ num, name, email, setStudents }) => (
    <div className="side-grey row mb-4">
        <div className="col-lg-12">
            <p className="sm-type-amp sm-type-amp--medium">Student {num + 1}</p>
        </div>
        <div className="col-lg-4 mb-2">
            <label className="form-label">First Name</label>
            <input
                type="name"
                className="form-control"
                value={name}
                onChange={({ target: { value } }) =>
                    setStudents(updateField(num, 'firstName', value))
                }
            />
        </div>
        <div className="col-lg-4 mb-2">
            <label className="form-label">Last Name</label>
            <input
                type="name"
                className="form-control"
                value={name}
                onChange={({ target: { value } }) =>
                    setStudents(updateField(num, 'lastName', value))
                }
            />
        </div>
        <div className="col-lg-4 mb-2">
            <label className="form-label">Email</label>
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

// const useDelayedRender = (delay) => {
//     const [delayed, setDelayed] = useState(true)

//     useEffect(() => {
//         const timeout = setTimeout(() => setDelayed(false), delay)
//         return () => clearTimeout(timeout)
//     }, [])

//     console.log(delayed)
//     return (fn) => !delayed && fn()
// }

// const LoadingSpinner = ({ delay }) => {
//     const delayedRender = useDelayedRender(delay)

//     return delayedRender(() => <div className="loader"></div>)
// }

const ConfirmModal = ({ students, setShowModal }) => {
    const { studentsToAdd, setStudentsToAdd } = useContext(NewQuestContext)

    return (
        <div className="modal-window">
            <div>
                <button
                    onClick={() => setShowModal(false)}
                    title="Close"
                    className="modal-close"
                >
                    Cancel
                </button>

                {studentsToAdd.length === 0 && (
                    <>
                        <p className="sm-type-guitar sm-type-guitar--medium mt-4">
                            {`You are about to add ${students.length} students! Is this correct?`}{' '}
                        </p>

                        <button
                            className="btn-solid-lg mt-4"
                            onClick={() => {
                                setStudentsToAdd(students)
                            }}
                        >
                            Yes, add students
                        </button>
                    </>
                )}

                {/* {loading && <LoadingSpinner delay={200} />} */}

                {studentsToAdd.length > 0 && (
                    <p className="sm-type-guitar sm-type-guitar--medium mt-4">
                        Done!{' '}
                        <Link to="/tutor/create-team">Go to create teams ></Link>
                    </p>
                )}
            </div>
        </div>
    )
}

const TutorAddStudentsPage: FC = () => {
    const [students, setStudents] = useState<Array<StudentType>>([EMPTY_STUDENT, EMPTY_STUDENT])
    const [showModal, setShowModal] = useState(false)

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
                <LoginHeader headerText="New Quest" hideLinks={true} />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="sm-type-drum sm-type-drum--medium mt-4">
                                Add students
                            </h2>

                            <p className="sm-type-lead">
                                Add all students who will be taking The Quest.
                            </p>
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
                                className="mb-4 container"
                                // id="form-login"
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    setShowModal(true)
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

                                <button
                                    className="btn-outline-reg mb-4"
                                    type="button"
                                    onClick={() =>
                                        setStudents([
                                            ...students,
                                            EMPTY_STUDENT,
                                        ])
                                    }
                                >
                                    + Add more names
                                </button>

                                <h2 className="sm-type-drum sm-type-drum--medium mt-4">
                                    All done?
                                </h2>
                                <p className="sm-type-lead mb-4">
                                    Once you have added all your students'
                                    details, hit 'submit names' below.
                                </p>

                                <button type="submit" className="btn-solid-lg">
                                    Submit names
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {showModal && <ConfirmModal {...{ students, setShowModal }} />}

                <AccountFooter />
            </main>
        </>
    )
}

export default TutorAddStudentsPage
