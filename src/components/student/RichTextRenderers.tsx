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
    // TODO: on upgrade to Gatsby@4, check whether we can just stick target="_blank" on the <Link> component for new tabs
    if (href.match(/^https?:\/\/|^\/\//i) || openInNewTab) {
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
            h6: ({ children }) => (
                <p className="sm-type-amp mb-2">{children}</p>
            ),
            a: renderGatsbyLinks,
        }}
    />
)

export const TaskTipsRenderer = ({ content }: RichTextProps) => (
    <RichText
        content={content}
        renderers={{
            li: ({ children }) => <li className="mb-2">{children}</li>,
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
            h4: ({ children }) => (
                <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">
                    {children}
                </p>
            ),
            a: renderGatsbyLinks,
            table_head: ({ children }) => (
                <thead>
                    <tr
                        style={{
                            paddingTop: '12px',
                            paddingBottom: '12px',
                            textAlign: 'left',
                            backgroundColor: '#5b7e20',
                            color: 'white',
                        }}
                    >
                        {children?.props.content[0].children.map(
                            (tableHeaderCell, i) => {
                                return (
                                    <th key={i}>
                                        {
                                            tableHeaderCell.children[0]
                                                .children[0].text
                                        }
                                    </th>
                                )
                            }
                        )}
                    </tr>
                </thead>
            ),
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
