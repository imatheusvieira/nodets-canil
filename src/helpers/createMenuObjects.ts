type MenuOption = '' | 'all' |'dogs'| 'cats' | 'fishes';
 
export const createMenuObjects = (activeMenu: MenuOption)=>{
    let returnObject = {
        all: false,
        dogs: false,
        cats: false, 
        fishes: false
    }

    if(activeMenu !== ''){
      returnObject[activeMenu] = true;  
    }

    return returnObject;
}