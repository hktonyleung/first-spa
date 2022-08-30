import React, { useContext } from 'react'
import { Stepper, Step, StepLabel} from '@mui/material'
import { SurveyContext } from '../SurveyContext'

export default function StepperComponent({steps}) {

    const {formStep, setFormStep} = useContext(SurveyContext)

  return (
    <>
        <Stepper activeStep={formStep} alternativeLabel>
            {steps.map((label) => (
            <Step key={label}>
                <StepLabel>{label}</StepLabel>
            </Step>
            ))}
        </Stepper>
    </>
  )
}
