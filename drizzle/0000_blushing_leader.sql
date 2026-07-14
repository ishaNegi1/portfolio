CREATE TABLE "visitors" (
	"id" serial PRIMARY KEY NOT NULL,
	"ip_hash" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
