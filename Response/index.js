export default function Send(data){
    const json = JSON.stringify(data);
    return new Response(json, {
        status: 200,
        headers: { 
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    });
}