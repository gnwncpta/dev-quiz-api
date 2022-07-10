export default function createPath(completeURL){
    const req = { url: completeURL };
    const startPoint = req.url.indexOf('3000') + 4;
    const path = req.url.slice(startPoint, req.url.length);
    return path;
}