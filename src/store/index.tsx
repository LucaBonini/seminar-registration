import React, { createContext, useReducer } from 'react'
import { StateData } from '../types'
import { reducer } from '../reducers'

export const initialState: StateData = {
  step1: {
    peopleCount: 0,
    names: {}
  },
  step2: {
    companyBadge: null,
    specialAccomodation: null
  },
  step3: {
    letSRock: null
  }
}

export const store = createContext<{
  state: StateData
  dispatch: React.Dispatch<any>
}>({
  state: initialState,
  dispatch: () => null
})

const { Provider } = store

export const StateProvider = ({ children }: {children: JSX.Element}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}
