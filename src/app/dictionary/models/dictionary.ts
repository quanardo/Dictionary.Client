export class Dictionary {
    _id: number;
    date: Date;
    lang_from: object;
    lang_to: object;
    translations: [
        {
            from: string;
            to: string;
        }
    ];
}
