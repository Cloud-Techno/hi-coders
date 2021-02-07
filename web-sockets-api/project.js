


const ws = new WebSocket("ws://localhost:8082");

ws.addEventListener("open",()=>{
    console.log("We are connected");

    ws.send("Hey, how is it going!")
});
ws.addEventListener("message",({data})=>{
    console.log(data);
})