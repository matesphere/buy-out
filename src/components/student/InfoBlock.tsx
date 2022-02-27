import React from 'react'
import { RichText } from '@graphcms/rich-text-react-renderer'

import { RichTextContent } from '@graphcms/rich-text-react-renderer/node_modules/@graphcms/rich-text-types'

interface SliderProps {
    items: Array<{ raw: RichTextContent }>
}

export const InfoBlock = ({ items }: SliderProps) => (
    <>
        {items.map((item, i) => (
            <RichText
                key={i}
                content={item.raw}
                renderers={{
                    p: ({ children }) => (
                        <p className="sm-type-lead mb-4">{children}</p>
                    ),
                }}
            />
        ))}
    </>
)
