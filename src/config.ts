type _Config = {
    endpoint: string,
    key: string,
    prefectures: string,
}

const Config: _Config = {
    endpoint: process.env.REACT_APP_API_END_POINT || "",
    key: process.env.REACT_APP_API_KEY || "",
    prefectures: process.env.REACT_APP_API_PREFECTURES || "",
}

export { Config }