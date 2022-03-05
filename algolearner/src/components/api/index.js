export const getStep = async (depth,arr) => {

    try {
        
        let body_data = {
            depth: depth,
            arr: arr
        }

        //use for localhost testing http://localhost:3001/api/getStep
        const response = await fetch('http://35.225.122.85:3001/api/getStep', {method : 'POST', headers: { 'Content-Type': 'application/json' 
          }, body: JSON.stringify(body_data) })
           
        const data = await response.json();
        //console.log(data);
        return data;
    }
    catch(error) {
        console.log(error)
    }



}