import React, {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from "axios"
import { Button,Spinner} from 'reactstrap'
import  {API_BASE_URl} from '../constant.js'
import ConcertCard from '../components/ConcertCard.jsx'


function GroupDetail() {
    const [group, setGroup] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const params = useParams()

   

const getInitialData = async () => {
    setIsLoading(true)
try {
    setIsError(false)
    const response = await axios.get(`${API_BASE_URl}/groups/${params.id}`)
    setGroup(normalizeData(response.data))
} catch (error) {
    setIsError(true)
}
    setIsLoading(false)
}

useEffect(()=> getInitialData(), [])


const normalizeData =(data) =>  {
    const parsedConcerts = JSON.parse(data.Concerts)
    const normalizedConcerts = Object.entries(parsedConcerts.datesLocations).map(loc => {return {location : loc[0], dates : loc[1]}})
    return {...data, Concerts :normalizedConcerts }
}

if (isError) {
return <div>oups... there has been an error </div>
}

if (isLoading) {
return <Spinner/>
}

return (
        <>
    {group?.Id && <div>
        
       <h1>{group.Name}</h1> 
       <p></p>
        <ConcertCard concerts={group.Concerts}/>
        
        
        
        </div>}
    <Link to="/">
        <Button color="dark">
        Back to home
        </Button>
    </Link>

        </>
)
}


export default GroupDetail