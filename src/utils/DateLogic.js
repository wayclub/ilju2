import KoreanLunarCalendar from 'korean-lunar-calendar';

export function getIljuString(birthday) {
    const calendar = new KoreanLunarCalendar();
    const birthdayDate = new Date(birthday);
    
    // Set the date in the calendar
    calendar.setSolarDate(birthdayDate.getFullYear(), birthdayDate.getMonth() + 1, birthdayDate.getDate());

    // Get the Korean Gapja
    const gapja = calendar.getKoreanGapja();

    // Extract the first two characters from the 'day' field
    return gapja.day.substring(0, 2);
}