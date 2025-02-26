import React from 'react'
import PassFuncAsProps from './pass-func-as-props'
import ForwardRefComp from './forward-ref-comp'
import UseFormStatusHook from './use-form-status-hook'

const LastThreeTasks = () => {
  return (
    <div className='bg-gray-200 flex'>
          <div className='w-full'>
          <PassFuncAsProps/>
          <ForwardRefComp/>
          </div>
          <div className='w-full'>
          <UseFormStatusHook/>
          </div>
    </div>
  )
}

export default LastThreeTasks
