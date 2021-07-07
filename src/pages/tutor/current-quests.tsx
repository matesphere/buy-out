import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { gql } from "@apollo/client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ApolloError } from "@apollo/client";
import { TextEditor } from "../../components/common/TextEditor";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { Loading } from "../../components/common/Loading";
import { Error } from "../../components/common/Error";
import { Breadcrumbs } from "../../components/common/Breadcrumbs";
import {
  LockedStageStatus,
  UnlockedStageStatus,
  UnlockedStage3Status,
  UnlockedStage3NoDocStatus,
  SubmittedStageStatus,
  DocumentlessSubmittedStageStatus,
  FailedStageStatus,
  CompletedStageStatus,
} from "../../components/tutor/CurrentQuest";

import { useAuthQuery, useAuthMutation } from "../../utils/auth-utils";
import { POSITION_DISPLAY_NAME } from "../../utils/common-utils";
import { ExpandedContext } from "../tutor";

import { TUTOR_CURRENT_QUEST_QUERY } from "../../gql/queries";
import { COMPLETE_QUEST } from "../../gql/mutations";

import {
  TutorCurrentQuestQuery,
  TutorCurrentQuestQueryVariables,
  TutorCurrentQuestQuery_user_by_pk_tutor_quests_teams_team_development_options,
  TutorCurrentQuestQuery_user_by_pk_tutor_quests_teams_students,
} from "../../gql/types/TutorCurrentQuestQuery";

import Tick from "../../assets/tick.svg";

import "../../scss/index.scss";
import "react-tabs/style/react-tabs.css";

const TUTOR_CURRENT_QUEST_SUB = gql`
  subscription TutorCurrentQuestSub($user_id: uuid!) {
    user_by_pk(id: $user_id) {
      id
      full_name
      username
      email
      tutor {
        id
        school {
          name
        }
        quests(where: { status: { _eq: active } }) {
          id
          teams {
            id
            name
            students {
              id
              user {
                full_name
              }
            }
            stage_progresses {
              id
              team_id
              stage_id
              status
              documents {
                id
                status
                feedback
              }
            }
          }
        }
      }
    }
  }
`;

const getStageStatusDisplay = (
  stageId,
  stageProgresses,
  devOptions,
  teamId
) => {
  const stageProgress = stageProgresses.find(
    (stageProgress) => stageProgress.stage_id === stageId
  );

  const document = stageProgress?.documents[0] || null;

  if (stageProgress) {
    if (document) {
      switch (document.status) {
        case "submitted":
          return (
            <SubmittedStageStatus
              documents={stageProgress.documents}
              stageId={stageId}
              stageProgressId={stageProgress.id}
            />
          );
        case "marked_failed":
          return <FailedStageStatus documents={stageProgress.documents} />;
        case "marked_passed":
          return (
            <CompletedStageStatus
              stageId={stageId}
              stageProgressId={stageProgress.id}
            />
          );
        default:
          return stageId === 3 ? (
            <UnlockedStage3Status devOptions={devOptions} doc={document} />
          ) : (
            <UnlockedStageStatus />
          );
      }
    } else {
      if (stageProgress.status === "completed") {
        return (
          <CompletedStageStatus
            stageId={stageId}
            stageProgressId={stageProgress.id}
          />
        );
      } else if (stageProgress.status === "submitted" && !document) {
        return (
          <DocumentlessSubmittedStageStatus
            stageProgressId={stageProgress.id}
          />
        );
      }
      return stageId === 3 ? (
        <UnlockedStage3NoDocStatus
          stageProgressId={stageProgress.id}
          devOptions={devOptions}
        />
      ) : (
        <UnlockedStageStatus />
      );
    }
  } else {
    return <LockedStageStatus teamId={teamId} stageId={stageId} />;
  }
};

interface TeamInfoPanelProps {
  devOptions: Array<TutorCurrentQuestQuery_user_by_pk_tutor_quests_teams_team_development_options>;
  students: Array<TutorCurrentQuestQuery_user_by_pk_tutor_quests_teams_students>;
}

const TeamInfoPanel = ({ devOptions, students }: TeamInfoPanelProps) => (
  <>
    <div className="form-holder-border">
      <p className="sm-type-lead sm-type-lead--medium greendark-highlight mb-2">
        Team members:
      </p>
      {students.map(({ position, user: { full_name } }, i) => (
        <p key={i} className="sm-type-bigamp">
          {full_name}
          {position && ` - ${POSITION_DISPLAY_NAME[position]}`}
        </p>
      ))}
    </div>
    {devOptions.length > 0 && (
      <div className="form-holder-border">
        <p className="sm-type-lead sm-type-lead--medium greendark-highlight mb-2">
          Development options:
        </p>
        {devOptions.map(
          ({ shortlist, development_option: { display_name } }, i) => (
            <p key={i} className="sm-type-bigamp">
              {display_name}{" "}
              {shortlist && (
                <span className="shortlist-tick">
                  <Tick />
                </span>
              )}
            </p>
          )
        )}
      </div>
    )}
  </>
);

const StageInfoPanel = ({ stages, stageProgresses, devOptions, teamId }) => (
  <ul className="steps">
    {stages.map(({ id, title }, i) => (
      <li key={i}>
        <p className="steps-step sm-type-lead sm-type-lead--medium">
          {`Stage ${id}: ${title}`}
        </p>
        <div className="form-holder-border">
          {getStageStatusDisplay(id, stageProgresses, devOptions, teamId)}
        </div>
      </li>
    ))}
  </ul>
);

const getCurrentTimestamp = () => new Date().toISOString();

const TutorCurrentQuestPage = () => {
  const { expanded, setExpanded } = useContext(ExpandedContext);
  const [showReflectionModal, setShowReflectionModal] = useState(false);

  const [completeQuest, completeQuestResponse] = useAuthMutation(
    COMPLETE_QUEST,
    undefined,
    () => setShowReflectionModal(true)
  );

  const { loading, error, data } = useAuthQuery<
    TutorCurrentQuestQuery,
    TutorCurrentQuestQueryVariables
  >(
    TUTOR_CURRENT_QUEST_QUERY,
    {
      fetchPolicy: "network-only",
      pollInterval: 2000,
    },
    "userId"
  );

  if (loading) return <Loading />;
  if (error || !data)
    return (
      <Error
        error={error || new ApolloError({ errorMessage: "No data returned!" })}
      />
    );

  // subscribeToMore({
  //     document: TUTOR_CURRENT_QUEST_SUB,
  //     variables: { user_id: userId },
  //     context: {
  //         headers: {
  //             Authorization: `Bearer ${token}`,
  //         },
  //     },

  //     updateQuery: (prev, { subscriptionData }) => {
  //         if (!subscriptionData.data) return prev

  //         // TODO big check whether status of any stages has actually changed
  //         // const stageProgressesWithStatus =
  //         //     subscriptionData.data.user[0].student.team.stage_progresses

  //         // if (subscriptionData.)

  //         return {
  //             user_by_pk: {
  //                 ...prev.user_by_pk,
  //                 tutor: {
  //                     ...prev.user_by_pk.tutor,
  //                     quests: {
  //                         ...prev.user_by_pk.tutor.quests,
  //                         teams: subscriptionData.data.user_by_pk.tutor.teams,
  //                     },
  //                 },
  //             },
  //         }
  //     },
  // })

  const {
    user_by_pk: {
      tutor: { quests },
    },
    development_option: devOptions,
    stage,
  } = data;

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Current Quests</title>
        <meta name="description" content="The description" />
      </Helmet>
      <main className="notes">
        <section className="container" id="currentquest">
          <Breadcrumbs
            previous={[
              {
                displayName: "Tutor Hub",
                url: "/tutor/hub",
              },
            ]}
            currentDisplayName="Current Quests"
          />
          <Tabs>
            <TabList>
              {quests.map((_, i) => (
                <Tab key={i}>Current Quest {i + 1}</Tab>
              ))}
            </TabList>
            <section className="mt-2">
              {quests.map(({ id, teams }, i) => (
                <TabPanel key={i}>
                  {teams.map(
                    (
                      {
                        id,
                        name,
                        students,
                        team_development_options,
                        stage_progresses,
                      },
                      i
                    ) => (
                      <Accordion
                        key={i}
                        allowMultipleExpanded
                        allowZeroExpanded
                        preExpanded={expanded}
                        onChange={(ids) => setExpanded(ids)}
                      >
                        <AccordionItem className="side-grey" uuid={id}>
                          <AccordionItemHeading>
                            <AccordionItemButton>{name}</AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <div className="row tutor">
                              <div className="col-lg-4">
                                <TeamInfoPanel
                                  devOptions={team_development_options}
                                  students={students}
                                />
                              </div>
                              <div className="col-lg-8 mt-4">
                                <StageInfoPanel
                                  stages={stage}
                                  stageProgresses={stage_progresses}
                                  devOptions={devOptions}
                                  teamId={id}
                                />
                              </div>
                            </div>
                          </AccordionItemPanel>
                        </AccordionItem>
                      </Accordion>
                    )
                  )}

                  <button
                    type="button"
                    onClick={() => setShowReflectionModal(true)}
                  >
                    Complete Quest
                  </button>

                  {showReflectionModal && (
                    <div className="modal-window-large">
                      <div>
                        <button
                          onClick={() => {
                            setShowReflectionModal(false);
                          }}
                          title="Close"
                          className="modal-close"
                        >
                          Close
                        </button>

                        <>
                            <h4 className="sm-type-guitar">Reflection – Tutor</h4>
                          <p className="sm-type-lead">
                            Having just guided your class through the Community
                            Land Buyout QUEST, it would be really helpful to us,
                            the Developers of the QUEST, if you could give us
                            some feedback about your experience.
                          </p>
                          <p className="sm-type-amp text-align-left">
                            1. From your point of view, what was the most challenging
                            part of running the QUEST?
                          </p>

                          <div className="ck-textarea">
                            <TextEditor />
                          </div>

                          <p className="sm-type-amp text-align-left">
                            2. How well do you think that your class engaged with the
                            Quest?
                          </p>

                          <div className="ck-textarea">
                            <TextEditor />
                          </div>

                          <p className="sm-type-amp text-align-left">
                            3. What do you think that the pupils have learnt about
                            community land buyouts?
                          </p>

                          <div className="ck-textarea">
                            <TextEditor />
                          </div>

                          <p className="sm-type-amp text-align-left">
                            4. What else have the pupils learnt from taking part in
                            the QUEST?
                          </p>

                          <div className="ck-textarea">
                            <TextEditor />
                          </div>

                          <p className="sm-type-amp text-align-left">
                            5. Did you come across any technical issues while working
                            with the QUEST?
                          </p>

                          <div className="ck-textarea">
                            <TextEditor />
                          </div>

                          <p className="sm-type-amp text-align-left">
                            6. How did you get on with controlling the QUEST using
                            the Teacher Hub?
                          </p>

                          <div className="ck-textarea">
                            <TextEditor />
                          </div>

                          <p className="sm-type-amp text-align-left">
                            7. Please give us any other feedback about your
                            experience of working with the QUEST.
                          </p>

                          <div className="ck-textarea mb-4">
                            <TextEditor />
                          </div>
                          <button
                            className="btn-solid-lg mt-4"
                            // disabled={disableSubmit}
                            onClick={() => {
                              const now = getCurrentTimestamp();
                              completeQuest({
                                variables: {
                                  questId: id,
                                  now,
                                },
                              });
                            }}
                          >
                            Yes, submit feeback
                          </button>
                        </>
                      </div>
                    </div>
                  )}
                </TabPanel>
              ))}
            </section>
          </Tabs>
        </section>
      </main>
    </>
  );
};

export default TutorCurrentQuestPage;
