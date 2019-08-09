// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the header-Container component

const dataArray = [{
    date: 'Smarch 28, 2019',
    title: 'Lambda Times',
    temperature: '98°'
}];

const theBigH = document.querySelector('.header-container');

dataArray.forEach(item => {
    theBigH.appendChild(createHeader(item.date, item.title, item.temperature))
})

function createHeader(date, title, temperature) {
    const theHeader = document.createElement('div');
    theHeader.classList.add('header');
    theBigH.appendChild(theHeader)

    const theDate = document.createElement('span');
    theDate.classList.add('date');
    theDate.textContent = date;
    theHeader.appendChild(theDate)

    const theTitle = document.createElement('h1');
    theTitle.textContent = title;
    theHeader.appendChild(theTitle)

    const theTemp = document.createElement('span');
    theTemp.classList.add('temp');
    theTemp.textContent = temperature;
    theHeader.appendChild(theTemp)


    return theHeader
}