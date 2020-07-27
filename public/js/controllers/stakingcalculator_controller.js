import { Controller } from 'stimulus'
// import TurboQuery from '../helpers/turbolinks_helper'
// import { getDefault } from '../helpers/module_helper'

export default class extends Controller {
  static get targets () {
    return [
      'startDate', 'endDate', 'output'
    ]
  }

  computeStake (e) {
    this.outputTarget.textContent = `From: ${this.startDateTarget.value}, To: ${this.endDateTarget.value}`
  }
}
