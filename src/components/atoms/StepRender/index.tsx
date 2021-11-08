import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react"

type StepRenderProp = {
    current: any,
    steps: any[],
    children: any
}

export type StepRenderRef = {
    next: Function,
    back: Function
}

const Steps: React.ForwardRefRenderFunction<StepRenderRef, StepRenderProp> = ({ steps, current, children, ...ref }, forwardedRef) => {
    let i = steps.findIndex(e => e === current)
    let [step, setStep] = useState<any>(i !== -1 ? i : 0)

    useEffect(() => {
        if (typeof steps[current] !== 'undefined') {
            setStep(current)
        }
    }, [current])

    useImperativeHandle(forwardedRef, () => {
        return {
            next: () => {
                if (typeof steps[step + 1] !== 'undefined') {
                    setStep(step + 1)
                }
            },
            back: () => {
                if (typeof steps[step - 1] !== 'undefined') {
                    setStep(step - 1)
                }
            },
        }
    }, [step])

    return <>
        {
            React.Children.map(children, (child, index) => {
                if (index === step) {
                    return child
                }
                return null
            })
        }
    </>
}

export const StepRender = forwardRef(Steps)