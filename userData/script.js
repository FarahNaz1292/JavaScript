document.addEventListener("DOMContentLoaded",()=>{
    const userList= document.getElementById("user-list")
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((data)=>{
        data.forEach((user) => {
          const userItem=document.createElement("li")  
          userItem.textContent=user.name
          userList.appendChild(userItem)
        });
    })
    .catch((error)=>console.log("Error fetched while loading", error))
})