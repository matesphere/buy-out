import React, { Reducer } from "react";
import { Helmet } from "react-helmet";

import Header from "../../../../components/_header";
import Footer from "../../../../components/_footer";
import { Loading } from "../../../../components/common/Loading";
import { Error } from "../../../../components/common/Error";
import { TextEditor } from "../../../../components/common/TextEditor";
import { SaveSubmitSection } from "../../../../components/student/stages/SaveSubmitSection";

// import { useAuthQuery, useAuthMutation } from '../../../../utils/auth-utils'
import { useWorkState, ActionType } from "../../../../utils/input-utils";

import HelpIcon from "../../../../assets/help-icon.svg";
import TickSheet from "../../../../assets/tick-sheet.svg";

import "../../../../scss/index.scss";
import { eng } from "../../../_index.data";

type WorkState = {
  [key: number]: string;
};

type Action =
  | {
      type: ActionType.LoadAction;
      payload: WorkState;
    }
  | {
      type: ActionType.UpdateAction;
      payload: { question: number; answer: string };
    };

const stage1QuestionReducer: Reducer<WorkState, Action> = (state, action) => {
  switch (action.type) {
    case ActionType.LoadAction:
      return action.payload;
    case ActionType.UpdateAction:
      return {
        ...state,
        [action.payload.question]: action.payload.answer,
      };
    default:
      return state;
  }
};

const Stage1WorkPage = () => {
  const {
    loading,
    error,
    workState,
    workDispatch,
    saveWorkObj,
    submitWorkObj,
    docSubmitted,
  } = useWorkState<WorkState, Action>(1, stage1QuestionReducer);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Stage 1 - Research</title>
        <meta name="description" content="The description" />
      </Helmet>
      <main className="the-quest">
        <Header headerText="Stage 1" />
        <section className="container" id="main">
          <div className="row">
            <div className="col-lg-9">
              <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                Research
              </h2>
              <p className="sm-type-guitar mb-4">
                Here are a series of questions to help you to do some
                preliminary exploration. This is your first opportunity to work
                together as a team, so the answers that you provide should be
                the product of discussions between each of the team members.
              </p>

              <div className="side-grey">
                <h3 className="task ticker mb-2">
                  <span className="ticker-sheet ticker-feedback">
                    <HelpIcon />
                  </span>
                  <span className="sm-type-drum green-highlight">
                    Tutor feedback:
                  </span>
                </h3>
                <div className="form-holder-border">
                  <p className="sm-type-lead">
                    Here are a series of questions to help you to do some
                    preliminary exploration. This is your first opportunity to
                    work together as a team, so the answers that you provide
                    should be the product of discussions between each of the
                    team members.
                  </p>
                </div>
              </div>
              <div className="side-grey">
                <h3 className="task ticker mb-2">
                  <span className="ticker-sheet">
                    <TickSheet />
                  </span>
                  <span className="sm-type-drum">Task to complete:</span>
                </h3>
                <div className="form-holder-border">
                  <h4 className="sm-type-drum sm-type-drum--medium">
                    Questions
                  </h4>
                  <ol>
                    {eng.map((eng, i) => (
                      <li key={eng.text}>
                        <p className="sm-type-guitar">{eng.text}</p>
                        <p className="sm-type-amp mb-4">{eng.description}</p>
                        <div className="ck-textarea">
                          {docSubmitted ? (
                            <div
                              className="submitted-holder"
                              dangerouslySetInnerHTML={{
                                __html: workState[i],
                              }}
                            />
                          ) : (
                            <TextEditor
                              data={workState[i] || ""}
                              onChange={(data) =>
                                workDispatch({
                                  type: ActionType.UpdateAction,
                                  payload: {
                                    question: i,
                                    answer: data,
                                  },
                                })
                              }
                            />
                          )}
                        </div>
                      </li>
                    ))}
                  </ol>

                  <SaveSubmitSection
                    saveWorkObj={saveWorkObj}
                    submitWorkObj={submitWorkObj}
                    disableSubmit={Object.keys(workState).length < 12}
                    submitted={docSubmitted}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <p className="sm-type-guitar mb-2">
                <span className="side-icon side-icon-orange">
                  <HelpIcon />
                </span>
                Helpful information
              </p>
              <div className="side-grey">
                <p className="sm-type-amp">Useful links</p>
                <ul>
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Civil_parishes_in_Scotland"
                      target="_blank"
                      rel="external"
                    >
                      Civil parish
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Loch_Alsh"
                      target="_blank"
                      rel="external"
                    >
                      Lochalsh
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Highland_council_area"
                      target="_blank"
                      rel="external"
                    >
                      Highland
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Inverness-shire"
                      target="_blank"
                      rel="external"
                    >
                      Inverness-shire
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Stage1WorkPage;
