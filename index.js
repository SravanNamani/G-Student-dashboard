document.addEventListener("DOMContentLoaded", function() {
    
    // --- DATABASE (Hardcoded Data) ---
    const userDatabase = [
        { name: 'SRAVAN NAMANI', regdNo: '2025228568', branch: 'CSE' },
        { name: 'Dhanush', regdNo: '2025143209', branch: 'VLSI' },
        { name: 'Bhargav', regdNo: '2025090927', branch: 'VLSI' },
        { name: 'DATA SCIENCE FRIEND', regdNo: '2025221234', branch: 'DS' },
        { name: 'Eswar', regdNo: '2025143281', branch: 'DS' },
        { name: 'Vaibhav', regdNo: '2025000512', branch: 'DS' },
        { name: 'Sreelakshmi', regdNo: '2025257316', branch: 'CSE' },
        { name: 'Sowmya', regdNo: '2025203382', branch: 'CSE' },
        { name: 'Shanthi', regdNo: '2025268900', branch: 'CSE' },
        { name: 'Karthik', regdNo: '2025008823', branch: 'DS' },
        { name: 'Harshini', regdNo: '2025053721', branch: 'CSE' },
        { name: 'Sahithi', regdNo: '2025060863', branch: 'CSE' }
    ];

    const timetablesByBranch = {
        'CSE': {
            timeSlots: ['08:00-08:50', '09:00-09:50', '10:00-10:50', '11:00-11:50', '11:50-1:00', '1:00-1:50', '2:00-2:50'],
            simple: { 0: [], 1: ['Mathematical Foundations of Computer Science', 'Advanced Data Structures', 'Algorithms and Analysis', 'Research Methodology and IPR', 'Data Science Lab', 'Data Science Lab'], 2: ['Advanced Data Structures Lab', 'Advanced Data Structures Lab', 'Algorithms and Analysis', 'English for Research Paper Writing', 'Algorithms and Analysis Lab', 'Algorithms and Analysis Lab'], 3: ['Machine Learning', 'Mathematical Foundations of Computer Science', 'Advanced Data Structures', 'Data Science', 'Machine Learning Lab', 'Machine Learning Lab'], 4: ['Machine Learning', 'English for Research Paper Writing', 'Algorithms and Analysis', 'Data Science'], 5: ['Machine Learning', 'Research Methodology and IPR', 'Data Science', 'Advanced Data Structures', 'Mathematical Foundations of Computer Science'], 6: [] },
            full: { 'Monday': [ { time: '08:00-08:50', subject: 'Mathematical Foundations of Computer Science' }, { time: '09:00-09:50', subject: 'Advanced Data Structures' }, { time: '10:00-10:50', subject: 'Algorithms and Analysis' }, { time: '11:00-11:50', subject: 'Research Methodology and IPR' }, { time: '1:00-1:50', subject: 'Data Science Lab', span: 2 } ], 'Tuesday': [ { time: '08:00-08:50', subject: 'Advanced Data Structures Lab', span: 2 }, { time: '10:00-10:50', subject: 'Algorithms and Analysis' }, { time: '11:00-11:50', subject: 'English for Research Paper Writing' }, { time: '1:00-1:50', subject: 'Algorithms and Analysis Lab', span: 2 } ], 'Wednesday': [ { time: '08:00-08:50', subject: 'Machine Learning' }, { time: '09:00-09:50', subject: 'Mathematical Foundations of Computer Science' }, { time: '10:00-10:50', subject: 'Advanced Data Structures' }, { time: '11:00-11:50', subject: 'Data Science' }, { time: '1:00-1:50', subject: 'Machine Learning Lab', span: 2 } ], 'Thursday': [ { time: '08:00-08:50', subject: 'Machine Learning' }, { time: '10:00-10:50', subject: 'English for Research Paper Writing' }, { time: '11:00-11:50', subject: 'Algorithms and Analysis' }, { time: '1:00-1:50', subject: 'Data Science' } ], 'Friday': [ { time: '08:00-08:50', subject: 'Machine Learning' }, { time: '09:00-09:50', subject: 'Research Methodology and IPR' }, { time: '10:00-10:50', subject: 'Data Science' }, { time: '11:00-11:50', subject: 'Advanced Data Structures' }, { time: '1:00-1:50', subject: 'Mathematical Foundations of Computer Science' } ] },
            colors: { 'Mathematical Foundations of Computer Science': '#8e44ad', 'Advanced Data Structures': '#2980b9', 'Algorithms and Analysis': '#27ae60', 'Research Methodology and IPR': '#f39c12', 'Data Science Lab': '#d35400', 'Advanced Data Structures Lab': '#16a085', 'English for Research Paper Writing': '#7f8c8d', 'Algorithms and Analysis Lab': '#2c3e50', 'Machine Learning': '#c0392b', 'Data Science': '#d35400', 'Machine Learning Lab': '#c0392b' }
        },
        'DS': {
            timeSlots: ['08:00-08:50', '09:00-09:50', '10:00-10:50', '11:00-11:50', '11:50-1:00', '1:00-1:50', '2:00-2:50'],
            simple: { 0: [], 1: ['Advanced Data Structures', 'Algorithms and Analysis', 'Research Methodology & IPR', 'Data Science Lab', 'Data Science Lab'], 2: ['Advanced Data Structures Lab', 'Advanced Data Structures Lab', 'Algorithms and Analysis', 'English for Research Paper Writing', 'Algorithms and Analysis Lab', 'Algorithms and Analysis Lab'], 3: ['Machine Learning', 'Statistical Modeling', 'Advanced Data Structures', 'Data Science', 'Machine Learning Lab', 'Machine Learning Lab'], 4: ['Machine Learning', 'Statistical Modeling', 'English for Research Paper Writing', 'Algorithms and Analysis', 'Data Science'], 5: ['Machine Learning', 'Research Methodology & IPR', 'Data Science', 'Advanced Data Structures', 'Statistical Modeling'], 6: [] },
            full: { 'Monday': [ { time: '09:00-09:50', subject: 'Advanced Data Structures' }, { time: '10:00-10:50', subject: 'Algorithms and Analysis' }, { time: '11:00-11:50', subject: 'Research Methodology & IPR' }, { time: '1:00-1:50', subject: 'Data Science Lab', span: 2 } ], 'Tuesday': [ { time: '08:00-08:50', subject: 'Advanced Data Structures Lab', span: 2 }, { time: '10:00-10:50', subject: 'Algorithms and Analysis' }, { time: '11:00-11:50', subject: 'English for Research Paper Writing' }, { time: '1:00-1:50', subject: 'Algorithms and Analysis Lab', span: 2 } ], 'Wednesday': [ { time: '08:00-08:50', subject: 'Machine Learning' }, { time: '09:00-09:50', subject: 'Statistical Modeling' }, { time: '10:00-10:50', subject: 'Advanced Data Structures' }, { time: '11:00-11:50', subject: 'Data Science' }, { time: '1:00-1:50', subject: 'Machine Learning Lab', span: 2 } ], 'Thursday': [ { time: '08:00-08:50', subject: 'Machine Learning' }, { time: '09:00-09:50', subject: 'Statistical Modeling' }, { time: '10:00-10:50', subject: 'English for Research Paper Writing' }, { time: '11:00-11:50', subject: 'Algorithms and Analysis' }, { time: '1:00-1:50', subject: 'Data Science' } ], 'Friday': [ { time: '08:00-08:50', subject: 'Machine Learning' }, { time: '09:00-09:50', subject: 'Research Methodology & IPR' }, { time: '10:00-10:50', subject: 'Data Science' }, { time: '11:00-11:50', subject: 'Advanced Data Structures' }, { time: '1:00-1:50', subject: 'Statistical Modeling' } ] },
            colors: { 'Advanced Data Structures': '#2980b9', 'Algorithms and Analysis': '#27ae60', 'Research Methodology & IPR': '#f39c12', 'Data Science Lab': '#d35400', 'Advanced Data Structures Lab': '#16a085', 'English for Research Paper Writing': '#7f8c8d', 'Algorithms and Analysis Lab': '#2c3e50', 'Machine Learning': '#c0392b', 'Data Science': '#d35400', 'Machine Learning Lab': '#c0392b', 'Statistical Modeling': '#8e44ad' }
        },
        'VLSI': {
            timeSlots: ['08:00-08:50', '09:00-09:50', '10:00-10:50', '11:00-11:50', '11:50-13:00', '13:00-13:50', '14:00-14:50', '15:00-15:50'],
            simple: { 0: [], 1: ['Analog IC Design', 'Digital System Design', 'Modeling and Design With HDLs', 'Research Methodology & IPR', 'Digital IC Design', 'VLSI Circuit Design Laboratory', 'VLSI Circuit Design Laboratory'], 2: ['Digital Systems Testing and Testability', 'English For Research Paper Writing', 'FPGA Design Laboratory', 'FPGA Design Laboratory'], 3: ['Modeling and Design With HDLs', 'Digital IC Design', 'Analog IC Design', 'Digital Systems Testing and Testability', 'Digital System Design'], 4: ['FPGA Design Laboratory', 'FPGA Design Laboratory', 'English For Research Paper Writing', 'Analog IC Design', 'VLSI Circuit Design Laboratory', 'VLSI Circuit Design Laboratory'], 5: ['Digital IC Design', 'Research Methodology & IPR', 'Digital System Design', 'Digital Systems Testing and Testability', 'Modeling and Design With HDLs'], 6: [] },
            full: { 'Monday': [ { time: '08:00-08:50', subject: 'Analog IC Design' }, { time: '09:00-09:50', subject: 'Digital System Design' }, { time: '10:00-10:50', subject: 'Modeling and Design With HDLs' }, { time: '11:00-11:50', subject: 'Research Methodology & IPR' }, { time: '13:00-13:50', subject: 'Digital IC Design' }, { time: '14:00-14:50', subject: 'VLSI Circuit Design Laboratory', span: 2 } ], 'Tuesday': [ { time: '10:00-10:50', subject: 'Digital Systems Testing and Testability' }, { time: '11:00-11:50', subject: 'English For Research Paper Writing' }, { time: '14:00-14:50', subject: 'FPGA Design Laboratory', span: 2 } ], 'Wednesday': [ { time: '08:00-08:50', subject: 'Modeling and Design With HDLs' }, { time: '09:00-09:50', subject: 'Digital IC Design' }, { time: '10:00-10:50', subject: 'Analog IC Design' }, { time: '11:00-11:50', subject: 'Digital Systems Testing and Testability' }, { time: '13:00-13:50', subject: 'Digital System Design' } ], 'Thursday': [ { time: '08:00-08:50', subject: 'FPGA Design Laboratory', span: 2 }, { time: '10:00-10:50', subject: 'English For Research Paper Writing' }, { time: '11:00-11:50', subject: 'Analog IC Design' }, { time: '13:00-13:50', subject: 'VLSI Circuit Design Laboratory', span: 2 } ], 'Friday': [ { time: '08:00-08:50', subject: 'Digital IC Design' }, { time: '09:00-09:50', subject: 'Research Methodology & IPR' }, { time: '11:00-11:50', subject: 'Digital System Design' }, { time: '13:00-13:50', subject: 'Digital Systems Testing and Testability' }, { time: '14:00-14:50', subject: 'Modeling and Design With HDLs' } ] },
            colors: { 'Analog IC Design': '#8e44ad', 'Digital System Design': '#2980b9', 'Modeling and Design With HDLs': '#27ae60', 'Research Methodology & IPR': '#f39c12', 'Digital IC Design': '#d35400', 'VLSI Circuit Design Laboratory': '#c0392b', 'Digital Systems Testing and Testability': '#16a085', 'English For Research Paper Writing': '#7f8c8d', 'FPGA Design Laboratory': '#2c3e50' }
        }
    };

    const courseDetailsByBranch = {
        'CSE': { 'Advanced Data Structures': { credits: 4, type: 'Integrated' }, 'Mathematical Foundations of Computer Science': { credits: 3, type: 'Theory' }, 'Algorithms and Analysis': { credits: 4, type: 'Integrated' }, 'Machine Learning': { credits: 4, type: 'Integrated' }, 'Data Science': { credits: 4, 'type': 'Integrated' }, 'Research Methodology and IPR': { credits: 2, type: 'Theory' }, 'English for Research Paper Writing': { credits: 0, type: 'Theory' }, 'Data Science Lab':{credits:0, type:'Lab'},'Advanced Data Structures Lab':{credits:0, type:'Lab'},'Algorithms and Analysis Lab':{credits:0, type:'Lab'},'Machine Learning Lab':{credits:0, type:'Lab'} },
        'DS': { 'Advanced Data Structures': { credits: 4, type: 'Integrated' }, 'Algorithms and Analysis': { credits: 4, type: 'Integrated' }, 'Research Methodology & IPR': { credits: 2, type: 'Theory' }, 'Data Science': { credits: 4, 'type': 'Integrated' }, 'Advanced Data Structures Lab': { credits: 0, type: 'Lab' }, 'English for Research Paper Writing': { credits: 0, type: 'Theory' }, 'Algorithms and Analysis Lab': { credits: 0, type: 'Lab' }, 'Machine Learning': { credits: 4, type: 'Integrated' }, 'Statistical Modeling': { credits: 3, type: 'Theory' }, 'Data Science Lab': { credits: 0, type: 'Lab' }, 'Machine Learning Lab': { credits: 0, type: 'Lab' } },
        'VLSI': { 'Analog IC Design': { credits: 3, type: 'Theory' }, 'Digital System Design': { credits: 3, type: 'Theory' }, 'Modeling and Design With HDLs': { credits: 3, type: 'Theory' }, 'Research Methodology & IPR': { credits: 2, type: 'Theory' }, 'Digital IC Design': { credits: 3, type: 'Theory' }, 'VLSI Circuit Design Laboratory': { credits: 2, type: 'Lab' }, 'Digital Systems Testing and Testability': { credits: 3, type: 'Theory' }, 'English For Research Paper Writing': { credits: 0, type: 'Theory' }, 'FPGA Design Laboratory': { credits: 2, type: 'Lab' } }
    };

    let subjectData = {};
    let currentUserTimetable = {};
    let courseDetails = {};

    function init() {
        const currentUserRegdNo = sessionStorage.getItem('currentUserRegdNo');
        if (currentUserRegdNo) {
            loadDashboardForUser(currentUserRegdNo);
        } else {
            document.getElementById('login-page').style.display = 'flex';
            document.getElementById('dashboard-page').style.display = 'none';
        }
    }

    function handleLogin(event) {
        event.preventDefault();
        const regdNo = document.getElementById('regdNo-input').value.trim();
        const password = document.getElementById('password-input').value.trim();
        const correctPassword = regdNo + "@987";
        const userExists = userDatabase.find(u => u.regdNo === regdNo);

        if (userExists && password === correctPassword) {
            sessionStorage.setItem('currentUserRegdNo', regdNo);
            window.location.reload();
        } else {
            alert('Invalid Registration Number or Password.');
        }
    }

    function logout() {
        sessionStorage.removeItem('currentUserRegdNo');
        window.location.reload();
    }
    function fetchAndDisplayIP() {
    const ipElement = document.getElementById('user-ip');
    if (!ipElement) return;

    ipElement.textContent = 'Fetching IP...';
    fetch("https://api.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
            ipElement.textContent = `Your IP: ${data.ip}`;
        })
        .catch(() => {
            ipElement.textContent = "IP not available";
        });
}

    function loadDashboardForUser(regdNo) {
        const currentUser = userDatabase.find(u => u.regdNo === regdNo);
        if (!currentUser) { logout(); return; }
        
        const branch = currentUser.branch;
        currentUserTimetable = timetablesByBranch[branch];
        courseDetails = courseDetailsByBranch[branch];
        
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('dashboard-page').style.display = 'block';
        fetchAndDisplayIP();

        document.getElementById('sidebar-profile-name').innerText = currentUser.name;
        document.getElementById('sidebar-profile-id').innerText = `(${currentUser.regdNo} - ${branch})`;
        const profilePic = document.getElementById('profile-pic');
        profilePic.style.display = 'block';
        profilePic.src = `https://doeresults.gitam.edu/photo/img.aspx?id=${currentUser.regdNo}`;
        profilePic.onerror = () => { profilePic.style.display = 'none'; };

        renderAttendanceView();
        renderGradeEstimator();
        renderFullTimetable();
        showView('attendance-view', document.querySelector('.sidebar-nav a'));
        loadData();
    }
    
    function getUserDataKey(type) {
        const regdNo = sessionStorage.getItem('currentUserRegdNo');
        return `${type}Data_${regdNo}`;
    }

    function loadData() {
        const savedAttData = localStorage.getItem(getUserDataKey('attendance'));
        if (savedAttData) {
            subjectData = JSON.parse(savedAttData);
        } else {
            subjectData = {};
            getUniqueSubjects().forEach(name => {
                subjectData[name] = { attended: 0, bunked: 0, totalInSem: 0 };
            });
        }
        renderDashboard();
    }

    function saveData(type) {
        if (type === 'attendance') {
            localStorage.setItem(getUserDataKey('attendance'), JSON.stringify(subjectData));
        }
    }

    function renderAttendanceView() {
        const view = document.getElementById('attendance-view');
        view.innerHTML = `
            <div class="dashboard-grid">
                <div id="today-schedule-card" class="card"></div>
                <div id="total-attendance-card" class="card">
                    <div id="total-stats-container"></div>
                </div>
                <div id="setup-card" class="card" style="align-items: center; justify-content: center; gap: 15px;">
                    <div>
                        <label for="start-date" style="display: block; text-align: center; margin-bottom: 10px; font-weight: 500;">Semester Start Date:</label>
                        <input type="date" id="start-date" style="padding: 8px; border-radius: 5px; border: 1px solid var(--border-color); width: 100%;">
                    </div>
                    <button onclick="startTracking()" class="card-btn" style="background-color: var(--safe-color); max-width: 450px;">Calculate & Start</button>
                </div>
                <div id="bunk-simulator-card" class="card">
                    <h2 style="font-size: 1.2em; margin-bottom: 15px;">Bunk Day Simulator</h2>
                    <div class="login-form-group">
                        <label for="day-to-bunk-select">Select a day:</label>
                        <select id="day-to-bunk-select" style="width: 100%; padding: 8px; border-radius: 5px; border: 1px solid var(--border-color);">
                            <option value="1">Monday</option><option value="2">Tuesday</option><option value="3">Wednesday</option><option value="4">Thursday</option><option value="5">Friday</option><option value="6">Saturday</option>
                        </select>
                    </div>
                    <button onclick="simulateDayBunk()" class="card-btn" style="background-color: var(--primary-color);">Simulate</button>
                    <div id="simulation-result" style="text-align:center; margin-top:15px; font-weight: 500;"></div>
                </div>
            </div>
            <p style="text-align: center; color: var(--text-light-color); font-style: italic; margin-top: 15px;">Note: Classes started from 04-08-2025</p>
            <div id="subject-dashboard" style="margin-top: 30px;">
                <h2>Individual Subjects</h2>
                <div id="dashboard" class="dashboard-grid"></div>
            </div>`;
        renderTodaysSchedule();
    }
    
    function renderDashboard() {
        const dashboard = document.getElementById('dashboard');
        if (!dashboard) return;
        dashboard.innerHTML = '';
        getUniqueSubjects().forEach(subjectName => {
             if(!subjectData[subjectName]) subjectData[subjectName] = { attended: 0, bunked: 0, totalInSem: 0 };
             const data = subjectData[subjectName];
             const minPercentage = 75;
             const held = data.attended + data.bunked;
             const percentage = held > 0 ? (data.attended / held) * 100 : 100;
             const minClassesRequired = Math.ceil(data.totalInSem * (minPercentage / 100));
             const maxBunksAllowed = data.totalInSem - minClassesRequired;
             const bunksLeft = maxBunksAllowed - data.bunked;
             const card = document.createElement('div');
             card.className = `card subject-card ${bunksLeft >= 0 ? 'is-safe' : 'is-danger'}`;
             card.innerHTML = `<h3 style="font-weight: 600;">${subjectName}</h3><div class="card-main-stats"><div class="stat"><div class="label">Percentage</div><div class="value">${percentage.toFixed(1)}%</div></div><div class="stat"><div class="label">Bunks Left</div><div class="value" style="color: ${bunksLeft >= 0 ? 'var(--safe-color)' : 'var(--danger-color)'}">${data.totalInSem > 0 ? bunksLeft : '?'}</div></div></div><div style="font-size: 0.9em; text-align: center; color: var(--text-light-color);">Attended: ${data.attended} | Bunked: ${data.bunked}</div><div style="margin-top: 15px; display: flex; gap: 10px;"><button class="card-btn bunk-btn" onclick="markBunked('${subjectName}')"><i class="ri-subtract-line"></i> Bunk</button><button class="card-btn undo-btn" onclick="undoBunk('${subjectName}')"><i class="ri-arrow-go-back-line"></i> Undo</button></div>`;
             dashboard.appendChild(card);
        });
        renderTotalAttendance();
    }
    
    function renderTotalAttendance() {
        const container = document.getElementById('total-stats-container');
        if (!container) return;
        let totalAttended = 0, totalBunked = 0;
        Object.values(subjectData).forEach(data => {
            totalAttended += data.attended;
            totalBunked += data.bunked;
        });
        const totalHeld = totalAttended + totalBunked;
        const totalPercentage = totalHeld > 0 ? (totalAttended / totalHeld) * 100 : 100;
        container.innerHTML = `<h2>Overall Attendance</h2><div class="stats-grid"><div class="stat"><div class="label">Total %</div><div class="value">${totalPercentage.toFixed(1)}%</div></div><div class="stat"><div class="label">Attended</div><div class="value">${totalAttended}</div></div><div class="stat"><div class="label">Bunked</div><div class="value">${totalBunked}</div></div></div>`;
    }

    function renderTodaysSchedule() {
        const card = document.getElementById('today-schedule-card');
        if(!card) return;
        const today = new Date();
        const dateString = today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        const classesToday = currentUserTimetable.simple[today.getDay()] || [];
        let cardContent = `<h2>Today's Schedule</h2><p style="text-align:center;font-weight:500;margin-bottom:15px;color:var(--text-light-color);">${dateString}</p>`;
        if (classesToday.length > 0) {
            cardContent += `<ul>${classesToday.map(s => `<li>${s}</li>`).join('')}</ul>`;
        } else {
            cardContent += `<p style="text-align:center;font-weight:500;">No classes today! 🎉</p>`;
        }
        card.innerHTML = cardContent;
    }

    function renderFullTimetable() {
        const container = document.getElementById('timetable-container');
        if (!container) return;
        const branchTimeSlots = currentUserTimetable.timeSlots;
        if (!branchTimeSlots) return;
        let tableHTML = `<table class="timetable-table"><thead><tr><th>Weekday</th>${branchTimeSlots.map(slot => `<th>${slot}</th>`).join('')}</tr></thead><tbody>`;
        ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].forEach(day => {
            tableHTML += `<tr><td class="day-header">${day}</td>`;
            const daySchedule = currentUserTimetable.full[day] || [];
            for (let i = 0; i < branchTimeSlots.length; ) {
                const slot = branchTimeSlots[i];
                if (slot.includes('11:50-')) { tableHTML += `<td class="lunch-cell">LUNCH</td>`; i++; continue; }
                const classInfo = daySchedule.find(c => c.time === slot);
                if (classInfo) {
                    const span = classInfo.span || 1;
                    const color = currentUserTimetable.colors[classInfo.subject] || '#bdc3c7';
                    tableHTML += `<td class="class-cell" colspan="${span}" style="background-color:${color};">${classInfo.subject}</td>`;
                    i += span;
                } else { tableHTML += '<td>-</td>'; i++; }
            }
            tableHTML += `</tr>`;
        });
        tableHTML += '</tbody></table>';
        let tabsHTML = '<div class="timetable-tabs"><div class="tab-nav">';
        ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].forEach((day, index) => {
            tabsHTML += `<button class="tab-nav-btn ${index === 0 ? 'active' : ''}" onclick="openTimetableTab(event, '${day}')">${day}</button>`;
        });
        tabsHTML += '</div>';
        ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].forEach((day, index) => {
            tabsHTML += `<div id="${day}" class="tab-content ${index === 0 ? 'active' : ''}"><ul>`;
            (currentUserTimetable.full[day] || []).forEach(c => {
                let timeText = c.time;
                if (c.span && c.span > 1) {
                    const startTimeIndex = branchTimeSlots.indexOf(c.time);
                    if (startTimeIndex !== -1 && (startTimeIndex + c.span - 1) < branchTimeSlots.length) {
                        const endTime = branchTimeSlots[startTimeIndex + c.span - 1].split('-')[1];
                        timeText = `${c.time.split('-')[0]}-${endTime}`;
                    }
                }
                tabsHTML += `<li><span>${timeText}</span><strong>${c.subject}</strong></li>`;
            });
            tabsHTML += `</ul></div>`;
        });
        tabsHTML += '</div>';
        container.innerHTML = tableHTML + tabsHTML;
    }
    
    function renderGradeEstimator() {
        const view = document.getElementById('grade-estimator-view');
        view.innerHTML = `
            <h2>Grade Estimator</h2>
            <p style="text-align:center;max-width:600px;margin:-10px auto 20px;color:var(--text-light-color);">Enter marks to estimate your grade and SGPA.</p>
            <div id="grade-estimator-grid" class="dashboard-grid"></div>
            <div class="card" style="text-align:center;margin-top:20px;">
                <button onclick="calculateSGPA()" class="card-btn" style="background-color:var(--safe-color);max-width:300px;display:inline-block;">
                    <i class="ri-calculator-line"></i> Calculate Estimated SGPA
                </button>
                <div id="sgpa-result" style="font-size:1.5em;font-weight:bold;margin-top:15px;"></div>
            </div>`;
        const grid = document.getElementById('grade-estimator-grid');
        grid.innerHTML = '';
        getUniqueSubjects().forEach(subjectName => {
            const details = courseDetails[subjectName];
            if (!details || details.credits === 0) return;
            const cleanSubName = subjectName.replace(/[\s&/]/g, '');
            let inputsHTML = '';
            if (details.type === 'Theory') {
                inputsHTML += `<div class="input-group"><label>Internal (40)</label><input oninput="if(parseInt(this.value)>40) this.value=40; calculateSubjectGrade('${subjectName}')" type="number" min="0" max="40" id="internal_${cleanSubName}"></div><div class="input-group"><label>External (60)</label><input oninput="if(parseInt(this.value)>60) this.value=60; calculateSubjectGrade('${subjectName}')" type="number" min="0" max="60" id="external_${cleanSubName}"></div>`;
            } else if (details.type === 'Lab') {
                inputsHTML += `<div class="input-group"><label>Total Internal (100)</label><input oninput="if(parseInt(this.value)>100) this.value=100; calculateSubjectGrade('${subjectName}')" type="number" min="0" max="100" id="lab_internal_${cleanSubName}"></div>`;
            } else if (details.type === 'Integrated') {
                inputsHTML += `<div class="input-group"><label>Theory Internal (40)</label><input oninput="if(parseInt(this.value)>40) this.value=40; calculateSubjectGrade('${subjectName}')" type="number" min="0" max="40" id="internal_${cleanSubName}"></div><div class="input-group"><label>Theory External (60)</label><input oninput="if(parseInt(this.value)>60) this.value=60; calculateSubjectGrade('${subjectName}')" type="number" min="0" max="60" id="external_${cleanSubName}"></div><div class="input-group"><label>Lab Internal (100)</label><input oninput="if(parseInt(this.value)>100) this.value=100; calculateSubjectGrade('${subjectName}')" type="number" min="0" max="100" id="lab_internal_${cleanSubName}"></div>`;
            }
            const card = document.createElement('div');
            card.className = 'card estimator-card';
            card.innerHTML = `<h3>${subjectName} (${details.credits} Cr)</h3><div class="input-grid">${inputsHTML}</div><div class="result-area" style="text-align:center;margin-top:15px;">Grade: <span id="result_${cleanSubName}" style="font-weight:bold;font-size:1.4em;">-</span><div id="validation_${cleanSubName}" style="font-size:0.8em; color:var(--danger-color); height: 1em; margin-top: 5px;"></div></div>`;
            grid.appendChild(card);
        });
    }

    function getGradeFromMarks(marks, failStatus) {
        if (failStatus) return { grade: 'F', gradePoint: 0 };
        if (marks >= 90) return { grade: 'O', gradePoint: 10 };
        if (marks >= 80) return { grade: 'A+', gradePoint: 9 };
        if (marks >= 70) return { grade: 'A', gradePoint: 8 };
        if (marks >= 60) return { grade: 'B+', gradePoint: 7 };
        if (marks >= 50) return { grade: 'B', gradePoint: 6 };
        if (marks >= 45) return { grade: 'C', gradePoint: 5 };
        if (marks >= 40) return { grade: 'P', gradePoint: 4 };
        return { grade: 'F', gradePoint: 0 };
    }

    function calculateSubjectGrade(subjectName) {
        const details = courseDetails[subjectName];
        const cleanSubName = subjectName.replace(/[\s&/]/g, '');
        let finalScore = 0;
        let isFail = false;
        const validationDiv = document.getElementById(`validation_${cleanSubName}`);
        if(validationDiv) validationDiv.textContent = '';
        
        if (details.type === 'Theory' || details.type === 'Integrated') {
            const internal = parseInt(document.getElementById(`internal_${cleanSubName}`)?.value) || 0;
            const external = parseInt(document.getElementById(`external_${cleanSubName}`)?.value) || 0;
            
            let minExternalRequired = 24;
            let internalShortfall = 16 - internal;

            if (internalShortfall > 0) {
                minExternalRequired = 24 + internalShortfall;
                if(validationDiv) validationDiv.textContent = `Short by ${internalShortfall} in internals. Need at least ${minExternalRequired} in externals.`;
            }

            if (internal < 16 && external < minExternalRequired) {
                isFail = true;
            } else if (internal >= 16 && external < 24) {
                isFail = true;
            } else if ((internal + external) < 40) {
                isFail = true;
            }
            
            const theoryTotal = internal + external;
            
            if (details.type === 'Theory') {
                finalScore = theoryTotal;
            } else { // Integrated
                const labInternal = parseInt(document.getElementById(`lab_internal_${cleanSubName}`)?.value) || 0;
                if (labInternal < 40) {
                    isFail = true;
                    if(validationDiv && !validationDiv.textContent) validationDiv.textContent = 'Lab internal requires a minimum of 40.';
                }
                finalScore = (theoryTotal * 0.7) + (labInternal * 0.3);
            }
        } else if (details.type === 'Lab') {
            const labInternal = parseInt(document.getElementById(`lab_internal_${cleanSubName}`)?.value) || 0;
            if (labInternal < 40) {
                isFail = true;
                if(validationDiv) validationDiv.textContent = 'Lab internal requires a minimum of 40.';
            }
            finalScore = labInternal;
        }
        
        const { grade, gradePoint } = getGradeFromMarks(finalScore, isFail);
        document.getElementById(`result_${cleanSubName}`).innerText = `${grade} (${finalScore.toFixed(2)})`;
        return { gradePoint, credits: details.credits };
    }

    function calculateSGPA() {
        let totalCredits = 0;
        let weightedGradePoints = 0;
        getUniqueSubjects().forEach(subjectName => {
            const details = courseDetails[subjectName];
            if (details && details.credits > 0) {
                const result = calculateSubjectGrade(subjectName);
                totalCredits += result.credits;
                weightedGradePoints += result.gradePoint * result.credits;
            }
        });
        const sgpa = totalCredits > 0 ? (weightedGradePoints / totalCredits) : 0;
        document.getElementById('sgpa-result').innerText = `Estimated SGPA: ${sgpa.toFixed(2)}`;
    }

    // --- Global Functions (attached to window for onclick) ---
    window.getUniqueSubjects = () => Array.from(new Set(Object.values(currentUserTimetable.simple || {}).flat())).sort();
    window.showView = (viewId, element) => {
        document.querySelectorAll('.content-area.view').forEach(v => v.style.display = 'none');
        document.getElementById(viewId).style.display = 'block';
        document.querySelectorAll('.sidebar-nav a').forEach(a => a.classList.remove('active'));
        if (element) element.classList.add('active');
        if (document.getElementById('sidebar').classList.contains('open')) window.toggleMobileMenu();
    };
    window.toggleMobileMenu = () => {
        document.getElementById('sidebar').classList.toggle('open');
        document.getElementById('overlay').classList.toggle('open');
    };
    window.logout = logout;
    window.openTimetableTab = (evt, dayName) => {
        document.querySelectorAll('#timetable-container .tab-content').forEach(tc => tc.classList.remove('active'));
        document.querySelectorAll('#timetable-container .tab-nav-btn').forEach(tb => tb.classList.remove('active'));
        document.getElementById(dayName).classList.add('active');
        evt.currentTarget.classList.add('active');
    };
    window.markBunked = (subjectName) => {
        if (subjectData[subjectName].attended > 0) {
            subjectData[subjectName].attended--;
            subjectData[subjectName].bunked++;
            saveData('attendance');
            renderDashboard();
        }
    };
    window.undoBunk = (subjectName) => {
        if (subjectData[subjectName].bunked > 0) {
            subjectData[subjectName].attended++;
            subjectData[subjectName].bunked--;
            saveData('attendance');
            renderDashboard();
        }
    };
    window.startTracking = () => {
        const startDateString = document.getElementById('start-date').value;
        if (!startDateString) { alert("Please select a Semester Start Date first."); return; }
        const startDate = new Date(startDateString);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (startDate > today) { alert("Start date cannot be in the future."); return; }
        const heldCounts = {};
        getUniqueSubjects().forEach(name => heldCounts[name] = 0);
        let currentDate = new Date(startDate);
        while (currentDate <= today) {
            (currentUserTimetable.simple[currentDate.getDay()] || []).forEach(subjectName => {
                if (heldCounts[subjectName] !== undefined) heldCounts[subjectName]++;
            });
            currentDate.setDate(currentDate.getDate() + 1);
        }
        for (const subjectName of getUniqueSubjects()) {
            subjectData[subjectName] = subjectData[subjectName] || { totalInSem: 0 };
            subjectData[subjectName].attended = heldCounts[subjectName] || 0;
            subjectData[subjectName].bunked = 0;
        }
        saveData('attendance');
        renderDashboard();
        alert("Dashboard calculated and updated with 100% attendance until today!");
    };
    window.simulateDayBunk = () => {
        const dayIndex = document.getElementById('day-to-bunk-select').value;
        const resultDiv = document.getElementById('simulation-result');
        const classesOnDay = currentUserTimetable.simple[dayIndex] || [];
        if (classesOnDay.length === 0) {
            resultDiv.innerHTML = `No classes to bunk on the selected day!`;
            return;
        }
        let totalAttended = 0, totalBunked = 0;
        Object.values(subjectData).forEach(data => {
            totalAttended += data.attended;
            totalBunked += data.bunked;
        });
        const newTotalHeld = (totalAttended + totalBunked) + classesOnDay.length;
        const newPercentage = newTotalHeld > 0 ? (totalAttended / newTotalHeld) * 100 : 100;
        resultDiv.innerHTML = `After bunking, your new overall percentage would be <strong>${newPercentage.toFixed(1)}%</strong>.`;
    };
    window.calculateSGPA = calculateSGPA;
    window.calculateSubjectGrade = calculateSubjectGrade;
    
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    const passwordInput = document.getElementById('password-input');
    const passwordToggleIcon = document.getElementById('password-toggle-icon');
    passwordToggleIcon.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('ri-eye-line');
        this.classList.toggle('ri-eye-off-line');
    });
// --- Dark Mode Toggle Logic ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const moonIcon = 'ri-moon-line';
    const sunIcon = 'ri-sun-line';

    function applyTheme() {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        body.classList.toggle('dark-mode', isDarkMode);
        
        const icon = darkModeToggle.querySelector('i');
        if (isDarkMode) {
            icon.classList.remove(moonIcon);
            icon.classList.add(sunIcon);
            darkModeToggle.style.color = '#ffc107'; // Sun color
        } else {
            icon.classList.remove(sunIcon);
            icon.classList.add(moonIcon);
            // In light mode, the button color should reflect the current text color
            darkModeToggle.style.color = getComputedStyle(body).getPropertyValue('--text-dark-color');
        }
    }

    darkModeToggle.addEventListener('click', () => {
        // Toggle the class and get the new state
        const isDarkMode = body.classList.toggle('dark-mode');
        // Save the new state to localStorage
        localStorage.setItem('darkMode', isDarkMode);
        // Apply the theme changes (icon and color)
        applyTheme();
    });

    // Apply the saved theme when the page first loads
    applyTheme();
    init();
});
