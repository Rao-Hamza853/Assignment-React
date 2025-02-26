import React from 'react'
import PassFuncAsProps from './pass-func-as-props'
import ForwardRefComp from './forward-ref-comp'
import UseFormStatusHook from './use-form-status-hook'

const LastThreeTasks = () => {
  return (
    <div className='bg-gray-200 h-screen'>
          <PassFuncAsProps/>
          <ForwardRefComp/>
          <UseFormStatusHook/>
    </div>
  )
}

export default LastThreeTasks
