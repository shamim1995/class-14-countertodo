
function dataSet(key, value) {
    let data = JSON.stringify(value)
   localStorage.setItem(key, data);
   return true;

};

/**
 * setup localstorage
 * @param {*} key 
 * @returns 
 */


function dataGet(key) {

    let data = localStorage.getItem(key);
   return data ? JSON.parse(data) : false;
    
   
}