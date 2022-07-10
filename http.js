import createPath from './url.js';
import questionList from './questions.json';
import Send from './Response';
import Log from './Log';

function index(){
    const data = { code: 200, message: "WELCOME TO BUN HTTP API" };
    return Send(data);
}

function questions(){
    const data = {
        code: 200, 
        result: {
            questions: questionList
        }
    }

    return Send(data);
}

Bun.serve({
    port: 3000,
    fetch(req){
        const url = createPath(req.url);
        const method = req.method;
        Log(method, url);
        
        switch(url){
            case "/":
                return index(method);
                break;
            
            case "/questions":
                return questions(method);
                break;
            
            default:
                return;
        }

        
    }
});

console.log("Listening on http://localhost:3000");