import { observer } from 'mobx-react'
import TimerStore from './timerStoreMobx'

export const ShowTimeWithMobx = observer(() => {
    
    return (
      <div>{
        TimerStore.houres >= 10 ? TimerStore.houres : '0' + TimerStore.houres
        } :  {
            TimerStore.minutes >= 10 ? TimerStore.minutes : '0' + TimerStore.minutes
            } : {
                TimerStore.seconds >= 10 ? TimerStore.seconds : '0' + TimerStore.seconds
                }</div>
    )
  })