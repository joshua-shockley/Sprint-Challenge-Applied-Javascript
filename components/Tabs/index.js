// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((response) => {
        const newItem = createTab(response.data.topics);
        newTab.appendChild(newItem)
    })
    .catch((err) => {
        console.log(err)
    })


const newTab = document.querySelector('.topics');
// console.log(newTab);

function createTab(stuff) {
    stuff.forEach((i) => {
        const littleT = document.createElement('div');
        littleT.textContent = ` ${i}`;
        littleT.classList.add('tab');
        newTab.appendChild(littleT)

    })
    return littleT
}