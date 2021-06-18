import React from 'react'

import TickSheet from '../../assets/tick-sheet.svg'

const CheckList = ({ items }) => {
    return (
        <>
            <p className="sm-type-guitar mb-2 mt-4">
                <span className="side-icon side-icon-green">
                    <TickSheet />
                </span>
                Your checklist
            </p>
            <div className="side-grey">
                {items.map((check) => (
                    <div className="checklist" key={check.title}>
                        <div className="tick"></div>
                        <p className="sm-type-bigamp">{check.title}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CheckList
