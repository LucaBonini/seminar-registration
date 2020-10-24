import React, { useState, useEffect } from 'react';
import { LastStep } from '../interfaces'

export function Step3({ setMyState, available, handleSubmit }: LastStep): JSX.Element {

  let [letSRock, setLetSRock] = useState<boolean | null>(null)

  useEffect(() => {
    if (letSRock) {
      setMyState('step3', true)
    } else {
      setMyState('step3', false)
    }
  }, [letSRock])

  return (
    <fieldset>
      <legend>Step 3</legend>
      <label htmlFor="rock">
          Are you ready to rock?
      </label>
      <input type="checkbox" id="rock" onChange={(e) => setLetSRock(e.target.checked)}/>
      <input 
        type="submit" 
        id="submit_button" 
        disabled={!(!!letSRock)} 
        value="Complete Registration"
        onClick={(e) => {e.preventDefault(); handleSubmit()}}
      />
    </fieldset>
  )
}