import { StateData, ActionType } from '../types'

interface Action<T> {
  type: ActionType
  payload: T
}

export const reducer = (state: StateData, action: Action<any>): StateData => {
  switch (action.type) {
    case ActionType.PEOPLE_COUNT:
      return {
        ...state,
        step1: {
          ...state.step1,
          peopleCount: action.payload
        }
      }
    case ActionType.ATTENDER_NAMES:
      return {
        ...state,
        step1: {
          ...state.step1,
          names: {
            ...state.step1.names,
            [action.payload.index]: action.payload.value
          }
        }
      }
    case ActionType.COMPANY_BADGE:
      return {
        ...state,
        step2: {
          ...state.step2,
          companyBadge: action.payload
        }
      }
    case ActionType.COMPANY_NAME:
      return {
        ...state,
        step2: {
          ...state.step2,
          companyName: action.payload
        }
      }
    case ActionType.NEED_SPECIAL_ACCOMODATION:
      return {
        ...state,
        step2: {
          ...state.step2,
          specialAccomodation: action.payload
        }
      }
    case ActionType.SPECIAL_ACCOMODATION_REASON:
      return {
        ...state,
        step2: {
          ...state.step2,
          specialAccomodationReason: action.payload
        }
      }
    case ActionType.READY_TO_ROCK:
      return {
        ...state,
        step3: {
          ...state.step3,
          letSRock: action.payload
        }
      }
    case ActionType.RESET_DEFAULT_STATE:
      return action.payload
    default:
      throw new Error()
  };
}
