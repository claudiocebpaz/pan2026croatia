drop policy "Anyone can insert contact messages" on "public"."contact_messages";

revoke delete on table "public"."access_codes" from "anon";

revoke insert on table "public"."access_codes" from "anon";

revoke references on table "public"."access_codes" from "anon";

revoke select on table "public"."access_codes" from "anon";

revoke trigger on table "public"."access_codes" from "anon";

revoke truncate on table "public"."access_codes" from "anon";

revoke update on table "public"."access_codes" from "anon";

revoke delete on table "public"."access_codes" from "authenticated";

revoke insert on table "public"."access_codes" from "authenticated";

revoke references on table "public"."access_codes" from "authenticated";

revoke select on table "public"."access_codes" from "authenticated";

revoke trigger on table "public"."access_codes" from "authenticated";

revoke truncate on table "public"."access_codes" from "authenticated";

revoke update on table "public"."access_codes" from "authenticated";

revoke delete on table "public"."access_codes" from "service_role";

revoke insert on table "public"."access_codes" from "service_role";

revoke references on table "public"."access_codes" from "service_role";

revoke select on table "public"."access_codes" from "service_role";

revoke trigger on table "public"."access_codes" from "service_role";

revoke truncate on table "public"."access_codes" from "service_role";

revoke update on table "public"."access_codes" from "service_role";

revoke delete on table "public"."contact_messages" from "anon";

revoke insert on table "public"."contact_messages" from "anon";

revoke references on table "public"."contact_messages" from "anon";

revoke select on table "public"."contact_messages" from "anon";

revoke trigger on table "public"."contact_messages" from "anon";

revoke truncate on table "public"."contact_messages" from "anon";

revoke update on table "public"."contact_messages" from "anon";

revoke delete on table "public"."contact_messages" from "authenticated";

revoke insert on table "public"."contact_messages" from "authenticated";

revoke references on table "public"."contact_messages" from "authenticated";

revoke select on table "public"."contact_messages" from "authenticated";

revoke trigger on table "public"."contact_messages" from "authenticated";

revoke truncate on table "public"."contact_messages" from "authenticated";

revoke update on table "public"."contact_messages" from "authenticated";

revoke delete on table "public"."contact_messages" from "service_role";

revoke insert on table "public"."contact_messages" from "service_role";

revoke references on table "public"."contact_messages" from "service_role";

revoke select on table "public"."contact_messages" from "service_role";

revoke trigger on table "public"."contact_messages" from "service_role";

revoke truncate on table "public"."contact_messages" from "service_role";

revoke update on table "public"."contact_messages" from "service_role";

alter table "public"."contact_messages" drop constraint "contact_messages_pkey";

drop index if exists "public"."contact_messages_pkey";

drop index if exists "public"."idx_access_codes_code";

drop index if exists "public"."idx_contact_messages_created_at";

drop index if exists "public"."idx_contact_messages_email";

drop table "public"."contact_messages";

create table "public"."profiles" (
    "id" uuid not null,
    "username" text,
    "avatar_url" text,
    "updated_at" timestamp with time zone default now()
);


alter table "public"."access_codes" alter column "created_at" set not null;

CREATE UNIQUE INDEX profiles_pkey ON public.profiles USING btree (id);

CREATE UNIQUE INDEX profiles_username_key ON public.profiles USING btree (username);

alter table "public"."profiles" add constraint "profiles_pkey" PRIMARY KEY using index "profiles_pkey";

alter table "public"."profiles" add constraint "profiles_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) not valid;

alter table "public"."profiles" validate constraint "profiles_id_fkey";

alter table "public"."profiles" add constraint "profiles_username_key" UNIQUE using index "profiles_username_key";



