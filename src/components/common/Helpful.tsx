import React from 'react'

import HelpIcon from '../../assets/help-icon.svg'

interface HelpfulProps {
    items: Array<string>
}

export const Helpful = ({ items }: HelpfulProps) => (
    <>
        <p className="sm-type-guitar mb-2">
            <span className="side-icon side-icon-orange">
                <HelpIcon />
            </span>
            Helpful information
        </p>
        <div className="side-grey">
            {items.map((item, i) => (
                <p className="sm-type-amp ticker" key={i}>
                    {item}
                </p>
            ))}
        </div>
    </>
)
