CREATE TABLE tasks (
  "id" serial primary key,
  "task" varchar(50) not null,
  "details" varchar(240),
  "status" boolean not null
  );

INSERT INTO "tasks" ("task", "status", "details")
VALUES ('perform maintenance on Q45', 'false', 'replace power steering pump and check blower motor'),
('fix screen door', 'true', 'replace sliding screen door and add doggy door');