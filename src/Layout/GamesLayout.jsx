import React, { useEffect, useState } from 'react'
import './GamesLayout.css'
import Game from '../components/Game/Game'


const GamesLayout = () => {
 const [games, setGames] = useState([])

  useEffect(()=>{
    fetch('https://gamestreamapi.herokuapp.com/api/games')
    .then( res => res.json())
    .then( data => setGames(data) )

  },[])

  return (
    <div className='layout'>
       
    {

        games.map( game => (
         <Game 
            title={game.title}
            description={game.description}
            image={game.galleryImages[0]}
            studio={game.studio}
            publicationYear={game.publicationYear}
            video={game.videosUrls['mobile']}
         
         />
        )
        )
      


    }
    </div>
  )
}

export default GamesLayout