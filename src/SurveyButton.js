import React, { useContext } from 'react'
import { SurveyContext } from './SurveyContext'

export default function SurveyButton() {

    const {formStep, setFormStep, isValid} = useContext(SurveyContext)

    const submitForm = (values) => {
        alert(JSON.stringify(values, null, 2))
        completeFormStep()
    }

    const completeFormStep = ()=>{
        setFormStep(formStep + 1)
    }

    if (formStep > 2) {
        return (<div>formStep: {formStep}</div>)
    } else if (formStep === 2) {
        return (
            <div>formStep: {formStep}
            <button 
            disabled={!isValid} 
            type="submit" >
            Create Account
            </button>
            </div>
        )
    } else {
        return (
            <div>formStep: {formStep}
            <button 
            disabled={!isValid}
            type="button" onClick={completeFormStep}>
            Next Step
            </button>
            </div>
        )
    }



}
