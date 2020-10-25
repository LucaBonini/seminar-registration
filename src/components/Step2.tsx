import React, { useState, useEffect } from 'react';
import { NotLastStep } from '../interfaces'

export function Step2({setMyState, setNextStep, available}: NotLastStep): JSX.Element {

  let [companyBadge, setCompanyBadge] = useState<boolean | null>(null)
  let [companyName, setCompanyName] = useState<string>('')
  let [specialAccomodation, setSpecialAccomodation] = useState<boolean | null>(null)
  let [specialAccomodationReason, setSpecialAccomodationReason] = useState<string>('')
  let [isComplete, setIsComplete] = useState<boolean>(false)

  useEffect(() => {
    if (checkValues()) {
      setIsComplete(true)
      setMyState('step2', true)
      setNextStep('step3', true)
    } else {
      setIsComplete(false)
      setMyState('step2', false)
      setNextStep('step3', false)
    }
  },[companyBadge, companyName, specialAccomodation, specialAccomodationReason])

  function onChangeCompanyBadge(value: boolean): void {
    setCompanyBadge(value)
  }

  function onChangeSpecialAccomodation(value: boolean): void {
    setSpecialAccomodation(value)
  }

  function checkValues(): boolean {
    const company = (companyBadge !== null && companyName.length > 0 || companyBadge === false && !companyName.length)
    const specialAcc = (
      specialAccomodation !== null && specialAccomodationReason.length > 0 ||
      specialAccomodation == false && !specialAccomodationReason.length 
    ) 
    return (company && specialAcc)
  }

  function renderCompanyNameInput(): JSX.Element {
    return (
      <div id="company_name_wrap">
          <label htmlFor="company_name">
              Company Name:
          </label>
          <input type="text" name="companyName" onChange={(e) => setCompanyName(e.target.value)}/>
      </div>
    )
  }

  function renderSpecialAccomodationReason(): JSX.Element {
    return (
      <div id="special_accommodations_wrap">
          <label htmlFor="special_accomodations_text">
              Please explain below:
          </label>
          <div>
            <textarea 
              rows={10} 
              cols={10} 
              id="special_accomodations_text" 
              onChange={(e) => setSpecialAccomodationReason(e.target.value)}>  
            </textarea>
          </div>
      </div>
    )
  }

  return (
    <fieldset className={`${!available ? 'disabled' : ''}`}>
      <legend>Step 2</legend>
        <p>Would you like your company name on your badges?</p>
        <input 
          type="radio" 
          id="company_name_toggle_on" 
          name="company_name_toggle_group"
          onChange={() => onChangeCompanyBadge(true)}
          disabled={!available}
        />
        <label htmlFor="company_name_toggle_on">Yes</label>
        <input 
          type="radio" 
          id="company_name_toggle_off" 
          name="company_name_toggle_group"
          onChange={() => onChangeCompanyBadge(false)}
          disabled={!available}
        />
        <label htmlFor="company_name_toggle_off">No</label>
        {companyBadge ? renderCompanyNameInput(): null}
        <div>
          <p>Will anyone in your group require special accommodations?</p>
          <input 
            type="radio" 
            id="special_accommodations_toggle_on" 
            name="special_accommodations_toggle"
            onChange={() => onChangeSpecialAccomodation(true)}
            disabled={!available}
          />
          <label htmlFor="special_accommodations_toggle_on">Yes</label>
          &emsp;
          <input 
            type="radio" 
            id="special_accommodations_toggle_off" 
            name="special_accommodations_toggle"
            onChange={() => onChangeSpecialAccomodation(false)}
            disabled={!available}
          />
          <label htmlFor="special_accommodations_toggle_off">No</label>
          {specialAccomodation ? renderSpecialAccomodationReason() : null}
        </div>
        {isComplete ? <div>Complete</div> : null}
    </fieldset>
  )
}