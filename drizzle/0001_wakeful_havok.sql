ALTER TABLE "visitors" ADD COLUMN "visited_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "visitors" DROP COLUMN "ip_hash";--> statement-breakpoint
ALTER TABLE "visitors" DROP COLUMN "created_at";