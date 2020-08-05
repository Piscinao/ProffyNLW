

import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'


import './styles.css'

function TeacherItem(){
  return(

    <article className="teacher-item">
    <header>
      <img src="https://avatars1.githubusercontent.com/u/28152962?s=400&v=4" alt="Henrique"/>
      <div>
        <strong> Henrique Jensen</strong>
        <span> Programação </span>
      </div>
   
    </header>
  
    <p>
      Entusiasta de tecnologia, e preza pelo trabalho em equipe
      <br /> <br />
      </p>
    <footer>
    
      <p>
        Preço/hora
        <strong>R$ 40,00</strong>
      </p>
  
    <button type="button">
      
      <img src={whatsappIcon} alt="Whatsapp"/>
      Entrar em contato
    </button>
  
    </footer>
  
    
  </article>


  )

}

export default TeacherItem;




 