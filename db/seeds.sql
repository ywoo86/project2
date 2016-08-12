COPY beers
  (name, brewery, country, category, style, flavors, cuisine)
FROM '/Users/youngwoo/projects/wdi_project2/db/beers.csv'
    DELIMITER ',' CSV;
