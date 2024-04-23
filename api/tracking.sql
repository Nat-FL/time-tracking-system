\echo 'Delete and recreate timeTracking db?'
\prompt 'Return for yes or control-C to cancel > ' foo
DROP DATABASE timeTracking;
CREATE DATABASE timeTracking;
\connect timeTracking;
\i tracking-schema.sql