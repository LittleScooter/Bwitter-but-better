<script>
    import {APICall} from "./APIHandler.js";
    let email="";
    let username="";
    let code = "";
    let verify=false;
    async function register(e){
        e.preventDefault();
        try{
        const data = {
            email: email,
            name:username
        };
        const fetchResponse = await APICall("/register",data);
        console.log(fetchResponse);
        
        console.log(fetchResponse);
        if(fetchResponse.error){

        }
        else{
            verify=true;
        }
        }
        catch(err){
            console.log(err)
        }
        
    };
    async function verifyWithCode(e){
        e.preventDefault();
        const fetchResponse = await APICall("/verifyWithCode",{code:code})
        console.log(fetchResponse);
        if (fetchResponse.error) {
            alert("ERROR");
        } else {
            alert("Du är inloggad");
            location.hash="#personal"
        }
    }
</script>

<main>
{#if !verify}
    <form on:submit={register}>
        <input type="text" placeholder="email" bind:value={email}/>
        <input type="text" placeholder="username" bind:value={username}/>

        <button id="loginbutton">Sign up</button>
    </form>

{:else}
    <form on:submit={verifyWithCode}>
        <input type="text" placeholder="confirmation code" bind:value={code}/>
        <button id="loginbutton">Verify</button>
    </form>
{/if}

</main>