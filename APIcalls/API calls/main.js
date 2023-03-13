import './style.css'
import axios from 'axios'

//site: https://api.congress.gov/#/
//roll-call api shows how few people come to the votes

    const token = "Zy3zqkzTIeeWT37pkeA06VRZNZhFAoYAm530xYl6";
    const config = {
      headers: {
        'X-API-Key': token,
      },
    };




//members of senate


// console.log("senate section of congressman table")

// const senateUrl = "https://api.propublica.org/congress/v1/116/senate/members.json";


// const data = await axios.get(senateUrl, config)
// const realData = data.data.results[0]

// console.log("senators", realData)

//for senators on congressman table

// data.data.results[0].members.forEach(element => {
// console.log("id", element.id)
//   console.log("name", element.first_name, element.last_name)
//   console.log("party", element.party)
//   console.log("position", "senator")
//   console.log("congress (might be a good replacement for elected on)", "116")
// })




// console.log("representative section of congressman table")

// const congressUrl = "https://api.propublica.org/congress/v1/116/house/members.json";


// const congressData = await axios.get(congressUrl, config)
// const realCongressData = congressData.data.results[0]

// console.log("congresspeople", realCongressData)

//for senators on congressman table

// congressData.data.results[0].members.forEach(element => {
//   console.log("id", element.id)
//   console.log("name", element.first_name, element.last_name)
//   console.log("party", element.party)
//   console.log("position", "representative")
//   console.log("congress (might be a good replacement for elected on)", "116")
// })


//committees WORK IN PROGRESS

// const committeesUrl = "https://api.propublica.org/congress/v1/115/senate/committees.json"

// const committeesData = await axios.get(committeesUrl, config)
// const realCommitteesData = committeesData.data.results[0]


// console.log("committee data" , realCommitteesData)












document.querySelector('#app').innerHTML = `
<div>
<h1>
hello
</h1>
</div> 
`