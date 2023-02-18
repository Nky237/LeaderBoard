import React from 'react'
import Learn1 from '../assets/learn1.jfif'
import Learn2 from '../assets/learn2.jfif'

const Home = () => {
  return (
    <div>
      <h1 style={{textAlign:'center', padding:'10px 0'}}>WELCOME TO LEARNABLE</h1>
        <section className='Home'>
         <div>
            <img src={Learn1} alt="" />
         </div>
          <main>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor assumenda, itaque 
        nesciunt alias 
        voluptatum nobis blanditiis eos officiis aperiam earum eum vel quas odio optio, distinctio 
        ab sunt unde incidunt ipsum omnis amet magnam accusantium aut! Excepturi, cupiditate iusto!</p>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus veniam ducimus
         eligendi nihil, cumque ab eveniet modi architecto quidem, non odit saepe facere voluptas esse mollitia illo fuga exercitationem id dicta iusto eaque
          numquam quaerat ad! Fugit velit beatae laudantium.</p>

          </main>
        </section>
        
        <section className='Home'>
          <main>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor assumenda, itaque 
        nesciunt alias 
        voluptatum nobis blanditiis eos officiis aperiam earum eum vel quas odio optio, distinctio 
        ab sunt unde incidunt ipsum omnis amet magnam accusantium aut! Excepturi, cupiditate iusto!</p>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus veniam ducimus
         eligendi nihil, cumque ab eveniet modi architecto quidem, non odit saepe facere voluptas esse mollitia illo fuga exercitationem id dicta iusto eaque
          numquam quaerat ad! Fugit velit beatae laudantium.</p>
          </main>
          <div>
            <img src={Learn2} alt="" />
         </div>
        </section>


         </div>
  )
}

export default Home