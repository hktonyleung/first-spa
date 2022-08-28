import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import FormButton from './FormButton';
import { FormContext } from './FormContext';

export default function Form() {
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

    useEffect(() => {
        if (formStep === 0) {
            //console.log('formstep:0')
            setFocus("username");
        } else if (formStep === 1){
            //console.log('formstep:1')
            setFocus("address");
        } else if (formStep === 2){
            //console.log('formstep:2')
        }
        
    }, [formStep]);

    /*
    const renderButton = () => {

        if (formStep > 2) {
            return undefined
        } else if (formStep === 2) {
            return (
                <button 
                disabled={!isValid} 
                type="submit" >
                Create Account
                </button>
            )
        } else {
            return (
                <button 
                disabled={!isValid}
                type="button" onClick={completeFormStep}>
                Next Step
                </button>
            )
        }
    }
    */
    return (

<div>
<div>
<FormContext.Provider value={{formStep, setFormStep, isValid}}>
    
    <form onSubmit={handleSubmit(submitForm)}>

        { formStep === 0 && <section>
            <h2>
            Personal Information
            </h2>
            <label htmlFor="username">Username</label>
            <input
            type="text"
            id="username"
            name="username"
            className="text-input" {...register("username", {
                required: 'Please input username',
            })}
            />
            { errors.username && <p>{errors.username.message}</p> }
        </section>}

        { formStep === 1 && <section>
            <h2>Billing Information</h2>
            <label htmlFor="address">Address</label>
            <input
            type="text"
            id="address"
            name="address"
            className="text-input" {...register("address", {
                required: 'Please input address',
            })}
            />
            { errors.address && <p>{errors.address.message}</p> }        
        </section>}
        { formStep === 2 && <section>
            <h2>Legal Information</h2>
            <div>
            <input
                name="toc"
                type="checkbox" {...register("toc", {
                    required: 'Please accept toc ',
                })}
            />
            <span>
                I accept the{" "}
                <a href="/">
                Terms and Conditions
                </a>
                .
            </span>
            </div>
            <div>
            <input
                name="pp"
                type="checkbox" {...register("pp", {
                    required: 'Please accept privacy policy ',
                })}
            />

            <span>
                I accept the{" "}
                <a href="/">
                Privacy Policy
                </a>
                .
            </span>
            { errors.toc && <p>{errors.toc.message}</p> }
            { errors.pp && <p>{errors.pp.message}</p> }        
            </div>

        </section>}

        { formStep === 3 && <section>
            <h2>Congratutation</h2>
        
        </section>}
        {/*renderButton()*/}

        <FormButton></FormButton>
        <pre>
            {JSON.stringify(watch(),null,2)}
        </pre>
    </form>


</FormContext.Provider>



</div>
</div>



      );
}
