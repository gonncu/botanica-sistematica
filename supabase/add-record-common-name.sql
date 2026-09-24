alter table public.photo_records
  add column if not exists nombre_vulgar text;

comment on column public.photo_records.nombre_vulgar is
  'Nombre vulgar corregido por el usuario para este registro; no modifica el catalogo.';
