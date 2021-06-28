import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link, useStaticQuery } from "gatsby";
import { gql } from "@apollo/client";

import { Loading } from "../../components/common/Loading";
import { Error } from "../../components/common/Error";

import { useAuthQuery } from "../../utils/auth-utils";
import {
  TutorHubQuery,
  TutorHubQueryVariables,
} from "../../gql/types/TutorHubQuery";

import "../../scss/index.scss";

const TUTOR_HUB_QUERY = gql`
  query TutorHubQuery($user_id: uuid!) {
    user_by_pk(id: $user_id) {
      full_name
      username
      email
      tutor {
        school {
          name
        }
        quests {
          id
          status
          started_at
          completed_at
          teams {
            id
            name
          }
        }
      }
    }
  }
`;

const TutorTeamAssessment = () => {
  const { loading, error, data } = useAuthQuery<
    TutorHubQuery,
    TutorHubQueryVariables
  >(TUTOR_HUB_QUERY, null, "userId");

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  const {
    user_by_pk: {
      full_name: fullName,
      tutor: {
        school: { name: schoolName },
        quests,
      },
    },
  } = data;

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tutor Hub</title>
        <meta name="description" content="The description" />
      </Helmet>

      <main className="the-quest">
        <section className="container" id="main">
          <div className="row">
            <div className="col-lg-9">
              <h2 className="sm-type-drum sm-type-drum--medium mt-4 mb-4">
                Teamwork Assessment of the Community Land Buyout QUEST
              </h2>

              <p className="sm-type-lead mb-4">
                Feedback to the teams is provided by the teacher throughout the
                QUEST, however the teacher may wish to carry out a summative
                assessment of this aspect of the work. The following provides
                assessment criteria on which to provide summative feedback to
                the groups. It is quick to do and provides a score out of 50.
                Alternatively, or in addition, it can be completed in the form
                of comments which can then be shared with the groups.
              </p>

              <div className="table table-tutorassess">
                <div className="heading">
                  <div className="cell">
                    <p>Teamwork Assessment Criteria</p>
                  </div>
                  <div className="cell">
                    <p>Mark / 5</p>
                  </div>
                  <div className="cell">
                    <p>Comment (optional)</p>
                  </div>
                </div>

                <div className="roww">
                  <div className="cell">
                    1. You have listened carefully to one another.
                  </div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                </div>
                <div className="roww">
                  <div className="cell">
                    2. You have devised/used protocols for how to ensure that
                    everyone is heard.
                  </div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                </div>
                <div className="roww">
                  <div className="cell">
                    3. You have recognised the strengths of all in the group and
                    put these to good use.
                  </div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                </div>
                <div className="roww">
                  <div className="cell">
                    4. You have managed your time well and paid attention to
                    time constraints.
                  </div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                </div>
                <div className="roww">
                  <div className="cell">
                    5. You have behaved respectfully and politely to one
                    another.
                  </div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                </div>
                <div className="roww">
                  <div className="cell">
                    6. You have responded well to feedback and used it to inform
                    the next stages.
                  </div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                </div>
                <div className="roww">
                  <div className="cell">
                    7. Where disagreement or obstacles have arisen, you have
                    worked constructively to find resolution.
                  </div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                </div>
                <div className="roww">
                  <div className="cell">
                    8. You have ensured that everyone is included in every task.
                  </div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                </div>
                <div className="roww">
                  <div className="cell">
                    9. You have taken care of one another and ensured that
                    everyone is safe.
                  </div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                </div>
                <div className="roww">
                  <div className="cell">
                    10. You have approached tasks with a positive attitude.
                  </div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <p className="sm-type-guitar mb-2 mt-4">{fullName}'s Hub</p>
              <p className="sm-type-amp">{schoolName}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default TutorTeamAssessment;
