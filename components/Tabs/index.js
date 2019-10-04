// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
axios.get("https://lambda-times-backend.herokuapp.com/topics").then(r=> createTabs(r.data.topics)).catch(error => console.log(error));

function createTabs(topics){
    topics.forEach(topic =>{
        const tab = document.querySelector(".topics").appendChild(document.createElement("div"));
        tab.classList.add("tab");
        tab.textContent = topic;
        //Stretch Stuff
        // Add an event listener for clicks which toggles the tab and filters
        //Test 1 Event listener for toggle on and one for toggle off
        tab.addEventListener('click', toggleOn,false);
    });
}
function toggleOn(event){
    event.stopPropogation;
    event.target.removeEventListener('click', toggleOn, false);
    event.target.addEventListener('click', toggleOff,false);
}
function toggleOff(){
    event.stopPropogation;
    event.target.removeEventListener('click', toggleOff, false);
    event.target.addEventListener('click', toggleOn,false);
}