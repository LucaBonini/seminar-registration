import React, { useEffect, useState } from 'react'
import { Step1 } from './components/Step1'

interface StepsComplete {
  step1: boolean,
  step2: boolean,
  step3: boolean
}

export default function App(): JSX.Element {

  let [state, setState] = useState<StepsComplete>({
    step1: false,
    step2: false,
    step3: false
  })

  useEffect(() => {
    console.log(state, 'STATE')
  }, [state])

  function setStepState(stepName: string, value: boolean) {
    const newState: StepsComplete = {
      ...state,
      [stepName]: value
    }
    setState(newState)
  }

  return (
    <div className="steps-container">
      <Step1 setMyState={setStepState}></Step1>
    </div>
  )
}