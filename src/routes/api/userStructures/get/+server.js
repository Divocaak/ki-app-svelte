// @ts-nocheck
import { pool } from "$lib/db/mysql.ts";

export async function GET({ request, params, url }) {
    const [rows, fields] = await pool.promise().query('SELECT id_structure, active FROM user_structure WHERE id_user=?;', url.searchParams.get("uid"));

    return new Response(JSON.stringify(rows));
}