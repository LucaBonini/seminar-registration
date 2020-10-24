export interface NotLastStep extends StepProps {
  setNextStep(stepName: string, value: boolean): void
}

export interface StepProps {
  setMyState(stepName: string, value: boolean): void,
  available: boolean
}