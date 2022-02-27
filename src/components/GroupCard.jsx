import React from 'react'
import {Card,CardImg,CardTitle,CardText,Button,CardBody} from 'reactstrap'
import {Link} from 'react-router-dom'

import styles from './groupCard.module.css'

function GroupCard({groupDetail}) {
  
const getUrl = (id) => {
  return `/details/${id}`
}


  return (
    <Card className={styles.cardWrapper}>
      <CardTitle className={styles.cardWrapperTitle}tag="h5">{groupDetail.Name}</CardTitle>
      <CardBody>
      <CardImg alt='toto' src={groupDetail.Image} top width="100%"/>
      <CardText>
        {`Creation date : ${groupDetail.CreationDate}`}
      </CardText>
        Members :
        <ul>
          {groupDetail.Members.map((member, i) => <li key={`${member}-${i}`}>{member}</li>)}
        </ul>
      </CardBody> 
      <Link to={getUrl(groupDetail.Id)}>
      <Button>View details</Button>    
      </Link>

      </Card>
  )
}

export default GroupCard