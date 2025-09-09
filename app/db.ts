import postgres from 'postgres'

const sql = postgres({ 
        host                 : 'aws-1-ap-south-1.pooler.supabase.com',            // Postgres ip address[s] or domain name[s]
        port                 : 5432,          // Postgres server port[s]
        database             : 'postgres',            // Name of database to connect to
        username             : 'postgres.bemwmyqirvunvigbhxlm',            // Username of database user
        password             : 'test123',            // Password of database user
 }) // will use psql environment variables

export default sql