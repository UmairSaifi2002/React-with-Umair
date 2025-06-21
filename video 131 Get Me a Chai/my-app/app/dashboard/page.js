'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const DashboardPage = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  // if (status === 'loading') {
  //   return <div className='text-white'>Loading...</div>
  // }

  // if (!session) {
  //   const router = useRouter()
  //   router.push('/login')
  // }

  return (
    <div className='text-white'>
      Dashboard Content
    </div>
  )
}

export default DashboardPage
