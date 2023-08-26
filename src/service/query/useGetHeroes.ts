import { useQuery } from '@tanstack/react-query';
import { client } from '../api';
import md5 from 'md5';
import { IResponse } from './@types';

const apiKey = '6a20b8066292df5c9d18c4c7f36d90d0';
const privateKey = '55142efe834b66a7a371009e1657527cd9c9da54';
const time = Number(new Date());
const hash = md5(time + privateKey + apiKey);

const params = {
  'apikey': apiKey,
  'ts': time,
  'hash': hash
};

const getHeroes = async () => {
  const { data } = await  client.get('', { params });
  return data;
};

export const useGetHeroes = () => useQuery<IResponse>(['heroes'], 
    () => getHeroes());