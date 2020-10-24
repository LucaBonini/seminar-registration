import React, { useEffect, useState } from 'react'
import { Step1 } from './components/Step1'
import { Step2 } from './components/Step2'

interface StateSteps{
  step1: boolean,
  step2: boolean,
  step3: boolean
}

export default function App(): JSX.Element {

  let [stepsComplete, setStepsComplete] = useState<StateSteps>({
    step1: false,
    step2: false,
    step3: false
  })

  let [stepsAvailable, setStepsAvailable] = useState<StateSteps>({
    step1: true,
    step2: false,
    step3: false
  })

  useEffect(() => {
    console.log(stepsComplete, 'STATE')
  }, [stepsComplete])

  function setStepState(stepName: string, value: boolean) {
    const newStepsComplete: StateSteps = {
      ...stepsComplete,
      [stepName]: value
    }
    setStepsComplete(newStepsComplete)
  }

  function setNextStep(stepName: string, value: boolean) {
    const newStepsAvailable: StateSteps = {
      ...stepsAvailable,
      [stepName]: value
    }
    setStepsAvailable(newStepsAvailable)
  }

  return (
    <div className="steps-container">
      <Step1 setMyState={setStepState} setNextStep={setNextStep} available={stepsAvailable.step1}></Step1>
      <Step2 setMyState={setStepState} setNextStep={setNextStep} available={stepsAvailable.step2}></Step2>
    </div>
  )
}