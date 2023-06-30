import React from 'react'
import {render} from '@testing-library/react'
import { QueryClientProvider, useQueryClient } from 'react-query'
import { StyleProvider, ThemePicker } from 'vcc-ui'
import { FilterContextProvider } from '../contexts/FilterContext'
StyleProvider

const AllTheProviders = ({children}: {children: React.ReactNode}) => {
  const client = useQueryClient()
  return (
    <QueryClientProvider client={client}>
     <StyleProvider>
          <FilterContextProvider>
            <ThemePicker variant="light">
              {children}
            </ThemePicker>
          </FilterContextProvider>
        </StyleProvider>
    </QueryClientProvider>
  )
}

const customRender = (ui:any, options:any) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}