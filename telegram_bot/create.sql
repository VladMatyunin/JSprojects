-- Table: public."TGUsers"

-- DROP TABLE public."TGUsers";

CREATE TABLE public."TGUsers"
(
    tg_name text COLLATE pg_catalog."default" NOT NULL,
    id bigint NOT NULL,
    name text COLLATE pg_catalog."default",
    surname text COLLATE pg_catalog."default",
    CONSTRAINT "TGUsers_pkey" PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."TGUsers"
    OWNER to postgres;