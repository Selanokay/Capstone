import { useEffect, useState } from "react"

import WorkoutDetails from '../components/WorkoutDetails'
import workout from "../../../backend/models/workout"
const Home= () =>{
    const [workouts, setWorkouts] =useState(null)

    useEffect(()=>{
        const fetchWorkouts =async() => {
            const response =await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok){
                setWorkouts(json)    
            }
        }
        fetchWorkouts()
    }, [])
    return(
        <div className="Home">
            <div className="workouts">
                {workouts && workouts.map(()=>(
                    <WorkoutDetails key = {workout._id} workout={workout}/>
            ))}
            </div>
        </div>
    )
}
export default Home
