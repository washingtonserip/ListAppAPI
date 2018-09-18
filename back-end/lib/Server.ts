import './DevelopmentEnviroment';
import app from './App';

const port = 3000; // process.env.PORT ||

app.listen(port, () => console.log('Express server listening on port ' + port));
