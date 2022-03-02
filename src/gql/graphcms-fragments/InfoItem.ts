import { graphql } from 'gatsby'

export const InfoItem = graphql`
    fragment InfoItem on GraphCMS_Info {
        stage
        locale
        remoteId: id
        createdAt
        updatedAt
        publishedAt
        title
        intro {
            ... on GraphCMS_RichText {
                raw
                html
                markdown
                text
            }
        }
        infoBlock {
            ... on GraphCMS_RichText {
                raw
                html
                markdown
                text
            }
        }
        slider {
            ... on GraphCMS_RichText {
                raw
                html
                markdown
                text
            }
        }
        slug
        createdBy {
            ... on GraphCMS_User {
                remoteTypeName: __typename
                remoteId: id
                stage
            }
        }
        updatedBy {
            ... on GraphCMS_User {
                remoteTypeName: __typename
                remoteId: id
                stage
            }
        }
        publishedBy {
            ... on GraphCMS_User {
                remoteTypeName: __typename
                remoteId: id
                stage
            }
        }
        helpfulInfo {
            ... on GraphCMS_HelpfulInfo {
                remoteTypeName: __typename
                remoteId: id
                locale
                stage
            }
        }
        checklist {
            ... on GraphCMS_Checklist {
                remoteTypeName: __typename
                remoteId: id
                locale
                stage
            }
        }
        image {
            ... on GraphCMS_Asset {
                remoteTypeName: __typename
                remoteId: id
                locale
                stage
            }
        }
        scheduledIn {
            ... on GraphCMS_ScheduledOperation {
                remoteTypeName: __typename
                remoteId: id
                stage
            }
        }
    }
`
