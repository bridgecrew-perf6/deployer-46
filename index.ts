import { promisify } from 'util';
import express from 'express';
import { exec } from 'child_process';
const promisifedExec = promisify(exec);
const app = express();
const PORT = 8888;
app.use(express.json());
app.listen(PORT, () => console.log(`Listening to port: ${PORT}`));

app.post('/deploy', async (req, _res) => {
	try {
		console.log(req.body);
		await promisifedExec('./deploy.sh');
	} catch (error) {
		console.error(error);
	}
});