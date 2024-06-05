import useSWR from 'swr';
import baseAxios from './baseAxios';

async function fetcher(url: string) {
  return await baseAxios.get(url).then((response) => response.data);
}

async function postFetcher(requestUrl: string) {
  const url = requestUrl.split('?')[0];
  const search = requestUrl.split('?')[1];
  const searchParams = new URLSearchParams(search);
  const params = JSON.parse(searchParams.get('params') || 'null');
  return await baseAxios.post(url, params).then((response) => response.data);
}

export default function useFetch(url: string) {
  return useSWR(url, fetcher);
}

export function usePostFetch(url: string) {
  return useSWR(url, postFetcher);
}
