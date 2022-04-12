import React, {useEffect, useRef, useState} from 'react'
import '@polymer/paper-input/paper-input.js'

const PaperInputWrapper = (props) => {
  // Adds listeners and ref to input
  const {onChange, onEnterPressed} = props
  const inputRef = useRef(null)

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && onEnterPressed) {
      onEnterPressed()
    }
  }

  useEffect(() => {
    let element = inputRef.current

    return () => {
      if (element != null) {
        element.removeEventListener('blur', onChange)
        element.removeEventListener('focus', onChange)
        element.removeEventListener('keydown', handleKeyDown)
      }
    }
  })

  return (
    <React.Fragment>
      {React.cloneElement(props.children, {
        ref: inputRef,
        onInput: onChange,
      })}
    </React.Fragment>
  )
}

export function App() {
  const [val, setVal] = useState('')

  const changeInput = ({target}) => {
    const value = target.value
    setVal(value)
  }

  return (
    <div>
      <PaperInputWrapper onChange={changeInput}>
        <paper-input
          always-float-label
          data-testid="paper-input"
          label="Custom Element"
          onChange={(e) => setVal(e.target.value)}
        ></paper-input>
      </PaperInputWrapper>
      <div data-testid="output">{val}</div>
    </div>
  )
}
