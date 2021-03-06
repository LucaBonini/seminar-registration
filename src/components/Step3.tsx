import React, { useState, useEffect } from 'react'
import { LastStep } from '../types'

export function Step3 ({ setMyState, available, handleSubmit }: LastStep): JSX.Element {
  const [letSRock, setLetSRock] = useState<boolean | null>(null)

  useEffect(() => {
    if (letSRock) {
      setMyState('step3', true)
    } else {
      setMyState('step3', false)
    }
  }, [letSRock])

  return (
    <fieldset className={`step-3 ${!available ? 'disabled' : ''}`}>
      <legend>Step 3</legend>
      <label htmlFor='rock'>
        Are you ready to rock?
      </label>
      <input
        type='checkbox'
        id='rock'
        onChange={(e) => setLetSRock(e.target.checked)}
        disabled={!available}
      />
      <input
        type='submit'
        id='submit_button'
        disabled={!(letSRock)}
        value='Complete Registration'
        onClick={(e) => { e.preventDefault(); handleSubmit() }}
      />
    </fieldset>
  )
}
