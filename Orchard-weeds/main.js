const description = document.getElementById('pest-description');

const pic1 = document.getElementById('image-1');
const pic2 = document.getElementById('image-2');
const pic3 = document.getElementById('image-3');
const info1 = document.getElementById('info-1');
const info2 = document.getElementById('info-2');
const info3 = document.getElementById('info-3');
const info4 = document.getElementById('info-4');
const info5 = document.getElementById('info-5');
const info6 = document.getElementById('info-6');
const info7 = document.getElementById('info-7');
const info8 = document.getElementById('info-8');
const info9 = document.getElementById('info-9');
const info10 = document.getElementById('info-10');
const info11 = document.getElementById('info-11');
const info12 = document.getElementById('info-12');
const info13 = document.getElementById('info-13');



function mallow() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${Mallow.common_name}</h1><h3>(<em>${Mallow.botanical_name}</em>)</h3> <p> \
    ${Mallow.cultural}</p><p>${Mallow.hosts}.</p><p>Uses: ${Mallow.uses}</p>\
    <p>Links: <a href='${Mallow.links[1]}' target='_blank'>${Mallow.links[0]}</a></p>\
    <p>Links: <a href='${Mallow.links[3]}' target='_blank'>${Mallow.links[2]}</a></p>\
    <p>Field Observations:</p><p>${Object.keys(Mallow.observations)}:  ${Object.values(Mallow.observations)}</p>`;
    pic3.innerHTML = `${Mallow.pest_images[0]}`;
    pic2.innerHTML = `${Mallow.pest_images[1]}`;
    pic1.innerHTML = `${Mallow.pest_images[2]}`;
}
function nightshade() {
    document.querySelector('.display').style.visibility = 'visible';
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${shade.common_name}</h1> <h3>(<em>${shade.botanical_name}</em>)</h3> <p> \
    ${shade.cultural}</p><p>${shade.hosts}</p><p>Uses: ${shade.uses}</p>\
    <p>Links: <a href='${shade.links[1]}' target='_blank'>${shade.links[0]}</a></p>\
    <p>Links: <a href='${shade.links[3]}' target='_blank'>${shade.links[2]}</a></p><p>Field Observations:</p>\
    <p>${Object.keys(shade.observations)}:  ${Object.values(shade.observations)}</p>`;
    pic3.innerHTML = `${shade.pest_images[0]}`;
    pic2.innerHTML = `${shade.pest_images[1]}`;
    pic1.innerHTML = `${shade.pest_images[2]}`;
}

function thickhead() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${crasso.common_name}</h1> <h3>(<em>${crasso.botanical_name}</em>)</h3> <p> \
    ${crasso.cultural}</p><p>${crasso.hosts}.</p><p>Uses: ${crasso.uses}</p>\
    <p>Links: <a href='${crasso.links[1]}' target='_blank'>${crasso.links[0]}</a></p>\
    <p>Links: <a href='${crasso.links[3]}' target='_blank'>${crasso.links[2]}</a></p><p>Field Observations:</p>\
    <p>${Object.keys(crasso.observations)}:  ${Object.values(crasso.observations)}</p>`;
    pic3.innerHTML = `${crasso.pest_images[0]}`;
    pic2.innerHTML = `${crasso.pest_images[1]}`;
    pic1.innerHTML = `${crasso.pest_images[2]}`;
}

function amaranthus() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${amaranth.common_name}</h1> <h3>(<em>${amaranth.botanical_name}</em>)</h3> <p> \
    ${amaranth.cultural}</p><p>${amaranth.hosts}.</p><p>Uses: ${amaranth.uses}</p>\
    <p>Links: <a href='${amaranth.links[1]}' target='_blank'>${amaranth.links[0]}</a></p>\
    <p>Links: <a href='${amaranth.links[3]}' target='_blank'>${amaranth.links[2]}</a>\
    <p>Links: <a href='${amaranth.links[5]}' target='_blank'>${amaranth.links[4]}</a></p><p>Field Observations:</p>\
    <p>${Object.keys(amaranth.observations)}:  ${Object.values(amaranth.observations)}</p>`;
    pic3.innerHTML = `${amaranth.pest_images[0]}`;
    pic2.innerHTML = `${amaranth.pest_images[1]}`;
    pic1.innerHTML = `${amaranth.pest_images[2]}`;
}

function gomphrena() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${Gomphrena.common_name}</h1> <h3>(<em>${Gomphrena.botanical_name}</em>)</h3> <p> \
    ${Gomphrena.cultural}</p><p>${Gomphrena.hosts}.</p><p>Uses: ${Gomphrena.uses}</p>\
    <p>Links: <a href='${Gomphrena.links[1]}' target='_blank'>${Gomphrena.links[0]}</a></p>\
    <p>Links: <a href='${Gomphrena.links[3]}' target='_blank'>${Gomphrena.links[2]}</a></p><p>Field Observations:</p>\
    <p>${Object.keys(Gomphrena.observations)}:  ${Object.values(Gomphrena.observations)}</p>`;
    
    pic3.innerHTML = `${Gomphrena.pest_images[0]}`;
    pic2.innerHTML = `${Gomphrena.pest_images[1]}`;
    pic1.innerHTML = `${Gomphrena.pest_images[2]}`;
}

function verbenaB() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${purpletop.common_name}</h1> <h3>(<em>${purpletop.botanical_name}</em>)</h3> <p> \
    ${purpletop.cultural}</p><p>${purpletop.hosts}.</p><p>Uses: ${purpletop.uses}</p>\
    <p>Links: <a href='${purpletop.links[1]}' target='_blank'>${purpletop.links[0]}</a></p>\
    <p>Links: <a href='${purpletop.links[3]}' target='_blank'>${purpletop.links[2]}</a></p>\
    <p>Links: <a href='${purpletop.links[5]}' target='_blank'>${purpletop.links[4]}</a></p><p>Field Observations:</p>\
    <p>${Object.keys(purpletop.observations)}:  ${Object.values(purpletop.observations)}</p>`;
    
    pic3.innerHTML = `${purpletop.pest_images[0]}`;
    pic2.innerHTML = `${purpletop.pest_images[1]}`;
    pic1.innerHTML = `${purpletop.pest_images[2]}`;
}

function tropicalchickweed() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${tropChick.common_name}</h1> <h3>(<em>${tropChick.botanical_name}</em>)</h3> <p> \
    ${tropChick.cultural}</p><p>${tropChick.hosts}.</p><p>Uses: ${tropChick.uses}</p>\
    <p>Links: <a href='${tropChick.links[1]}' target='_blank'>${tropChick.links[0]}</a></p>\
    <p>Links: <a href='${tropChick.links[3]}' target='_blank'>${tropChick.links[2]}</a></p><p>Field Observations:</p>\
    <p>${Object.keys(tropChick.observations)}:  ${Object.values(tropChick.observations)}</p>`;
    
    pic3.innerHTML = `${tropChick.pest_images[0]}`;
    pic2.innerHTML = `${tropChick.pest_images[1]}`;
    pic1.innerHTML = `${tropChick.pest_images[2]}`;
}

function Capsella() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${capsella.common_name}</h1> <h3>(<em>${capsella.botanical_name}</em>)</h3> <p> \
    ${capsella.cultural}</p><p>${capsella.hosts}.</p><p>Uses: ${capsella.uses}</p>\
    <p>Links: <a href='${capsella.links[1]}' target='_blank'>${capsella.links[0]}</a></p>\
    <p>Links: <a href='${capsella.links[3]}' target='_blank'>${capsella.links[2]}</a></p><p>Field Observations:</p>\
    <p>${Object.keys(capsella.observations)}:  ${Object.values(capsella.observations)}</p>`;
    
    pic3.innerHTML = `${capsella.pest_images[0]}`;
    pic2.innerHTML = `${capsella.pest_images[1]}`;
    pic1.innerHTML = `${capsella.pest_images[2]}`;
}

function Heliotrope() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${heliotropium.common_name}</h1> <h3>(<em>${heliotropium.botanical_name}</em>)</h3> <p> \
    ${heliotropium.cultural}</p><p>${heliotropium.hosts}.</p><p>Uses: ${heliotropium.uses}</p>\
    <p>Links: <a href='${heliotropium.links[1]}' target='_blank'>${heliotropium.links[0]}</a></p>\
    <p>Links: <a href='${heliotropium.links[3]}' target='_blank'>${heliotropium.links[2]}</a></p>\
    <p>Links: <a href='${heliotropium.links[5]}' target='_blank'>${heliotropium.links[4]}</a></p>\
    <p>Field Observations:</p>\
    <p>${Object.keys(heliotropium.observations)}:  ${Object.values(heliotropium.observations)}</p>`;
    
    pic3.innerHTML = `${heliotropium.pest_images[0]}`;
    pic2.innerHTML = `${heliotropium.pest_images[1]}`;
    pic1.innerHTML = `${heliotropium.pest_images[2]}`;
}

function Khaki() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${khaki.common_name}</h1> <h3>(<em>${khaki.botanical_name}</em>)</h3> <p> \
    ${khaki.cultural}</p><p>${khaki.hosts}.</p><p>Uses: ${khaki.uses}</p>\
    <p>Links: <a href='${khaki.links[1]}' target='_blank'>${khaki.links[0]}</a></p>\
    <p>Links: <a href='${khaki.links[3]}' target='_blank'>${khaki.links[2]}</a></p>\
    <p>Field Observations:</p>\
    <p>${Object.keys(khaki.observations)}:  ${Object.values(khaki.observations)}</p>`;
    
    pic3.innerHTML = `${khaki.pest_images[0]}`;
    pic2.innerHTML = `${khaki.pest_images[1]}`;
    pic1.innerHTML = `${khaki.pest_images[2]}`;
}

function Fleabane() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${fleabane.common_name}</h1> <h3>(<em>${fleabane.botanical_name}</em>)</h3> <p> \
    ${fleabane.cultural}</p><p>${fleabane.hosts}.</p><p>Uses: ${fleabane.uses}</p>\
    <p>Links: <a href='${fleabane.links[1]}' target='_blank'>${fleabane.links[0]}</a></p>\
    <p>Links: <a href='${fleabane.links[3]}' target='_blank'>${fleabane.links[2]}</a></p>\
    <p>Field Observations:</p>\
    <p>${Object.keys(fleabane.observations)}:  ${Object.values(fleabane.observations)}</p>`;
    
    pic3.innerHTML = `${fleabane.pest_images[0]}`;
    pic2.innerHTML = `${fleabane.pest_images[1]}`;
    pic1.innerHTML = `${fleabane.pest_images[2]}`;
}

function Bidens() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${cobblers.common_name}</h1> <h3>(<em>${cobblers.botanical_name}</em>)</h3> <p> \
    ${cobblers.cultural}</p><p>${cobblers.hosts}.</p><p>Uses: ${cobblers.uses}</p>\
    <p>Links: <a href='${cobblers.links[1]}' target='_blank'>${cobblers.links[0]}</a></p>\
    <p>Links: <a href='${cobblers.links[3]}' target='_blank'>${cobblers.links[2]}</a></p>\
    <p>Links: <a href='${cobblers.links[5]}' target='_blank'>${cobblers.links[4]}</a></p>\
    <p>Field Observations:</p>\
    <p>${Object.keys(cobblers.observations)}:  ${Object.values(cobblers.observations)}</p>`;
    
    pic3.innerHTML = `${cobblers.pest_images[0]}`;
    pic2.innerHTML = `${cobblers.pest_images[1]}`;
    pic1.innerHTML = `${cobblers.pest_images[2]}`;
}

function Potato() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${potato_weed.common_name}</h1> <h3>(<em>${potato_weed.botanical_name}</em>)</h3> <p> \
    ${potato_weed.cultural}</p><p>${potato_weed.hosts}.</p><p>Uses: ${potato_weed.uses}</p>\
    <p>Links: <a href='${potato_weed.links[1]}' target='_blank'>${potato_weed.links[0]}</a></p>\
    <p>Links: <a href='${potato_weed.links[3]}' target='_blank'>${potato_weed.links[2]}</a></p>\
    <p>Links: <a href='${potato_weed.links[5]}' target='_blank'>${potato_weed.links[4]}</a></p>\
    <p>Links: <a href='${potato_weed.links[7]}' target='_blank'>${potato_weed.links[6]}</a></p>\
    <p>Field Observations:</p>\
    <p>${Object.keys(potato_weed.observations)}:  ${Object.values(potato_weed.observations)}</p>`;
    
    pic3.innerHTML = `${potato_weed.pest_images[0]}`;
    pic2.innerHTML = `${potato_weed.pest_images[1]}`;
    pic1.innerHTML = `${potato_weed.pest_images[2]}`;
}

/*      POPUP BOXES FOR IMAGES      */
/*  MALLOW  */ 
(function() {    
    var dialog = document.getElementById('mallow');    
    document.getElementById('mal').onclick = function() {    
        dialog.showModal();    
    };    
    document.getElementById('hide-mallow').onclick = function() {    
        dialog.close();    
    };    
})(); 

/* BLACKBERRY NIGHTSHADE    */
(function() {    
    var dialog = document.getElementById('blackberry');    
    document.getElementById('black').onclick = function() {    
        dialog.showModal();    
    };    
    document.getElementById('hide-blackberry').onclick = function() {    
        dialog.close();    
    };    
})();

/*  THICKHEAD   */
(function() {    
    var dialog = document.getElementById('thickhead');    
    document.getElementById('thick').onclick = function() {    
        dialog.showModal();    
    };    
    document.getElementById('hide-thick').onclick = function() {    
        dialog.close();    
    };    
})();   

/* AMARANTH */
(function() {    
    var dialog = document.getElementById('amaranth');    
    document.getElementById('ama').onclick = function() {    
        dialog.showModal();    
    };    
    document.getElementById('hide-amaranth').onclick = function() {    
        dialog.close();    
    };    
})();  

/* GOMPHRENA    */
(function() {    
    var dialog = document.getElementById('gomphrena');    
    document.getElementById('gom').onclick = function() {    
        dialog.showModal();    
    };    
    document.getElementById('hide-gomphrena').onclick = function() {    
        dialog.close();    
    };    
})();   

/* PURPLE TOP    */
(function() {    
    var dialog = document.getElementById('purple');    
    document.getElementById('purp').onclick = function() {    
        dialog.showModal();    
    };    
    document.getElementById('hide-purple').onclick = function() {    
        dialog.close();    
    };    
})();   

/* TROPICAL CHICKWEED    */
(function() {    
    var dialog = document.getElementById('tropchick');    
    document.getElementById('trop').onclick = function() {    
        dialog.showModal();    
    };    
    document.getElementById('hide-tropchick').onclick = function() {    
        dialog.close();    
    };    
})();  

/* CAPSELLA    */
(function() {    
    var dialog = document.getElementById('capsella');    
    document.getElementById('cap').onclick = function() {    
        dialog.showModal();    
    };    
    document.getElementById('hide-capsella').onclick = function() {    
        dialog.close();    
    };    
})();

/* BLUE HELIOTROPE    */
(function() {    
    var dialog = document.getElementById('heliotrope');    
    document.getElementById('hel').onclick = function() {    
        dialog.showModal();    
    };    
    document.getElementById('hide-heliotrope').onclick = function() {    
        dialog.close();    
    };    
})();

/* KHAKI WEED    */
(function() {    
    var dialog = document.getElementById('khaki');    
    document.getElementById('kha').onclick = function() {    
        dialog.showModal();    
    };    
    document.getElementById('hide-khaki').onclick = function() {    
        dialog.close();    
    };    
})();

/* FLEABANE    */
(function() {    
    var dialog = document.getElementById('fleabane-1');    
    document.getElementById('flea').onclick = function() {    
        dialog.showModal();    
    };    
    document.getElementById('hide-fleabane-1').onclick = function() {    
        dialog.close();    
    };    
})();

/* COBBLERS PEGS    */
(function() {    
    var dialog = document.getElementById('bidens');    
    document.getElementById('bid').onclick = function() {    
        dialog.showModal();    
    };    
    document.getElementById('hide-bidens').onclick = function() {    
        dialog.close();    
    };    
})();

/* POTATO WEED    */
(function() {    
    var dialog = document.getElementById('potato');    
    document.getElementById('pot').onclick = function() {    
        dialog.showModal();    
    };    
    document.getElementById('hide-potato').onclick = function() {    
        dialog.close();    
    };    
})();



info1.addEventListener('click', function(e) {
    e.preventDefault();
    mallow();
})
info2.addEventListener('click', function(e) {
    e.preventDefault();
    nightshade();
})
info3.addEventListener('click', function(e) {
    e.preventDefault();
    thickhead();
})
info4.addEventListener('click', function(e) {
    e.preventDefault();
    amaranthus();
})
info5.addEventListener('click', function(e) {
    e.preventDefault();
    gomphrena();
})
info6.addEventListener('click', function(e) {
    e.preventDefault();
    verbenaB();
})
info7.addEventListener('click', function(e) {
    e.preventDefault();
    tropicalchickweed();
})
info8.addEventListener('click', function(e) {
    e.preventDefault();
    Capsella();
})
info9.addEventListener('click', function(e) {
    e.preventDefault();
    Heliotrope();
})
info10.addEventListener('click', function(e) {
    e.preventDefault();
    Khaki();
})
info11.addEventListener('click', function(e) {
    e.preventDefault();
    Fleabane();
})
info12.addEventListener('click', function(e) {
    e.preventDefault();
    Bidens();
})
info13.addEventListener('click', function(e) {
    e.preventDefault();
    Potato();
})
