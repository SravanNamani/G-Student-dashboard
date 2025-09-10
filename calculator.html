function calculateFinalAttendance() {
    // 1. Get all inputs from the user
    const startDateString = document.getElementById('sem-start-date').value;
    const examDateString = document.getElementById('sem-exam-date').value; // Note: This is no longer used in the calculation loop but can be kept for other purposes.
    const prepLeaveDateString = document.getElementById('prep-leave-date').value;
    const expectedPercentage = parseFloat(document.getElementById('expected-percentage').value);

    if (!startDateString || !examDateString || !prepLeaveDateString || isNaN(expectedPercentage)) {
        alert("Please fill in all four fields to calculate.");
        return;
    }

    const startDate = new Date(startDateString);
    const prepLeaveDate = new Date(prepLeaveDateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Using the first student's data as a template for the timetable
    const currentUser = userDatabase[0];
    const timetable = timetablesByBranch[currentUser.branch];
    const subjects = Array.from(new Set(Object.values(timetable.simple).flat()));

    // 2. Calculate total classes for the entire semester (until prep leave)
    const totalSemClasses = {};
    subjects.forEach(name => totalSemClasses[name] = 0);

    let currentDate = new Date(startDate);
    // ✅ CORRECTED LOOP: Iterates up to the prep leave date, not the exam date.
    while (currentDate < prepLeaveDate) {
        (timetable.simple[currentDate.getDay()] || []).forEach(subjectName => {
            if (totalSemClasses[subjectName] !== undefined) totalSemClasses[subjectName]++;
        });
        currentDate.setDate(currentDate.getDate() + 1);
    }

    // 3. Calculate classes held from start date until today
    const classesHeldUntilToday = {};
    subjects.forEach(name => classesHeldUntilToday[name] = 0);
    currentDate = new Date(startDate);
    while (currentDate <= today) {
        (timetable.simple[currentDate.getDay()] || []).forEach(subjectName => {
            if (classesHeldUntilToday[subjectName] !== undefined) classesHeldUntilToday[subjectName]++;
        });
        currentDate.setDate(currentDate.getDate() + 1);
    }

    // 4. Calculate classes from tomorrow until prep leave starts
    const futureClassesToAttend = {};
    subjects.forEach(name => futureClassesToAttend[name] = 0);
    currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1); // Start from tomorrow
    while (currentDate < prepLeaveDate) {
        (timetable.simple[currentDate.getDay()] || []).forEach(subjectName => {
            if (futureClassesToAttend[subjectName] !== undefined) futureClassesToAttend[subjectName]++;
        });
        currentDate.setDate(currentDate.getDate() + 1);
    }

    // 5. Generate and display the results table
    const resultsContainer = document.getElementById('results-output');
    let resultsHTML = `
        <table class="results-table">
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Total Classes</th>
                    <th>Classes to Attend</th>
                    <th>Final Attended</th>
                    <th>Final %</th>
                </tr>
            </thead>
            <tbody>`;

    let totalAllClasses = 0;
    let totalAllAttended = 0;

    subjects.forEach(subject => {
        const totalClasses = totalSemClasses[subject];
        const classesHeld = classesHeldUntilToday[subject];
        const futureClasses = futureClassesToAttend[subject];

        const attendedSoFar = Math.round(classesHeld * (expectedPercentage / 100));
        const finalAttended = attendedSoFar + futureClasses;
        const finalPercentage = totalClasses > 0 ? ((finalAttended / totalClasses) * 100).toFixed(1) : "100.0";

        totalAllClasses += totalClasses;
        totalAllAttended += finalAttended;

        resultsHTML += `
            <tr>
                <td>${subject}</td>
                <td>${totalClasses}</td>
                <td>${futureClasses}</td>
                <td>${finalAttended}</td>
                <td style="font-weight: bold; color: ${finalPercentage >= 75 ? 'var(--safe-color)' : 'var(--danger-color)'};">
                    ${finalPercentage}%
                </td>
            </tr>`;
    });

    const overallPercentage = totalAllClasses > 0 ? ((totalAllAttended / totalAllClasses) * 100).toFixed(1) : "100.0";

    resultsHTML += `
        <tr style="background-color: #e9ecef; font-weight: bold;">
            <td colspan="3">Overall</td>
            <td>${totalAllAttended}</td>
            <td style="color: ${overallPercentage >= 75 ? 'var(--safe-color)' : 'var(--danger-color)'};">
                ${overallPercentage}%
            </td>
        </tr>
    </tbody></table>`;

    resultsContainer.innerHTML = resultsHTML;
    document.getElementById('results-card').style.display = 'block';
}
