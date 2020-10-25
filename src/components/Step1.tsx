import React, { useEffect, useContext } from 'react';
import { NotLastStep, ActionType } from '../types'
import { CheckMark } from './checkMark'
import { store } from '../store'

export function Step1({
  setMyState, 
  setNextStep, 
  isComplete 
}: NotLastStep): JSX.Element {

  let { state, dispatch} = useContext(store)
  let { names } = state.step1

  useEffect(() => {
    if (checkValues()) {
      setMyState('step1', true)
      setNextStep('step2', true)
    } else {
      setMyState('step1', false)
      setNextStep('step2', false)
    }
  }, [names])

  function checkValues(): boolean {
    const { names, peopleCount } = state.step1
    const propsWithValue = Object.values(names).filter(value => value).length
    return (peopleCount > 0 && peopleCount === propsWithValue)
  }

  function handleSetName(index: string, value: string): void {
    dispatch({
      type: ActionType.ATTENDER_NAMES,
      payload: {
        index,
        value
      }
    })
  }

  function renderInputNames(): JSX.Element {
    let inputs: JSX.Element[] = []
    for (let i = 1; i <= state.step1.peopleCount; i++) {
      let input = (
        <div key={i}>
          <label htmlFor={`name_attendee_${i}`}>
            Attendee {i} Name:
          </label>
          <input type="text" id={`name_attendee_${i}`} onChange={(e) => handleSetName(`${i}`, e.target.value)}/>
        </div>
      )
      inputs.push(input)
    }
    return (
      <div className="attendee_wrap">
        <h3>Please provide full names:</h3>
        {inputs}
      </div>
    )
  }

  return (
    <fieldset className="step-1">
      <legend>Step 1</legend>
      <label htmlFor="num_attendees">
          How many people will be attending?
      </label>
      <select 
        id="num_attendees" 
        onChange={
          (e) => dispatch({type: ActionType.PEOPLE_COUNT, payload:parseInt(e.target.value)})}
        >
          <option id="opt_0" value="0">Please Choose</option>
          <option id="opt_1" value="1">1</option>
          <option id="opt_2" value="2">2</option>
          <option id="opt_3" value="3">3</option>
          <option id="opt_4" value="4">4</option>
          <option id="opt_5" value="5">5</option>
      </select>
        {(state.step1.peopleCount > 0) ? renderInputNames() : null}
        {isComplete ? <CheckMark /> : null}
    </fieldset>
  )
}
