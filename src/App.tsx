import React, { useState, useContext } from 'react'
import { Step1 } from './components/Step1'
import { Step2 } from './components/Step2'
import { Step3 } from './components/Step3'
import { StateData, ActionType, StateSteps } from './types'
import { store } from './store'

const defaultState: StateData = {
  step1: {
    peopleCount: 0,
    names: {}
  },
  step2: {
    companyBadge: null,
    specialAccomodation: null
  },
  step3: {
    letSRock: null
  }
}

const defaultStepsComplete: StateSteps = {
  step1: false,
  step2: false,
  step3: false
}

const defaultStepsAvailable: StateSteps = {
  step1: true,
  step2: false,
  step3: false
}

export default function App(): JSX.Element {
  
  let { state, dispatch } = useContext(store)

  let [stepsComplete, setStepsComplete] = useState<StateSteps>(defaultStepsComplete)

  let [stepsAvailable, setStepsAvailable] = useState<StateSteps>(defaultStepsAvailable)

  function handleSubmit(): void {
    setStepsComplete(defaultStepsComplete)
    setStepsAvailable(defaultStepsAvailable)
    dispatch({ type: ActionType.RESET_DEFAULT_STATE, payload: defaultState })
    console.log(state, 'DATA SUBMITTED')
  }

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
    <div>
      <h1>Seminar <span>Registration</span></h1>
      <form action="">
        <div className="steps-container">
          <Step1 
            setMyState={setStepState} 
            setNextStep={setNextStep} 
            available={stepsAvailable.step1}
            isComplete={stepsComplete.step1}
          ></Step1>
          <Step2 
            setMyState={setStepState} 
            setNextStep={setNextStep} 
            available={stepsAvailable.step2}
            isComplete={stepsComplete.step2}
          ></Step2>
          <Step3 
            setMyState={setStepState} 
            available={stepsAvailable.step3}
            handleSubmit={handleSubmit}
            isComplete={stepsComplete.step3}
          ></Step3>
        </div>
      </form>
    </div>
  )
}