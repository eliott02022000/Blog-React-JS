// import React, { Component } from 'react';
// import api from '../Services/Api';
// import { NavLink } from 'react-router-dom'


// export default class Article extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             titre : "",
//             contenu : "",
//             date : "",
//             id : "",

//         };
//     }

//     render() {
//         return(
//             <div>
//                 <div>{
//                     api.apispecarticle(parseInt(this.props.match.params.id), (article)=> {
//                         console.log(article)
//                         this.setState({
//                             titre : article.data.title,
//                             contenu : article.data.content,
//                             date : article.data.date,
//                             id : article.data.id,
//                             User : article.data.User.firstname,

//                         })
//                     }) 
//                 }</div>
//                 <section className="details-card">
//                     <div className="container">
//                         <div className="col-md-6">
//                             <span><h5>{"By   " + this.state.User}</h5></span>
//                                 <div className="card-img">
//                                     <img src="https://placeimg.com/380/230/nature" alt=""></img>
//                                 {/* <p>{this.state.id}</p> */}
//                                 </div>
//                                 <div className="card-desc">
//                                     <h3>{this.state.titre}</h3>
//                                     <p>{this.state.contenu}</p>
//                                     <a href="#" className="btn-card"><NavLink to={`/Articles`}>Go back to Articles</NavLink></a>   
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//         )
//     }

// }