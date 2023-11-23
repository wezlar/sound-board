import React, { useReducer } from 'react'
import SoundBoard from './components/SoundBoard/SoundBoard'
import styled from 'styled-components'

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #282c34;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  h1 {
    font-size: 20px;
  }
`

const SideColumn = styled.div`
  text-align: right;
  padding: 0 10px;
  font-size: 0.8rem;
  select {
    margin-left: 10px;
  }
`

export type ModeType = 'normal' | 'jordan'
type VolumeAdjustmentType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

interface DefaultStateType {
  mode: ModeType
  volumeAdjustment: VolumeAdjustmentType
}

interface UpdateModeAction {
  type: 'UPDATE_MODE'
  payload: ModeType
}

interface UpdateVolumeAdjustmentAction {
  type: 'UPDATE_VOLUME_ADJUSTMENT'
  payload: VolumeAdjustmentType
}

type Action = UpdateModeAction | UpdateVolumeAdjustmentAction

const defaultState: DefaultStateType = {
  mode: 'normal',
  volumeAdjustment: 0,
}

const reducer = (state: DefaultStateType, action: Action): DefaultStateType => {
  switch (action.type) {
    case 'UPDATE_MODE':
      return {
        ...state,
        mode: action.payload,
      }
    default:
      return state
  }
}

const App = (): JSX.Element => {
  const [state, setState] = useReducer(reducer, defaultState)

  const { mode } = state

  return (
    <div className="App">
      <Header className="App-header">
        <SideColumn />
        <h1>15gifts Soundboard</h1>
        <SideColumn>
          <label>
            Mode:
            <select
              value={mode}
              onChange={(e) => {
                setState({ type: 'UPDATE_MODE', payload: e.target.value as ModeType })
              }}
            >
              <option value="normal">Normal</option>
              <option value="jordan">Jordan</option>
            </select>
          </label>
        </SideColumn>
      </Header>
      <main>
        <SoundBoard mode={mode} />
      </main>
    </div>
  )
}

export default App
