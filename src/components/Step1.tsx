import React, { useState, useEffect } from 'react';
import { JsxEmit } from 'typescript';

interface Names {
  [key: string]: string
}

interface StepProps {
  setMyState(stepName: string, value: boolean): void
}

export function Step1({ setMyState }: StepProps): JSX.Element {
  let [peopleCount, setPeopleCount] = useState<number>(0)
  let [names, setNames] = useState<Names>({})
  let [isComplete, setIsComplete] = useState<boolean>(false)

  useEffect(() => {
    if (checkValues()) {
      setIsComplete(true)
      setMyState('step1', true)
    } else {
      setIsComplete(false)
      setMyState('step2', false)
    }
  }, [names])

  function checkValues(): boolean {
    const propsWithValue = Object.values(names).filter(value => value).length
    return (peopleCount > 0 && peopleCount === propsWithValue)
  }

  function handleSetName(index: string, value: string): void {
    let newNames = {
      ...names,
      [index]: value
    }
    setNames(newNames)
  }

  function renderInputNames() {
    if (peopleCount > 0) {
      let inputs: JSX.Element[] = []
      for (let i = 1; i <= peopleCount; i++) {
        let input = (
          <div id={`attendee_${i}_wrap"`} key={i}>
            <label htmlFor={`name_attendee_${i}`}>
              Attendee {i} Name:
            </label>
            <input type="text" id={`name_attendee_${i}`} onChange={(e) => handleSetName(`${i}`, e.target.value)}/>
          </div>
        )
        inputs.push(input)
      }
      return (
        <div id="attendee_container">
          <h3>Please provide full names:</h3>
          {inputs}
        </div>
      )
    }
  }

  return (
    <fieldset>
      <legend>Step 1</legend>
      <label htmlFor="num_attendees">
          How many people will be attending?
      </label>
      <select id="num_attendees" onChange={(e) => setPeopleCount(parseInt(e.target.value))}>
          <option id="opt_0" value="0">Please Choose</option>
          <option id="opt_1" value="1">1</option>
          <option id="opt_2" value="2">2</option>
          <option id="opt_3" value="3">3</option>
          <option id="opt_4" value="4">4</option>
          <option id="opt_5" value="5">5</option>
      </select>
        {renderInputNames()}
        {isComplete ? <div id="step1_result">Complete</div> : null}
    </fieldset>
  )
}
