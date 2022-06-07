
export const reducer = (store, action) => {
    switch (action.type) {
        case "add": {
            store.count++;
            return {...store}
        }
        case "sub": {
          store.count--;
          return { ...store };  
        }    
             
        default:
            return {...store };
    }
    
}