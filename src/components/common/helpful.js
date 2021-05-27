import React from 'react'

// @ts-ignore
import HelpIcon from '../../assets/help-icon.svg'

const Helpful = ({items} ) => {
    return (
        <>
            <p className="sm-type-guitar mb-2">
                <span className="side-icon side-icon-orange">
                    <HelpIcon />
                </span>
                Helpful information
            </p>
            <div className="side-grey">
                {items.map((check) => (
                    <p className="sm-type-amp ticker" key={check.title}>
                    {check.title}
                    </p>
                ))
                }
            </div>
        </>
    );
};

export default Helpful;