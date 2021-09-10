import React from 'react'
import { DevOpsRenderer } from '../../components/student/RichTextRenderers'

interface SliderProps {
    items: Array<string>
}

export const IntroInfo = ({ items }: SliderProps) => (
    <>
        {items.map((item, i) => (
            <p className="sm-type-guitar mb-4" key={i}>
                <DevOpsRenderer content={item.raw} />
            </p>
        ))}
    </>
)
