import { CircleNotch } from 'phosphor-react'
import React from 'react'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className='w-6 h-6 flex items-center justify-center'>
      <CircleNotch weight='bold' className='w-4 h-4 animate-spin' />
    </div>
  )
}

export default Loading;