DROP TABLE IF EXISTS lists CASCADE;

-- run below in psql to grant permission
-- GRANT all ON lists TO labber;
-- GRANT USAGE, SELECT ON SEQUENCE lists_id_seq TO labber;

CREATE TABLE lists (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  status BOOLEAN DEFAULT FALSE,
  timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
