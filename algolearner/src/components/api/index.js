export const getStep = async (depth,arr) => {

    try {
        
        let body_data = {
            depth: depth,
            arr: arr
        }


        const response = await fetch('http://localhost:3001/api/getStep', {method : 'POST', headers: { 'Content-Type': 'application/json' 
          }, body: JSON.stringify(body_data) })
           
        const data = await response.json();
      //  console.log(data);
        return data;
    }
    catch(error) {
        console.log(error)
    }



}