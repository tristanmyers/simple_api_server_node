import * as http from 'http'
import { get, IncomingMessage, ServerResponse } from 'http';

const hostname: string = '127.0.0.1';
const port: number | string = process.env.PORT || 3001;

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
	const {headers, method, url} = req;

	switch (url) {
		case '/':
			if (method === 'GET') {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'text/plain');
				res.end('Hello, world!');
			}
			break;
		case '/test-post':
			let data = '';
			if (method === 'POST') {
				req.on('data', chunk => data += chunk);
				req.on('end', () => {
					console.log(data);
				})
				res.statusCode = 200;
				res.setHeader('Content-Type', 'text/plain');
				res.end('Thanks for the post request.');
			}
			break;
	}
	
	res.end();
});

server.listen(port, () => {
	console.log(`Server listening on http://${hostname}:${port}`);
});