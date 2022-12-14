
import * as albumService from '../services/albumService.js';


export const deleteView = async (ctx) => {

    try {
        let confirmed =  confirm('Do you want to delete?')
        if(confirmed){
            await albumService.remove(ctx.params.albumId);
            ctx.page.redirect('/dashboard')
        }
 
    } catch (error) {
        alert(err)    
    } 
}

