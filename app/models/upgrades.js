export class Upgrade{
    name
    kind
    qty
    amount
    price
    constructor(name, kind, amount, price){
        this.name = name
        this.kind = kind
        this.qty = 0
        this.amount = amount
        this.price = price
    }

    get upgradePanel(){

        document.getElementById(this.name).remove()

        const upgradeELM = document.createElement('div')
        upgradeELM.id = this.name
        upgradeELM.classList.add('row.justify-content-center.m-2')

        const nameELM = document.createElement('h4')
        nameELM.classList.add('col-12')
        nameELM.innerText = this.name
        
        const powerELM = document.createElement('h5')
        powerELM.classList.add('col-6')
        powerELM.innerText = (this.amount * this.qty)
        
        const qtyELM = document.createElement('h5.m-0')
        qtyELM.classList.add('col-6.m-0')
        console.log(qtyELM)
        
        const priceELM = document.createElement('button')
        priceELM.classList.add('col-6.btn.btn-outline-info')
        priceELM.setAttribute('onclick',`app.UpgradeController.addUpgrade('${this.name}')`)

        upgradeELM.append(nameELM, powerELM, qtyELM, priceELM)
        return upgradeELM
    }
}