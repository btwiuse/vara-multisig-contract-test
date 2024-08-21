import { ApiPromise, WsProvider } from '@polkadot/api';

async function initApi() {
  const PROVIDER = 'wss://rpc.vara.network';
  const provider = new WsProvider(PROVIDER);
  return await ApiPromise.create({ provider });
}

let api = await initApi();

await api.isReady;

console.log(api);