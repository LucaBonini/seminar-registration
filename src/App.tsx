import React, { useEffect, useState } from 'react'
import { Step1 } from './components/Step1'
import { Step2 } from './components/Step2'
import { Step3 } from './components/Step3'
import { StateData, Step1Type, Step2Type, Step3Type, Steps } from './interfaces'

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

  let [data, setData] = useState<StateData>({
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
  })

  useEffect(() => {
    console.log(stepsComplete, 'STATE')
  }, [stepsComplete])

  function setMyData(stepName: Steps, value: Step1Type | Step2Type | Step3Type ) {
    const newData: StateData = {
      ...data,
      [stepName]: value
    }
    setData(newData)
  }

  function handleSubmit() {
    console.log(data, 'DATA SUBMITTED')
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
    <form action="">
      <div className="steps-container">
        <Step1 
        setMyState={setStepState} 
        setMyData={setMyData} 
        setNextStep={setNextStep} 
        available={stepsAvailable.step1}
        ></Step1>
        <Step2 
          setMyState={setStepState} 
          setMyData={setMyData} 
          setNextStep={setNextStep} 
          available={stepsAvailable.step2}
        ></Step2>
        <Step3 
          setMyState={setStepState} 
          setMyData={setMyData} 
          available={stepsAvailable.step3}
          handleSubmit={handleSubmit}
        ></Step3>
      </div>
    </form>
  )
}