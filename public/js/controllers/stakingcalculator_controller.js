import { Controller } from 'stimulus'
// import TurboQuery from '../helpers/turbolinks_helper'
// import { getDefault } from '../helpers/module_helper'

export default class extends Controller {
  static get targets () {
    return [
<<<<<<< HEAD
      'endDate', 'output', 'currentTicketPrice', 'asr', 'blocksperyear', 'simblock', 'currentblocknum', 'simulationreward'
=======
      'startDate', 'endDate', 'output'
>>>>>>> 07727f872314cc565069f4d4861e556426d057d6
    ]
  }

  computeStake (e) {
<<<<<<< HEAD
    var newDate = new Date(this.endDateTarget.value)
    var currentDate = Date.now()

    var timeDifference = newDate.getTime() - currentDate
    var days = timeDifference / (1000 * 3600 * 24)
    this.outputTarget.textContent = `Days ${days}`

    console.log(`endDateTarget: ${this.endDateTarget.value}`)
    console.log(`currentTicketPriceTarget: ${this.currentTicketPriceTarget.value}`)
    console.log(`asrTarget: ${this.asrTarget}`)
    console.log(`blocksperyearTarget: ${this.blocksperyearTarget}`)
    console.log(`simblockTarget: ${this.simblockTarget}`)
    console.log(`currentblocknumTarget: ${this.currentblocknumTarget}`)
    console.log(`simulationrewardTarget": ${this.simulationrewardTarget}`)
=======
    this.outputTarget.textContent = `From: ${this.startDateTarget.value}, To: ${this.endDateTarget.value}`
>>>>>>> 07727f872314cc565069f4d4861e556426d057d6
  }
}
