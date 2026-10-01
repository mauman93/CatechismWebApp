class FeastDay {
    constructor(name, type, date, liturgicalColor) {
        this.name = name;
        this.type = type;
        this.date = date;
        this.liturgicalColor = liturgicalColor;
    }

    static fromRomcalEntry(entry) {
        return new FeastDay(
            entry.name,
            entry.type,
            entry.moment,
            entry.data && entry.data.meta ? entry.data.meta.liturgicalColor : null
        );
    }
}

module.exports = FeastDay;