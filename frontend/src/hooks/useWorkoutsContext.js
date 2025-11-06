import { WorkoutsContext } from "../context/WorkoutContext"
import { useContext } from "react"



export const useWorkoutsContext =()=>{
    const context = useContext(WorkoutsContext)

    if(!context){
        throw Error('useWorkCoontext must have used inside an workoutsContextProvider')
    }

return context
}