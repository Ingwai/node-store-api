require('dotenv').config();

// żeby umieścić hurtowo dane z jsona do bazy musimy połączyć baze z modelem
const connectDB = require('./db/connect');
const Product = require('./models/product');

// wskazujemy plik z danymi
const jsonProducts = require('./products.json');

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		await Product.deleteMany();
		await Product.create(jsonProducts);
		console.log('Success');
		process.exit(0);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

start();
