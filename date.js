exports.getDay = function() {
    const today = new Date()
    const days = [
        'Sunday', 'Monday', 'Tuesday',
        'Wednesday', 'Thursday', 'Friday',
        'Saturday', 
    ]
    return days[today.getDay()]
}