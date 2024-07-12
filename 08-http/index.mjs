import http from 'http';
import { getHTML, getText, getComments, handle404, postComment, getHome } from './handlers.mjs';





const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        return getHome(req, res);
     }

    if (req.method === 'GET' && req.url === '/html') {
       return getHTML(req, res);
    }

    if (req.method === 'GET' && req.url === '/text') {
        return getText(req, res);
    }

    if (req.method === 'GET' && req.url === '/comments') {
        return getComments(req, res);
    }

    if (req.method === 'POST' && req.url === '/comments') {
        return postComment(req, res);
    }

    return handle404(req, res);
});

server.listen(6000, () => {
    console.log('Server running at http://localhost:6000/');
});
