import pg from "pg";

export const pool = new pg.Pool({
	user: "axelprogramador2023",
	host: "localhost",
	database: "nodepg",
	password: "startup1090",
	port: 5432,
});

pool.query("SELECT NOW()").then((result) => {
	console.log(result);
});
