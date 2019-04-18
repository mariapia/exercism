export const GIGASECOND = 1000000000000;
export const gigasecond = (starting) => {
    const starting_date = new Date(starting);
    var millisecond_updated = starting.getTime() + GIGASECOND;
    return new Date(millisecond_updated);
}