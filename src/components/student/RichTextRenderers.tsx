import React from 'react'
import { Link } from 'gatsby'
import { RichText } from '@graphcms/rich-text-react-renderer'

import {
    RichTextProps,
    LinkRendererProps,
} from '@graphcms/rich-text-react-renderer/node_modules/@graphcms/rich-text-types'

export const renderGatsbyLinks = ({
    children,
    openInNewTab,
    href = '#',
    rel,
    ...rest
}: LinkRendererProps) => {
    if (href.match(/^https?:\/\/|^\/\//i)) {
        return (
            <a
                href={href}
                target={openInNewTab ? '_blank' : '_self'}
                rel={rel || 'noopener noreferrer'}
                {...rest}
            >
                {children}
            </a>
        )
    }

    return (
        <Link to={href} {...rest}>
            {children}
        </Link>
    )
}

export const StageInfoRenderer = ({ content }: RichTextProps) => (
    <RichText
        content={content}
        renderers={{
            h3: ({ children }) => (
                <h3 className="sm-type-drum mt-4">{children}</h3>
            ),
            //? how do we utilise the class thingy in rich text? could write custom renderer?
            // p: ({ children }) => (
            //     <p className="sm-type-bigamp mb-3">{children}</p>
            // ),
            // class: ({ children, className }) =>
            //     children.map((child) => <p className={className}>{child}</p>),
            a: renderGatsbyLinks,
        }}
    />
)

export const TaskInfoRenderer = ({ content }: RichTextProps) => (
    <RichText
        content={content}
        renderers={{
            p: ({ children }) => (
                <p className="sm-type-lead mb-2">{children}</p>
            ),
            a: renderGatsbyLinks,
        }}
    />
)

export const DevOpsRenderer = ({ content }: RichTextProps) => (
    <RichText
        content={content}
        renderers={{
            p: ({ children }) => (
                <p className="sm-type-lead mb-2">{children}</p>
            ),
            h3: ({ children }) => (
                <h3 className="sm-type-drum mt-4">{children}</h3>
            ),
            a: renderGatsbyLinks,
        }}
    />
)

export const HelpfulInfoRenderer = ({ content }: RichTextProps) => (
    <RichText
        content={content}
        renderers={{
            p: ({ children }) => <p className="sm-type-amp">{children}</p>,
            a: renderGatsbyLinks,
        }}
    />
)

export const FundingOptionsRenderer = ({ content }: RichTextProps) => (
    <RichText
        content={content}
        renderers={{
            a: renderGatsbyLinks,
        }}
    />
)
