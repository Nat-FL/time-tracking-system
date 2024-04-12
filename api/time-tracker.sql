\echo 'Delete and recreate time-tracking db?'
\prompt 'Return for yes or control-C to cancel > ' foo
DROP  DATABASE time-tracking;
CREATE DATABASE time-tracking;
\connect time-tracking;
\i time-tracking-schema.sql