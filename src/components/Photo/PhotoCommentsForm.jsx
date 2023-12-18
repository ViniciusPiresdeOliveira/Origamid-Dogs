import React, { useState } from 'react'
import { COMMENT_POST } from '../../api'
import { ReactComponent as Enviar } from '../../assets/enviar.svg'
import useFetch from '../../hooks/useFetch'
import Error from '../Helper/Error'
import styles from './PhotoCommentsForm.module.css'

const PhotoCommentsForm = ({id, setComments}) => {

    const {request, error} = useFetch()
    const [comment, setComment] = useState('')

    async function handleSubmit(e){
        e.preventDefault()
        const {url, options} = COMMENT_POST(id, {comment})
        const {response, json} = await request(url, options)
        if (response.ok) {
          setComment('')
          setComments(comments => [...comments, json])
        }
    }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
        <textarea className={styles.textarea} placeholder='Comente...' id='comment' name='comment' value={comment} onChange={({target}) => setComment(target.value)}/>
        <button className={styles.button}>
            <Enviar/>
        </button>
        <Error error={error}/>
    </form>
  )
}

export default PhotoCommentsForm