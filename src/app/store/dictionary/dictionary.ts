export interface Dictionary {
    _id: string,
    language: string,
    translations: [
        {
            _id: string,
            from: string,
            to: string
        }
    ],
    date: Date,
    tag: string[]
}
