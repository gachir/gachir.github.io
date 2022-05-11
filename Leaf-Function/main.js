const form1 = document.getElementById('raw-data');
const testing = document.getElementById('test');
const stemWP = document.getElementById('stem-WP');
const leafWP = document.getElementById('leaf-WP');
const trans = document.getElementById('transpiration');
const cond = document.getElementById('conductance');
const photo = document.getElementById('photosynthesis');

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
        return ((this.tempA - this.tempL) * 2) / ((this.tempL + this.tempA) / this.relH) * (0.01 * this.relH * (this.tempA - this.tempL))
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


const inVal = [];
const outPut = new Cal(23, 20, 55);
const screenOutput = outPut.leafW;

form1.addEventListener("submit", function (event) {
    event.preventDefault();
    
    let airT = document.getElementById('air-temp').value;
    let relH = document.getElementById('RH').value;
    let leafT = document.getElementById('leaf-temp').value;
    delete inVal.splice(0, 3);
    inVal.push(airT, leafT, relH);
    document.getElementById('air-temp').value = '';
    document.getElementById('RH').value = '';
    document.getElementById('leaf-temp').value = '';
    const inPut = new Cal(parseInt(airT), parseInt(leafT), parseInt(relH));
    const diffM = inPut.difference();
    if ( diffM === true) {
        alert('Check your measurements, temperature difference seems too high.');
        return;
    } else if ( diffM === 'same' ) {
        stemWP.innerHTML = inPut.stemW;
        leafWP.innerHTML = `-${inPut.leafW}`;
        photo.innerHTML = '';
        trans.innerHTML = '';
        cond.innerHTML = '';
        alert('Temperature inputs indicate an error or plants are under stress. Photosynthesis, conductance and transpiration low')
    } else if ( diffM === 'high' ) {
        stemWP.innerHTML = inPut.stemW;
        leafWP.innerHTML = `-${inPut.leafW}`;
        photo.innerHTML = '';
        trans.innerHTML = '';
        cond.innerHTML = '';
        alert('Temperature inputs indicate an error or plants are under stress. Photosynthesis, conductance and transpiration very low')
    } else {
        stemWP.innerHTML = inPut.stemW;
        leafWP.innerHTML = `-${inPut.leafW}`;
        photo.innerHTML = inPut.photo;
        trans.innerHTML = inPut.trans;
        cond.innerHTML = inPut.cond;
        }
   /* stemWP.innerHTML = inPut.stemW;
    leafWP.innerHTML = `-${inPut.leafW}`;
    photo.innerHTML = inPut.photo;
    trans.innerHTML = inPut.trans;
    cond.innerHTML = inPut.cond;*/
	// validate the form
    //let AirT = form.elements['air-temp'];
    //testing.innerHTML = `did this work ${airT} and ${relH} and ${leafT} and ${inputValues} and ${screenOutput}`;
    //testing.innerHTML = "<p>it worked</p>";
    
    
});




