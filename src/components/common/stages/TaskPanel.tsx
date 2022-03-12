import React, { FC } from 'react'
import { Link } from 'gatsby'

import { TaskInfoRenderer } from '../../student/RichTextRenderers'

import TickSheet from '../../../assets/tick-sheet.svg'
import HelpIcon from '../../../assets/help-icon.svg'

interface TaskContainerProps {
    taskToComplete: {
        title?: string
        taskInfo: any
        taskLinkText?: string
    }
    taskLinkUrl?: string
    disabled?: boolean
    children?: any
}

export const TaskContainer: FC<TaskContainerProps> = ({
    taskToComplete: { title, taskInfo, taskLinkText },
    taskLinkUrl,
    disabled,
    children,
}) => (
    <div className={`form-holder-border ${disabled && 'not-available-holder'}`}>
        {title && <p className="sm-type-lead mb-2">{title}</p>}
        <TaskInfoRenderer content={taskInfo.raw} />
        {taskLinkUrl && (
            <p className="sm-type-guitar">
                <Link to={taskLinkUrl}>{taskLinkText}</Link>
            </p>
        )}
        {children}
    </div>
)

interface FeedbackContainerProps {
    docFeedback: {
        feedback: string
    }
}

export const FeedbackContainer = ({ docFeedback }: FeedbackContainerProps) => (
    <div className="side-grey">
        <h3 className="task ticker mb-2">
            <span className="ticker-sheet ticker-feedback">
                <HelpIcon />
            </span>
            <span className="sm-type-drum green-highlight">
                Tutor feedback:
            </span>
        </h3>
        <div className="form-holder-border">
            <p className="sm-type-lead">
                <div
                    dangerouslySetInnerHTML={{
                        __html: docFeedback.feedback,
                    }}
                />
            </p>
        </div>
    </div>
)

interface TaskPanelProps {
    children: any
    docSubmitted?: boolean
    docFeedback?: {
        feedback: string
    }
}

export const TaskPanel: FC<TaskPanelProps> = ({
    children,
    docSubmitted = false,
    docFeedback,
}) => (
    <div className="side-grey">
        <h3 className="task ticker mb-2">
            <span className="ticker-sheet">
                <TickSheet />
            </span>
            <span className="sm-type-drum">
                Task{children.length > 1 ? 's' : ''}{' '}
                {docSubmitted ? 'submitted' : 'to complete:'}
            </span>
        </h3>

        {children}

        {docFeedback && <FeedbackContainer docFeedback={docFeedback} />}
    </div>
)
