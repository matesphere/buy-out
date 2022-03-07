import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

export const ReadQuesty: FC<{ text: string }> = ({ text }) => {
    const {
        allGraphCmsAsset: { edges },
    } = useStaticQuery(graphql`
        query {
            allGraphCmsAsset(
                filter: {
                    fileName: { in: ["blue-1.jpg", "blue-2.jpg", "blue-3.jpg"] }
                }
            ) {
                edges {
                    node {
                        gatsbyImageData
                    }
                }
            }
        }
    `)

    const random1to3 = Math.floor(Math.random() * 3)
    const imageChoice = edges[random1to3].node.gatsbyImageData

    return (
        <div className="blue-holder-border questies-holder">
            <div className="small-questies">
                <GatsbyImage alt="" image={imageChoice} />
            </div>
            <p className="sm-type-lead small-questies-holder">{text}</p>
        </div>
    )
}
