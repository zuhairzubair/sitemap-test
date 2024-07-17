import client from './client';

export const getNews = (search: string) =>
  client.get('everything', {params: {q: search}});
