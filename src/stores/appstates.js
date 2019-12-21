import {types} from 'mobx-state-tree'

const appstates = types.model({

    busy:types.boolean,

})

.actions(self=> ({
    makeBusy(){
        self.busy=true;
    },
    
    makeUnbusy(){
        self.busy=false; 
    }

}))
.create({
        busy:false,


})

export default appstates;
