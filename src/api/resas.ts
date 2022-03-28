import { Config } from '../config';

type Prefectures = {
    prefCode: number,
    prefName: string,
}

type PrefResponse = {
    message: null,
    result: Prefectures[]
}

const getPref: any = async() => {
    const results: PrefResponse = await fetch(Config.endpoint, {
        method: "GET",
        headers: {
          "X-API-KEY": Config.key,
        }
      }).then(response => response.json())
    return results.results
}