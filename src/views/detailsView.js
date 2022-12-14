import {html, nothing} from '../../node_modules/lit-html/lit-html.js';
import * as albumService from '../services/albumService.js';

const like = (e) => {
  e.preventDefault();
  let likes = 0;
  likes += 1;
  document.getElementById('likes-count').textContent = `${likes}`;
  let buttton = document.getElementById('like-btn"');
  buttton.style.display = 'none';

  return;
  
  

}

const detailsTemplate = (album, user) => html `
      <section id="details">
<div id="details-wrapper">
  <p id="details-title">Album Details</p>
  <div id="img-wrapper">
    <img src=${album.imageUrl} alt="example1" />
  </div>
  <div id="info-wrapper">
    <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
    <p>
      <strong>Album name:</strong><span id="details-album">${album.album}</span>
    </p>
    <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
    <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
    <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
  </div>
  <div id="likes">Likes: <span id="likes-count">0</span></div>

  <div id="action-buttons">
    ${user._id && user._id !== album._ownerId
    ?html `<a href="#" id="like-btn"  @click=${like}>Like</a>`
    : nothing
    }
        
        ${user._id == album._ownerId

? html`<div id="action-buttons">

<a href="/albums/${album._id}/edit" id="edit-btn">Edit</a>
<a href="/albums/${album._id}/delete"  id="delete-btn">Delete</a>
</div>`
: nothing
}
        
        </div>


</div>
</section>`;


export const detailsView = (ctx) => {
    albumService.getOne(ctx.params.albumId)
    .then(album => {
        ctx.render(detailsTemplate(album, ctx.user))
    })

};