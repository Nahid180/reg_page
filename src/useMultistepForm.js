import { useState } from "react";

export function useMultistepForm(steps){
    const [currentStepindex, setcurrentStepindex] = useState(0)

    function next(){
        setcurrentStepindex(i => {
            if (i >= steps.length - 1) return i
            return i+1
        })
    }
    function back(){
        setcurrentStepindex(i => {
            if (i <=0) return i
            return i-1
        })
        
    }
    function goto(index){
        setcurrentStepindex(index)
    }
    return{
        currentStepindex,
        step: steps[currentStepindex],
        steps,
        isFirstStep: currentStepindex ===0,
        isLastStep: currentStepindex === steps.length - 1,
        goto,
        next,
        back
    }
}