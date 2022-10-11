import React from 'react'
import { Link } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'
// import { useState } from 'react';
export default function TextForm(props) {
    // props.setProgress(40)
    // const [state,Setstate] =useState(0)
    // const Clicked =()=>{
    //   Setstate(80) 
    //   // Setstate(0)
    // }
//     <LoadingBar
//     height={3}
//    color='#f11946'
//    progress={8}
//  />
    return(
        <>
            <section className="home">
            <div className="container">
                <h2 className="title">Your Personal Assistant</h2>
                <p className="introduction">
                    This personal assistant is like a Google , Alexa and Siri.You can give your own name to the personal assistant Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ipsa quisquam nam deserunt provident aliquid alias molestias illum nemo et quo in nulla fugiat odio autem, quos est dolorem cupiditate eveniet deleniti fuga. Aliquam, nesciunt error. Veniam, cupiditate. Velit veniam aut reprehenderit dolorem animi pariatur recusandae voluptas ea distinctio. Sint dolore minima reiciendis, culpa laborum cumque fugiat ex excepturi quia vel ea nihil dolores, explicabo doloremque nulla voluptatum impedit ullam vero nostrum ipsam. Nisi eveniet qui blanditiis laborum perferendis corrupti debitis obcaecati cum iure provident, exercitationem quibusdam labore tenetur expedita assumenda in libero enim soluta quasi laboriosam incidunt officiis eos. Recusandae reprehenderit exercitationem eius inventore vero sint veniam vitae laudantium non quia aut sed quos ad praesentium, architecto cumque illum sunt, reiciendis error delectus labore commodi provident sit! Iure adipisci, ut, aperiam officiis cum recusandae accusantium minus voluptatem eius pariatur fugiat? In, ducimus. Ratione architecto magnam iste quis molestias illo praesentium dolore aliquam voluptatum corporis beatae nulla perspiciatis, sint necessitatibus, fuga voluptates sed ad. Et atque, neque commodi deleniti sit ad? Iusto eos ut harum iure ipsam corporis quos placeat libero cum dolore, debitis, perferendis ad at maiores ea molestiae, eaque modi sit eum corrupti sapiente vero facilis saepe? Provident rem et tempora nostrum impedit temporibus vitae nemo debitis commodi voluptates, distinctio ad porro velit, officia deserunt in modi, veniam facilis odio! Soluta, veniam. Ut mollitia quidem, accusamus excepturi rerum sint consectetur est et numquam, sequi delectus adipisci non assumenda ipsa, cupiditate molestias voluptatum provident cum a architecto iure! Ducimus fuga quod totam laudantium inventore eligendi in fugiat, ipsum porro facilis architecto odit expedita quibusdam illo doloremque modi accusantium quasi cum pariatur iure, nostrum consequuntur molestiae veniam! Repudiandae, id ex excepturi ratione voluptatum sapiente asperiores vero nemo officiis ad impedit repellat quasi tempore ipsa dolore, aspernatur reprehenderit quis animi perspiciatis.
                </p>
                <div className="btn_sec">
                <Link className="nav-link active" aria-current="page" to='/assistant'><button className='ready_to_start mb-5' >Start Personal Assistant </button></Link>
                </div>
            </div>
            </section>
        </>
    )
  
}
