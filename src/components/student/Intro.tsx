import React from 'react'
import { RichText } from '@graphcms/rich-text-react-renderer'

import { RichTextContent } from '@graphcms/rich-text-react-renderer/node_modules/@graphcms/rich-text-types'

interface IntroProps {
    item: { raw: RichTextContent }
}

export const Intro = ({ item }: IntroProps) => (
    <RichText
        content={item.raw}
        renderers={{
            p: ({ children }) => (
                <p className="sm-type-guitar mb-4">{children}</p>
            ),
            h6: ({ children }) => (
                <p className="sm-type-bigamp mb-3 mt-2">{children}</p>
            ),
        }}
    />
)
