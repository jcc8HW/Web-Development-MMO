// logout request with ajax
function instructions(){
      alert("HEllO");
    }
 
 function logout() {

// POST 

let data = {
  username: "teja",
  password: "234234"
};

fetch("/mmo/logout", {
  headers: {
    "Content-Type": "application/json",                                                                                                
    "Access-Control-Origin": "*"
  },
  method: "POST",
  body: JSON.stringify(data)
})
.then( responseJSON => responseJSON.json())
.then( body => {
  console.log(body)
})
.catch( error => {
  console.error(error)
})
}