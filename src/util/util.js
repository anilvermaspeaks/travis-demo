
export const DEVICES={
    desktop:'Desktop',
    mobile:'Mobile'

}

//calculate screen size


export const  getScreenSize =() =>{
    const width = window.innerWidth;
    if(width > 760){
        return  DEVICES.desktop;
        }
     else if(width < 760){
         return DEVICES.mobile;
     }
    
}
