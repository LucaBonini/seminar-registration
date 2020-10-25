import React, { useState } from 'react'
import { Step1 } from './components/Step1'
import { Step2 } from './components/Step2'
import { Step3 } from './components/Step3'
import { StateData, Step1Type, Step2Type, Step3Type, Steps } from './interfaces'

interface StateSteps{
  step1: boolean,
  step2: boolean,
  step3: boolean
}

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


  let [data, setData] = useState<StateData>(defaultState)

  function setMyData(stepName: Steps, value: Step1Type | Step2Type | Step3Type ) {
    const newData: StateData = {
      ...data,
      [stepName]: value
    }
    setData(newData)
  }

  function handleSubmit() {
    const formData = {
      ...data[Steps.step1],
      ...data[Steps.step2],
      ...data[Steps.step3],
    }
    setData(defaultState)
    setStepsComplete(defaultStepsComplete)
    setStepsAvailable(defaultStepsAvailable)
    console.log(formData, 'DATA SUBMITTED')
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
            setMyData={setMyData} 
            setNextStep={setNextStep} 
            available={stepsAvailable.step1}
            isComplete={stepsComplete.step1}
          ></Step1>
          <Step2 
            setMyState={setStepState} 
            setMyData={setMyData} 
            setNextStep={setNextStep} 
            available={stepsAvailable.step2}
            isComplete={stepsComplete.step2}
          ></Step2>
          <Step3 
            setMyState={setStepState} 
            setMyData={setMyData} 
            available={stepsAvailable.step3}
            handleSubmit={handleSubmit}
            isComplete={stepsComplete.step3}
          ></Step3>
        </div>
      </form>
    </div>
  )
}