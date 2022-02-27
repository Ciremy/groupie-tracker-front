import React, {useEffect, useState} from 'react'
import {Spinner} from 'reactstrap'
import axios from "axios"
import GroupCard from '../components/GroupCard.jsx'
import  {API_BASE_URl} from '../constant.js'
import styles from './home.module.css'
import SearchBar from '../components/SearchBar.jsx'

function Home() {

    const [allGroups, setAllGroups] = useState([])
    const [isLoading, setIsLoading] = useState(false)

const getinitialData = async () => {
    setIsLoading(true)
    const response = await axios.get(`${API_BASE_URl}/groups`)
    console.log(response.data)
    setAllGroups(response.data)
    setIsLoading(false)
}


useEffect(()=> {
getinitialData()
    }, [])


    if (isLoading) {
        return <Spinner />
    } else {
        return (
        <div>
            <SearchBar placeholder="Enter a Group Name ..." data={allGroups} />
            <div className={styles.cardsContainer}>{allGroups.map((group) => <GroupCard key={group.Id} groupDetail={group} />)}</div>
        </div>
        )
    }

  
}

export default Home