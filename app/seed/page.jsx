import {sql} from '@vercel/postgres'


export default async () => {
    await sql`
    CREATE TABLE POST(
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      content TEXT,
      url TEXT
    )
  `;

    //mensaje que devuelve la ruta
    return <p>Database seed the guay</p>
}
