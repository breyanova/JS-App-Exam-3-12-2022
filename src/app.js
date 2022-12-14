import page from '../node_modules/page/page.mjs';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { renderNavigation,renderContentMiddleware } from './middlewares/renderMiddleware.js';
import { addView } from './views/addView.js';
import { dashboardView } from './views/dashboardView.js';
import { deleteView } from './views/deleteView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import { homeView } from './views/homeview.js';
import { loginView } from './views/loginView.js';
import { logoutView } from './views/logoutView.js';
import { registerView } from './views/registerView.js';

page(authMiddleware);
page(renderNavigation);
page(renderContentMiddleware);

page('/', homeView);
page('/dashboard', dashboardView)
page('/login', loginView)
page('/register', registerView)
page('/logout', logoutView)

page('/add', addView)
page('/albums/:albumId', detailsView) // /data/albums/:id
page('/albums/:albumId/edit', editView) 
page('/albums/:albumId/delete',deleteView)

page.start();