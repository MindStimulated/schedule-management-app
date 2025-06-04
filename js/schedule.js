// Schedule-related functions
function renderSchedule() {
    switch(scheduleData.currentView) {
        case 'year':
            renderYearView();
            break;
        case 'month':
            renderMonthView();
            break;
        case 'reports':
            renderReportsView();
            break;
        case 'week':
        default:
            renderWeekView();
            break;
    }
}

function renderWeekView() {
    // Week view rendering logic
}

function renderMonthView() {
    // Month view rendering logic
}

function renderYearView() {
    // Year view rendering logic
}

// Other schedule-related functions...
