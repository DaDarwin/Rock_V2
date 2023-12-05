import { AppState } from "../AppState.js"
import { upgradeService } from "../services/UpgradeService.js"




export class UpgradeController{

    constructor(){
        AppState.on('rocks', this.drawRocks)
        AppState.on('rocks', this.drawRocks)
        AppState.on('rocks', this.drawRocks)
        AppState.on('rocks', this.drawRocks)
        setInterval(upgradeService.autoRocks, 1000)
    }

    drawRocks(){document.getElementById(rockAmount).innerText = `Rocks: ${rocks}`}
    drawClickRocks(){document.getElementById('clickRocks').innerText = `RPC: ${player.rocksOnClick}`}
    drawAutoRocks(){document.getElementById('autoRocks').innerText = `RPS: ${player.autoRocks}`}
    updateUpgrades(){}
    



    
    findUpgrade(upgradeName){return upgrades.find(upgrade => upgrade.name == upgradeName)}
        // let upgrade = findUpgrade(upgradeName)
    
    collectRocks(upgradeName){
        upgradeService.collectRocks(upgrade)}









}
