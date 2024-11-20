export function expandClassTag(tag: string): string {
    switch (tag) {
        case 'banger': return "Banger";
        case 'alloy': return "Alloys";
        case 'f1': return "1:12 F1 Stock Cars";
        case 'f2': return "1:12 F1 Stock Cars";
        case 'micra': return "Micra Stocks";
        case 'caravan': return "Caravan";
        case 'swb': return "SWB Stocks";
    }

    return tag;
}