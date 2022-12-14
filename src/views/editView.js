import {html} from '../../node_modules/lit-html/lit-html.js';
import * as albumService from '../services/albumService.js';




const editTemplate = (album, submitHandler) => html `
<section id="edit">
<div class="form">
  <h2>Edit Album</h2>
  <form class="edit-form" @submit=${submitHandler} method = 'POST'>
    <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" value=${album.singer} />
    <input type="text" name="album" id="album-album" placeholder="Album"  value=${album.album} />
    <input type="text" name="imageUrl" id="album-img" placeholder="Image url" value=${album.imageUrl} />
    <input type="text" name="release" id="album-release" placeholder="Release date" value=${album.release} />
    <input type="text" name="label" id="album-label" placeholder="Label" value=${album.label} />
    <input type="text" name="sales" id="album-sales" placeholder="Sales" value=${album.sales} />

    <button type="submit">post</button>
  </form>
</div>
</section>
`;

const dataIsInvalid = (data) => {

    const requiredFields = ["singer", "album", "imageUrl","release", "label" , "sales"];

    return requiredFields.some(x => !data[x])

}


export const editView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();
       

        const data = Object.fromEntries(new FormData(e.currentTarget));
        if(dataIsInvalid(data)){
            alert('All fields should be filled!')
            return;
        }

        albumService.edit(ctx.params.albumId, data)
        .then(() => {
            ctx.page.redirect(`/albums/${ctx.params.albumId}`)
        })

    }

    albumService.getOne(ctx.params.albumId)
    .then(album => {
        ctx.render(editTemplate(album, submitHandler))
    })

}