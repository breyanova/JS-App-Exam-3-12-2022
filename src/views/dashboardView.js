import {html, nothing} from '../../node_modules/lit-html/lit-html.js';

import * as albumService from '../services/albumService.js';


const albumTemplate = (album) => html`
<li class="card">
    <img src=${album.imageUrl} alt="travis" />
    <p>
      <strong>Singer/Band: </strong><span class="singer">${album.singer} </span>
    </p>
    <p>
      <strong>Album name: </strong><span class="album">${album.album} </span>
    </p>
    <p><strong>Sales:</strong><span class="sales">${album.sales} </span></p>
    <a class="details-btn" href="/albums/${album._id}">Details</a>
  </li>`


const allAlbumsTemplate = (albums) => html`
    <section id="dashboard">
        <h2>Albums</h2>
        <ul class="card-wrapper">
          ${albums.map(x => albumTemplate(x))}
        </ul>

          ${albums.length == 0 
              ? html`<h2>There are no albums added yet.</h2>`
              : nothing
              }
        
      </section>`;


export const dashboardView = (ctx) => {
    albumService.getAll()
    .then(albums => {
        ctx.render(allAlbumsTemplate(albums));
    })

}