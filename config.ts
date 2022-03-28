type _Config = {
    endpoint: string,
    key: string,
}

const Config: _Config = {
    endpoint: process.env.REACT_APP_API_END_POINT,
    key: process.env.REACT_APP_API_KEY
}

export { Config }