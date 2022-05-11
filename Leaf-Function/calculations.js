class Cal {
    constructor (tempA, tempL, relH, barometric=101.3) {
        this.tempA = tempA;
        this.tempL = tempL;
        this.relH = relH;
        this.barometric = barometric;
    }
    //vapour pressure deficit getter
    get VPD() {
        return this.calVPD();
    }
    //vapour pressure deficit method
    calVPD() {
        return (1- this.relH/100)*(610.7*10**(7.5*this.tempA/(237.3+this.tempA))/1000)
    }
    //dewpoint getter
    get DP() {
        return this.DPCal();
    }
    //dewpoint method
    DPCal () {
        return (((this.relH / 100) ** 0.125) * (0.9 * this.tempA + 112) + (0.1 * this.tempA - 112));
    }
    //saturation vapour pressure getter
    get SVP() {
        return this.SVPCal();
    }

    SVPCal() {
        return ((610.78 * (2.71 ** (((this.tempL/(this.tempL+238.3))*17.2694))) / 1000))
    }
    //RH Leaf getter
    get rel () {
        return this.RelLeaf();
    }
    //RH Leaf method
    RelLeaf () {
        return ((112 - 0.1 * this.tempL + this.DP) / (112 + 0.9 * this.tempL))**8*100;
    }
    //vapour pressure getter
    get vapPres () {
        return this.vapPresCal();
    }
    //vapour pressure method
    vapPresCal () {
        return (this.SVP * this.rel) / 100;
    }
    //wa = vap_pressure / (1000/10)
            //wi = ((p(L_t))/(1000/10))
    //leaf vapour pressure
    get leafVP () {
        return this.leafVPCal();
    }
    //leaf vapour pressure method
    leafVPCal () {
        return this.SVP / (1000/10);
    }
    //air vapour pressure getter
    get airVP () {
        return this.airVPCal();
    }
    //air vapour pressure method
    airVPCal () {
        return (this.SVP * this.rel)/100 / (1000/10)
    }
    //transpiration
    get trans () {
        return this.transCal();
    }
    //transpiration cal
    transCal () {
        return ((this.tempL + this.tempA) * (this.tempA - this.tempL) / this.relH).toFixed(2);
    }
     //conductance
     get cond () {
        return this.conCal();
    }
    //transpiration cal
    conCal () {
        return (((this.trans / (this.leafVP - this.airVP)) / this.barometric)*100).toFixed(1);
    }
    //leaf water
    get leafW () {
        return this.leafWCal();
    }
    leafWCal() {
        return ((this.trans / this.cond * 100) / Math.sqrt(this.VPD)).toFixed(2);
    }
    //stem water
    get stemW () {
        return this.stemWCal();
    }
    stemWCal () {
        return (((this.leafVP - this.airVP) * (273.15 + this.tempL) * Math.log(this.vapPres / this.SVP)) / this.SVP).toFixed(2);
    }
    get photo () {
        return this.photoCal().toFixed(2);
    }
    photoCal () {
        return ((this.tempA - this.tempL) * 2) / ((this.tempL + this.tempA) / this.relH) * (0.01 * this.relH * (this.tempA - this.tempL));
    }
    difference() {
        let diff = this.tempA - this.tempL;
        let diff2 = this.tempL === this.tempA;
        let diff3 = this.tempL >= this.tempA;
        console.log(diff);
        if (diff > 5) {
            return true;
        } else if (diff2 == true) {
            this.tempA += 0.1;
            return 'same';
        } else if (diff3 == true) {
            return 'high';
        }
        
    } 
    
}


const outPut = new Cal(21, 15.5, 55);
const gg = outPut.difference();
if ( gg === true) {
    console.log('...........');
} else if ( gg === 'same' ) {
    console.log(outPut.leafW, outPut.stemW);
} else if ( gg === 'high' ) {
    console.log(outPut.leafW, outPut.stemW);
} else {
    console.log(outPut.leafW, outPut.stemW, outPut.photo);
}



/*console.log(outPut.VPD, outPut.DP, outPut.SVP, outPut.rel, outPut.vapPres, outPut.leafVP, outPut.airVP, outPut.trans, outPut.cond);
console.log(outPut.leafW, outPut.stemW, outPut.photo);
console.log(outPut.cond, outPut.trans);
console.log(Math.log(2.61/1.83*22).toFixed(3));*/