import {html} from '../../node_modules/lit-html/lit-html.js';
import * as albumService from '../services/albumService.js';



const addTemplate = (submitHandler)=> html `
 <section id="create">
<div class="form">
  <h2>Add Album</h2>
  <form class="create-form" @submit=${submitHandler} method = "POST">
    <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
    <input type="text" name="album" id="album-album" placeholder="Album" />
    <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
    <input type="text" name="release" id="album-release" placeholder="Release date" />
    <input type="text" name="label" id="album-label" placeholder="Label" />
    <input type="text" name="sales" id="album-sales" placeholder="Sales" />

    <button type="submit">post</button>
  </form>
</div>
</section>
`;

const dataIsInvalid = (data) => {

    const requiredFields = ["singer", "album", "imageUrl","release", "label" , "sales"];

    return requiredFields.some(x => !data[x])

}


export const addView  = (ctx) => {

    const submitHandler = (e) =>{
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.currentTarget));

        if(dataIsInvalid(data)){
            alert('All fields should be filled!')
            return;
        }


       albumService.create(data)
       .then(album => {
        ctx.page.redirect('/dashboard')
       })
       .catch(err => {
        alert(err);
       }) ;
       

    }
    ctx.render(addTemplate(submitHandler));

}