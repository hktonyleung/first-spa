import React, { useState, useEffect } from 'react'
import { Box, Stepper, Step, StepLabel, FormControl} from '@mui/material'
import Questions from './Questions'
import { useForm } from "react-hook-form";
import { SurveyContext } from './SurveyContext';
import SurveyButton from './SurveyButton'
import StepperComponent from './components/StepperComponent';

/*
const steps = [
    'Select master blaster campaign settings',
    'Create an ad group',
    'Create an ad',
  ];
*/
const questions = {
    content: {
        stepper: 
            {
                number: 3,
                steps: [
                    "1. Select master blaster campaign settings",
                    "2. Create an ad group",
                    "3. Create an ad",
                ]
            },
        sections: [
            {
                index: 0,
                body: [
                    {
                        _uid: "gJZoSLkfZV",
                        component: "question",
                        title: "1. How old are you?",
                        name: "old",
                        message: "Your age is required",

                    },
                    {
                        _uid: "X1JAfdsZxy",
                        component: "question",
                        title: "2. Where do you live.",
                        name: "address",
                        message: "Your address is required",
                    },
                ]
            },
            {
                index: 1,
                body: [
                    {
                        _uid: "gJZoSLkfZV",
                        component: "question",
                        title: "3. What is your career?",
                        name: "career",
                        message: "Your career is required",
                    },
                ]
            },
            {
                index: 2,
                body: [
                    {
                        _uid: "gJZoSLkfZV",
                        component: "question",
                        title: "4. How many apple your have?",
                        name: "apple",
                        message: "Apple is required",
                    },
                ]
            },
        ],


        body: [
                {
                    _uid: "gJZoSLkfZV",
                    component: "question",
                    title: "How old are you?"
                },
                {
                    _uid: "X1JAfdsZxy",
                    component: "question",
                    title: "Please select your answer."
                },
                {
                    _uid: "gJZoSLkfZa",
                    component: "select",
                    title: "Another title",
                    items: [
                        {value: 10, text: "ten"}, 
                        {value: 20, text: "twenty"}, 
                        {value: 30, text: "thirty"}, 
                        {value: 40, text: "forthy"}
                    ]
                },
            ]

    }
};

export default function Survey() {
    const { 
        register, 
        handleSubmit, 
        watch, 
        setFocus,
        formState: { errors, isValid } 
        } = useForm({mode: 'all'});
    const [formStep, setFormStep] = useState(0)
        
    const completeFormStep = ()=>{
        setFormStep(formStep + 1)
    }

    const submitForm = (values) => {
        alert(JSON.stringify(values, null, 2))
        completeFormStep()
    }


    return (
        <SurveyContext.Provider value={{formStep, setFormStep, isValid, errors, register}}>

            <form onSubmit={handleSubmit(submitForm)}>
                <Box sx={{ minWidth: 100 }}>
                    <StepperComponent steps={questions.content.stepper.steps} />
                    {/* 
                    <Stepper activeStep={1} alternativeLabel>
                        {questions.content.stepper.steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>                
                    */}

                    
                        {/*<FormControl fullWidth>*/}
                            {questions.content.sections.map(item => (
                                formStep === item.index && <section>
                                    {item.index}
                                    {item.body.map(block => Questions(block))}
                                </section>
                            ))}
                        {/*</FormControl>*/}
                        { formStep === 3 && <section>
                        <h2>Congratutation</h2>
        
                        </section>}

                        <SurveyButton></SurveyButton>  
                    

                </Box>
                <pre>
                {JSON.stringify(watch(),null,2)}
                </pre>
            </form>
        </SurveyContext.Provider>

      );
}
