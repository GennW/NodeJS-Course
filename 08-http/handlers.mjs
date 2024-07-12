import { comments } from './data.mjs';

function getHome(req, res) {
    
}

function getHTML(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><body><div>');
    res.write('<h1>Hello, World!</h1>');
    res.write('</div></body></html>');

    res.end();
}

function getText(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
}

function getComments(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(comments));
}

function handle404(req, res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>404 Not Found</h1>');
}

function postComment(req, res) {
    res.setHeader('Content-Type', 'text/plain');

    if (req.headers['content-type'] === 'application/json') {
        let commentJSON = '';

        req.on('data', (chunk) => (commentJSON += chunk));

        req.on('end', () => {
            try {
                comments.push(JSON.parse(commentJSON));
                res.statusCode = 200;
                res.end('Comment data was received');
            } catch (error) {
                res.statusCode = 400;
                res.end('Invalid JSON');
            }
        });
    } else {
        res.statusCode = 400;
        res.end('Data must be JSON formated');
    }
}

export { getHTML, getText, getComments, handle404, postComment, getHome };
