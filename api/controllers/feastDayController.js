const romcal = require('romcal');
const FeastDay = require('../models/FeastDay');

const TYPE_RANK = [
    'SOLEMNITY', 'SUNDAY', 'TRIDUUM', 'HOLY_WEEK', 'FEAST', 
    'MEMORIAL', 'OPT_MEMORIAL', 'COMMEMORATION', 'FERIA'
];

function getTodayFeastDay(req, res) {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    const todayStr = `${year}-${month}-${day}`;

    const yearDates = romcal.calendarFor({ year });
    const todaysEntries = yearDates.filter(d => d.moment.startsWith(todayStr));

    todaysEntries.sort((a, b) => TYPE_RANK.indexOf(a.type) - TYPE_RANK.indexOf(b.type));

    if (todaysEntries.length === 0) {
        return res.status(404).json({ error: 'No feast day found for today.'});
    }

    const feastDay = FeastDay.fromRomcalEntry(todaysEntries[0]);
    res.json(feastDay);
}

module.exports = { getTodayFeastDay };