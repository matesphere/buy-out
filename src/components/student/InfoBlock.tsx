import React from 'react'
import { DevOpsRenderer } from './RichTextRenderers'

interface SliderProps {
    items: Array<string>
}

export const InfoBlock = ({ items }: SliderProps) => (
    <>
        {items.map((item, i) => (
            <p className="sm-type-guitar mb-4" key={i}>
                <DevOpsRenderer content={item.raw} />
            </p>
        ))}
    </>
)
