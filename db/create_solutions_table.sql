CREATE TABLE IF NOT EXISTS solutions (
  id serial primary key,
  solution varchar (255),
  -- what if solution is larger than 255?  Can I set to anything?  
);
