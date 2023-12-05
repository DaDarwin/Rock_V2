import { Upgrade } from './models/upgrades.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []
  
  player ={
      rocksOnClick: 1,
      autoRocks:0,}

  rocks = 0
  totalRocks = 0

  upgrades = [
    Upgrade('Pick','click',1,5),
    Upgrade('Drill','click',5,20),
    Upgrade('Dude','auto',1,50),
    Upgrade('Pick','auto',10,100),]
}

export const AppState = createObservableProxy(new ObservableAppState())