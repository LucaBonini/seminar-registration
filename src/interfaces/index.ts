export interface NotLastStep extends StepProps {
  setNextStep(stepName: string, value: boolean): void
}

export interface LastStep extends StepProps {
  handleSubmit(): void
}

export interface StepProps {
  setMyState(stepName: string, value: boolean): void,
  available: boolean,
  setMyData(stepName: Steps, value: Step1Type | Step2Type | Step3Type ): void
  isComplete: boolean
}
export enum Steps {
  step1 = 'step1',
  step2 = 'step2',
  step3 = 'step3'
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