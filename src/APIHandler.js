export function APICall(url, body){
    return new Promise(async (resolve, reject)=>{
        try{
        console.log(url);
        let fetchResponse = await fetch("http://localhost:3005"+url,{
                method: "POST",
                body: JSON.stringify(body),
                mode: "cors",
                credentials: "include",
                headers: {
                "Content-Type": "application/json"
        }});
        fetchResponse=await fetchResponse.json();
        console.log(fetchResponse);
        
        resolve(fetchResponse);
        }
        catch(err){
            reject(err);
        }
        
    });
}