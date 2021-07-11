import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

export const ReadQuesty: FC<{ text: string }> = ({ text }) => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "blue-2.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    `)

    return (
        <div className="blue-holder-border">
            <div className="small-image">
                <GatsbyImage
                    alt=""
                    image={data.image1.childImageSharp.gatsbyImageData}
                />
            </div>
            <p className="sm-type-lead small-image-holder">{text}</p>
        </div>
    )
}
