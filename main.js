const input =document.querySelector('.input')
const btn =document.querySelector('.btn')
const output=document.createElement('div')
const card=document.createElement('div')

document.body.append(output)

btn.innerHTML='<img src=https://w7.pngwing.com/pngs/114/7/png-transparent-computer-icons-pittsburg-button-search-box-button.png width=20px height=20px>'

const API = 'https://api.github.com/users/';
const getGB = async()=>{
	const url=API+input.value
	const request =await fetch(url )
	const response=await request.json()
  console.log(response)
	renderGB(response)
	
}


const renderGB =(el)=>{
	
		const card1 = document.createElement('div')
    const card2 = document.createElement('div')
    const card0 = document.createElement('div')

		const login = document.createElement('h3')
		login.innerHTML ='Name:'+ el.login
		const avatar = document.createElement('img')
		avatar.src=el.avatar_url
		const repos = document.createElement('button')
		repos.innerHTML=el.public_repos + ' Repositories' 
		repos.style.cssText =`
		height:30px;`
		const followers = document.createElement('button')
		followers.innerHTML=el.followers + ' Followers'
		const following = document.createElement('button')
		following.innerHTML=el.following + ' Following'
		
     card0.append(followers, following)
     card1.append(avatar, login, card0)
     card1.style.cssText=`
     margin-right:40px;`
     card2.append(repos, card)
     card2.style.cssText=`
      display:flex;
      flex-direction:column;
     `
     output.append(card1,card2 )
     output.style.cssText=`
     display:flex;`

   followers.addEventListener('click',()=>{
    getFollowers()
		card.innerHTML=''
	 })
	 following.addEventListener('click',()=>{
    getFollowing()
			card.innerHTML=''
	 })
	 repos.addEventListener('click',()=>{
   getRepos()
			card.innerHTML=''
	 })

}





btn.addEventListener('click',()=>{
 getGB()
// input.value=''
output.innerHTML=''
card.innerHTML=''
})

// Followers
const API1='https://api.github.com/users/'
const getFollowers = async()=>{
	const value=input.value
	// const value='KRECER'
	const request1 =await fetch(API1 + value +'/followers')
	const response1=await request1.json()
  console.log(response1)
	renderFollowers(response1)
	
}


const renderFollowers = (el)=>{
	el.map((el)=>{
		const card11 =document.createElement('div')
    card11.classList.add('card11')
    const avatar1=document.createElement('img')
		avatar1.style.cssText=`
		border:solid;
		border-radius: 15px;`
		avatar1.src=el.avatar_url
		avatar1.style.cssText=`
height:80px;`
	const login1 = document.createElement('h3')
		login1.innerHTML=el.login
		card11.append(avatar1,login1)
	
		card.append(card11)
	
		 card11.addEventListener('click',()=>{
    
    input.value=el.login
		getGB()
    output.innerHTML=''
     card.innerHTML=''
			
	 })
		
	})
	
}

// Following

const API2="https://api.github.com/users/"
const getFollowing = async()=>{
	const value=input.value
	// const value='KRECER'
	const request2 =await fetch(API2 + value +'/following')
	const response2=await request2.json()
  console.log(response2)
	renderFollowing(response2)
	
}

const renderFollowing = (el)=>{
	el.map((el)=>{
		const card11=document.createElement('div')
    card11.classList.add('card11')
    const avatar12=document.createElement('img')
		avatar12.style.cssText=`
		border:solid;
		border-radius: 15px;`
		avatar12.src=el.avatar_url
		avatar12.style.cssText=`
height:80px;`
	const login12 = document.createElement('h3')
		login12.innerHTML=el.login
		card11.append(avatar12,login12)
	
		card.append(card11)
	
		card11.addEventListener('click',()=>{
    
    input.value=el.login
		getGB()
    output.innerHTML=''
     card.innerHTML=''
			
	 })
	})
	
}
//repositorie

//
const API3="https://api.github.com/users/"
const getRepos = async()=>{
	const value=input.value
	// const value='Krecer'
	const request3 =await fetch(API3 + value +'/repos')
	const response3=await request3.json()
  console.log(response3)
	renderRepos(response3)
	
}


const renderRepos = (el)=>{
	el.map((el)=>{
		const card11=document.createElement('div')
    card11.classList.add('card11')
   const fullName=document.createElement('h4')
	 fullName.innerHTML=el.full_name
	 fullName.classList.add('full')
const upgrade=document.createElement('p')
	 upgrade.innerHTML="Updated on " + el.updated_at
const language=document.createElement('h4')
	 language.innerHTML=el.language

	 
		card11.append(fullName, upgrade, language)
	  card11.style.cssText=`
		dislay:flex;
		flex-direction:column;
		width:700px;
		`
		card.append(card11)
	

		// card11.addEventListener('click',()=>{
    
    // input.value=el.login
		// getGB()
    // output.innerHTML=''
    //  card.innerHTML=''
			
	//  })
		
	})
	
}

// Репозиториии


// const API4="https://api.github.com/repos/KRECER/black-wave"
// const getReposIn = async()=>{
// 	const value=input.value
// 	// const value='Krecer'
// 	const request4=await fetch(API4 )
// 	const response4=await request4.json()
//   console.log(response4)
// 	// renderRepos(response4)
	
// }
// getReposIn()