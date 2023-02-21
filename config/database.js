module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cflfkb53t39778rlaut0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarpl'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'glor8T3JfXddB8pDdJtND3f1I4kbrXzJ'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
