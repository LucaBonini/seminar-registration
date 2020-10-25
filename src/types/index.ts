export interface NotLastStep extends StepProps {
  setNextStep(stepName: string, value: boolean): void
}

export interface LastStep extends StepProps {
  handleSubmit(): void
}

export interface StepProps {
  setMyState(stepName: string, value: boolean): void,
  available: boolean,
  isComplete: boolean
}
export enum Steps {
  step1 = 'step1',
  step2 = 'step2',
  step3 = 'step3'
}

export enum ActionType {
  PEOPLE_COUNT = 'people_count',
  ATTENDER_NAMES = 'attenders_name',
  COMPANY_BADGE = 'company_badge',
  COMPANY_NAME = 'company_name',
  NEED_SPECIAL_ACCOMODATION = 'need_special_accomodation',
  SPECIAL_ACCOMODATION_REASON = 'special_accomodation_reason',
  READY_TO_ROCK = 'ready_to_rock',
  RESET_DEFAULT_STATE = 'reset_default_state'
}

type Names = {
  [key: string]: string
}

export type Step1Type = {
  peopleCount: number,
  names: Names,
}

export type Step2Type = {
  companyBadge: boolean | null,
  companyName?: string,
  specialAccomodation: boolean | null,
  specialAccomodationReason?: string,
}

export type Step3Type = {
  letSRock: boolean | null,
}

export interface StateData {
  step1: Step1Type,
  step2: Step2Type,
  step3: Step3Type
}