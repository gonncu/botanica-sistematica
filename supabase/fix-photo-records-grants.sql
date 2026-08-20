grant usage on schema public to authenticated;

grant select, insert, update, delete
  on table public.photo_records
  to authenticated;

grant select, insert
  on table public.quiz_sessions
  to authenticated;

grant execute on function public.is_agro_user()
  to authenticated;
