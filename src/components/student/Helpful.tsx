import React from 'react'
import { HelpfulInfoRenderer } from '../../components/student/RichTextRenderers'

import { RichTextContent } from '@graphcms/rich-text-react-renderer/node_modules/@graphcms/rich-text-types'

import HelpIcon from '../../assets/help-icon.svg'

interface HelpfulProps {
    content: { raw: RichTextContent }
}

export const Helpful = ({ content }: HelpfulProps) => (
    <>
        <p className="sm-type-guitar mb-2">
            <span className="side-icon side-icon-orange">
                <HelpIcon />
            </span>
            Helpful information
        </p>
        <div className="side-grey">
            <HelpfulInfoRenderer content={content.raw} />
        </div>
    </>
)
