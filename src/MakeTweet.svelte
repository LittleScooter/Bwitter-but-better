<main>
    <form action="" on:submit={UploadTweet} > 
        <input type="text" bind:value={text} placeholder="tweet">
        <button>Submit</button>
    </form>
</main>

<script>
import {APICall} from "./APIHandler.js";

async function UploadTweet(e){
    e.preventDefault();
    try{
    const call = await APICall("/makeTweet",{
        body:text
    });
    if(call.error){
        alert(call.message);
    }
    else{
        alert("Successfull")
    }
    }
    catch(err){
        console.log(err)
    }
    
}
let text = "";
</script>