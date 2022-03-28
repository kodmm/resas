import { Config } from '../config';

type Prefectures = {
    prefCode: number,
    prefName: string,
}

type PrefResponse = {
    message: null,
    result: Prefectures[]
}

const getPref = async(): Promise<Prefectures[]> => {
    const { result }: PrefResponse = await fetch(Config.endpoint + Config.prefectures, {
        method: "GET",
        headers: {
          "X-API-KEY": Config.key,
        }
      }).then(response => response.json())
      
    return result
}

export { getPref }
export type { Prefectures}
