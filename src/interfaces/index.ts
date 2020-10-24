export interface StepProps {
  setMyState(stepName: string, value: boolean): void,
  setNextStep(stepName: string, value: boolean): void,
  available: boolean
}