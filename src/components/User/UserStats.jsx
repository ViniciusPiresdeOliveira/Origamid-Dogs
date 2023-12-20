import React, { Suspense, lazy, useEffect } from 'react'
import { STATS_GET } from '../../api'
import useFetch from '../../hooks/useFetch'
import Error from '../Helper/Error'
import Head from '../Helper/Head'
import Loading from '../Helper/Loading'
const UserStatsGraphs = lazy(() => import('./UserStatsGraphs'))

const UserStats = () => {

  const {loading, data, error, request} = useFetch()

  useEffect(() => {
    async function getData(){
      const {url, options} = STATS_GET()
      await request(url, options)
    }
    getData()
  }, [request])

  if (loading) {
    <Loading/>
  }

  if (loading) {
    <Error error={error}/>
  }

  if (data) {    
      return (
        <Suspense fallback={<></>}>
          <Head title={'Estatísticas'}/>
          <UserStatsGraphs data={data}/>
        </Suspense>
      )
  } else {
    return null
  }
}

export default UserStats