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
    const syllabusLinks = {
        'CSE': 'https://www.gitam.edu/sites/default/files/syllabus/MTech-CSE-2023-24_28-10-24_1.pdf',
        'DS': 'https://www.gitam.edu/sites/default/files/syllabus/MTech-CSE-DS-2023-24_28-10-24_3.pdf',
        'VLSI': 'https://www.gitam.edu/sites/default/files/syllabus/M.Tech-VLSI-Design-2024-25_06-12-24_0.pdf'
    };
    
    let subjectData = {};
    let currentUserTimetable = {};
    let courseDetails = {};
    let currentUser = {};

    function init() {
        const currentUserRegdNo = localStorage.getItem('currentUserRegdNo');
        if (currentUserRegdNo) {
            loadDashboardForUser(currentUserRegdNo);
        } else {
            document.getElementById('login-page').style.display = 'flex';
            document.getElementById('dashboard-page').style.display = 'none';
        }
    }
    // LOGIN PAGE: Live regd number validation
    const regdInput = document.getElementById('regdNo-input');
    const passwordInput = document.getElementById('password-input');
    passwordInput.disabled = true;

    regdInput.addEventListener('input', function() {
        const regdNo = regdInput.value.trim();
        if (regdNo.length === 10) {
            const userExists = userDatabase.find(u => u.regdNo === regdNo);
            if (!userExists) {
                window.location.href = "error.html";
            } else {
                passwordInput.disabled = false;
                passwordInput.focus();
            }
        } else {
            passwordInput.value = "";
            passwordInput.disabled = true;
        }
    });

    document.getElementById('login-form').addEventListener('submit', handleLogin);

    function handleLogin(event) {
        event.preventDefault();
        const regdNo = regdInput.value.trim();
        const password = passwordInput.value.trim();
        const correctPassword = regdNo + "@987";
        const userExists = userDatabase.find(u => u.regdNo === regdNo);

        if (userExists && password === correctPassword) {
            localStorage.setItem('currentUserRegdNo', regdNo);
            window.location.reload();
        } else {
            alert("Invalid Password.");
        }
    }
    function handleLogin(event) {
        event.preventDefault();
        const regdNo = document.getElementById('regdNo-input').value.trim();
        const password = document.getElementById('password-input').value.trim();
        const correctPassword = regdNo + "@987";
        const userExists = userDatabase.find(u => u.regdNo === regdNo);

        if (userExists && password === correctPassword) {
            localStorage.setItem('currentUserRegdNo', regdNo);
            window.location.reload();
        } else {
            alert('Invalid Registration Number or Password.');
        }
    }

    window.logout = function() {
        localStorage.removeItem('currentUserRegdNo');
        window.location.reload();
    }
    
    function loadDashboardForUser(regdNo) {
        currentUser = userDatabase.find(u => u.regdNo === regdNo);
        if (!currentUser) { logout(); return; }
        
        const branch = currentUser.branch;
        currentUserTimetable = timetablesByBranch[branch];
        courseDetails = courseDetailsByBranch[branch];
        
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('dashboard-page').style.display = 'block';

        document.getElementById('sidebar-profile-name').innerText = currentUser.name;
        document.getElementById('sidebar-profile-id').innerText = `(${currentUser.regdNo} - ${branch})`;
        const profilePic = document.getElementById('profile-pic');
        profilePic.style.display = 'block';
        profilePic.src = `https://doeresults.gitam.edu/photo/img.aspx?id=${currentUser.regdNo}`;
        profilePic.onerror = () => { profilePic.style.display = 'none'; };

        fetchAndDisplayIP();
        
        renderAttendanceView();
        renderUpdateAttendanceView();
        renderAttendanceReportView();
        renderPasteAttendanceView();
        renderGradeEstimator();
        renderFullTimetable();
        renderSyllabusView();
        
        showView('attendance-view', document.querySelector('.sidebar-nav a'));
        
        recalculateDailyAttendance();
        loadData();
    }
    
    function getUserDataKey(type) {
        const regdNo = localStorage.getItem('currentUserRegdNo');
        return `${type}Data_${regdNo}`;
    }

    function loadData() {
        const attendanceData = JSON.parse(localStorage.getItem(getUserDataKey('attendance')) || '{}');
        const startDate = localStorage.getItem(getUserDataKey('startDate'));
        subjectData = attendanceData;
        
        const startDateInput = document.getElementById('start-date');
        if(startDateInput && startDate) {
            startDateInput.value = startDate;
        }

        renderDashboard();
    }

    function saveData(type) {
        if (type === 'attendance') {
            localStorage.setItem(getUserDataKey('attendance'), JSON.stringify(subjectData));
            const startDate = document.getElementById('start-date')?.value;
            if(startDate) {
                localStorage.setItem(getUserDataKey('startDate'), startDate);
            }
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
                    <button onclick="startTracking()" class="card-btn" style="background-color: var(--safe-color); max-width: 200px;">Recalculate Attendance</button>
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
                <div id="reset-card" class="card">
                    <h2>Reset Data</h2>
                    <p style="color: var(--text-light-color); margin: 10px 0;">Clear all your saved attendance data to start fresh.</p>
                    <button onclick="resetAttendance()" class="card-btn" style="background-color: var(--danger-color);"><i class="ri-delete-bin-line" style="margin-right: 8px;"></i> Reset Attendance</button>
                </div>
            </div>
            <div id="subject-dashboard" style="margin-top: 30px;">
                <h2>Individual Subjects</h2>
                <div id="dashboard" class="dashboard-grid"></div>
            </div>`;
        renderTodaysSchedule();
    }

    function renderUpdateAttendanceView() {
        const view = document.getElementById('update-attendance-view');
        let formHTML = `<h2>Update Attendance Manually</h2>
            <p style="color:var(--text-light-color);margin-bottom:20px;">Use this page to correct any discrepancies in your attendance.</p>
            <div class="card">
                <form id="manual-attendance-form">
                <div style="display: grid; grid-template-columns: 1fr 80px 80px; align-items: center; gap: 15px; padding: 10px 0; font-weight: 600; border-bottom: 1px solid var(--border-color);">
                    <span>Subject Name</span>
                    <span style="text-align:center;">Present</span>
                    <span style="text-align:center;">Total Held</span>
                </div>`;

        let totalAttended = 0;
        let totalHeld = 0;
        const subjects = getUniqueSubjects();
        subjects.forEach(subject => {
            const data = subjectData[subject] || { attended: 0, bunked: 0 };
            const held = data.attended + data.bunked;
            totalAttended += data.attended;
            totalHeld += held;
            formHTML += `
                <div style="display: grid; grid-template-columns: 1fr 80px 80px; align-items: center; gap: 15px; padding: 10px 0; border-top: 1px solid var(--border-color);">
                    <label style="font-weight: 500;">${subject}</label>
                    <input type="number" value="${data.attended}" id="attended-${subject.replace(/[\s&/]/g, '')}" style="padding: 8px; border-radius: 5px; border: 1px solid var(--border-color); text-align: center;">
                    <input type="number" value="${held}" id="held-${subject.replace(/[\s&/]/g, '')}" style="padding: 8px; border-radius: 5px; border: 1px solid var(--border-color); text-align: center;">
                </div>`;
        });

        formHTML += `
                <div style="display: grid; grid-template-columns: 1fr 80px 80px; align-items: center; gap: 15px; padding: 10px 0; border-top: 2px solid var(--text-dark-color); font-weight: 700; margin-top: 10px;">
                    <span>TOTALS</span>
                    <span style="text-align:center;">${totalAttended}</span>
                    <span style="text-align:center;">${totalHeld}</span>
                </div>
                <div style="display: flex; gap: 10px; margin-top: 20px;">
                    <button type="button" id="all-present-btn" class="card-btn" style="background-color: var(--primary-color);">
                        <i class="ri-check-double-line" style="margin-right: 8px;"></i>All Present
                    </button>
                    <button type="submit" class="card-btn" style="background-color: var(--safe-color);">
                        <i class="ri-save-line" style="margin-right: 8px;"></i>Save Manual Update
                    </button>
                </div>
            </form>
        </div>`;
        
        view.innerHTML = formHTML;
        document.getElementById('manual-attendance-form').addEventListener('submit', handleUpdateAttendance);
        document.getElementById('all-present-btn').addEventListener('click', handleAllPresent);
    }
    
    function handleAllPresent() {
        const subjects = getUniqueSubjects();
        subjects.forEach(subject => {
            const cleanSubName = subject.replace(/[\s&/]/g, '');
            const heldInput = document.getElementById(`held-${cleanSubName}`);
            const attendedInput = document.getElementById(`attended-${cleanSubName}`);
            if (heldInput && attendedInput) {
                attendedInput.value = heldInput.value;
            }
        });
    }

    function renderAttendanceReportView() {
        const view = document.getElementById('attendance-report-view');
        let tableHTML = `<h2>Attendance Report</h2>
            <div class="card">
                <table class="attendance-report-table">
                    <thead>
                        <tr>
                            <th>Subject Name</th>
                            <th>Attended</th>
                            <th>Bunked</th>
                            <th>Total Held</th>
                            <th>Percentage</th>
                        </tr>
                    </thead>
                    <tbody>`;
        
        const subjects = getUniqueSubjects();
        subjects.forEach(subject => {
            const data = subjectData[subject] || { attended: 0, bunked: 0 };
            const held = data.attended + data.bunked;
            const percentage = held > 0 ? ((data.attended / held) * 100).toFixed(1) : "100.0";
            tableHTML += `
                <tr>
                    <td>${subject}</td>
                    <td>${data.attended}</td>
                    <td>${data.bunked}</td>
                    <td>${held}</td>
                    <td>${percentage}%</td>
                </tr>`;
        });

        tableHTML += '</tbody></table></div>';
        view.innerHTML = tableHTML;
    }
    
    function renderPasteAttendanceView() {
        const view = document.getElementById('paste-attendance-view');
        view.innerHTML = `
            <h2>Paste Attendance Data</h2>
            <p style="color: var(--text-light-color); margin-bottom: 20px;">
                Go to the G-Learn portal, view your attendance "By subject", copy the entire table, and paste it into the box below.
            </p>
            <div class="card">
                <textarea id="attendance-paste-area" style="width: 100%; height: 200px; padding: 10px; border-radius: 8px; border: 1px solid var(--border-color); font-family: monospace; background-color: var(--background-color); color: var(--text-dark-color);"></textarea>
                <button onclick="handlePasteAndUpdate()" class="card-btn" style="background-color: var(--primary-color); margin-top: 15px;">
                    <i class="ri-upload-cloud-2-line" style="margin-right: 8px;"></i> Process Pasted Data
                </button>
            </div>
        `;
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
            cardContent += `<p style="text-align:center;">${classesToday.join(' | ')}</p>`;
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
                inputsHTML += `<div class="input-group"><label>Sessional I (30)</label><input oninput="if(parseInt(this.value)>30) this.value=30; calculateSubjectGrade('${subjectName}')" type="number" min="0" max="30" id="s1_${cleanSubName}"></div><div class="input-group"><label>Sessional II (45)</label><input oninput="if(parseInt(this.value)>45) this.value=45; calculateSubjectGrade('${subjectName}')" type="number" min="0" max="45" id="s2_${cleanSubName}"></div><div class="input-group"><label>Learning Eng. (25)</label><input oninput="if(parseInt(this.value)>25) this.value=25; calculateSubjectGrade('${subjectName}')" type="number" min="0" max="25" id="le_${cleanSubName}"></div>`;
            } else if (details.type === 'Lab' || subjectName.includes('Project') || subjectName.includes('Internship')) {
                inputsHTML += `<div class="input-group"><label>Total Marks (100)</label><input oninput="if(parseInt(this.value)>100) this.value=100; calculateSubjectGrade('${subjectName}')" type="number" min="0" max="100" id="total_marks_${cleanSubName}"></div>`;
            } else if (details.type === 'Integrated') { // Re-using Theory structure, assuming combined scores are calculated on a different page or with a more complex UI
                inputsHTML += `<div class="input-group"><label>Sessional I (30)</label><input oninput="if(parseInt(this.value)>30) this.value=30; calculateSubjectGrade('${subjectName}')" type="number" min="0" max="30" id="s1_${cleanSubName}"></div><div class="input-group"><label>Sessional II (45)</label><input oninput="if(parseInt(this.value)>45) this.value=45; calculateSubjectGrade('${subjectName}')" type="number" min="0" max="45" id="s2_${cleanSubName}"></div><div class="input-group"><label>Learning Eng. (25)</label><input oninput="if(parseInt(this.value)>25) this.value=25; calculateSubjectGrade('${subjectName}')" type="number" min="0" max="25" id="le_${cleanSubName}"></div><div class="input-group"><label>Lab Internal (100)</label><input oninput="if(parseInt(this.value)>100) this.value=100; calculateSubjectGrade('${subjectName}')" type="number" min="0" max="100" id="lab_internal_${cleanSubName}"></div>`;
            }
            const card = document.createElement('div');
            card.className = 'card estimator-card';
            card.innerHTML = `<h3>${subjectName} (${details.credits} Cr)</h3><div class="input-grid">${inputsHTML}</div><div class="result-area" style="text-align:center;margin-top:15px;">Grade: <span id="result_${cleanSubName}" style="font-weight:bold;font-size:1.4em;">-</span><div id="validation_${cleanSubName}" style="font-size:0.8em; color:var(--danger-color); height: 1em; margin-top: 5px;"></div></div>`;
            grid.appendChild(card);
        });
    }

    function renderSyllabusView() {
        const view = document.getElementById('syllabus-view');
        const syllabusLink = syllabusLinks[currentUser.branch];
        if (syllabusLink) {
            view.innerHTML = `
                <h2>Syllabus for ${currentUser.branch}</h2>
                <div class="card" style="text-align: center;">
                    <p style="margin-bottom: 20px; color: var(--text-light-color);">The official syllabus is hosted on the GITAM website. Click the button below to open it in a new tab.</p>
                    <a href="${syllabusLink}" target="_blank" rel="noopener noreferrer" class="card-btn" style="background-color: var(--primary-color); max-width: 300px; display: inline-flex; text-decoration: none;">
                        <i class="ri-external-link-line" style="margin-right: 8px;"></i>
                        Open Syllabus in New Tab
                    </a>
                </div>`;
        } else {
            view.innerHTML = `<h2>Syllabus</h2><div class="card"><p>Syllabus for ${currentUser.branch} is not available.</p></div>`;
        }
    }

    // New function to convert marks to a grade point based on Annexure II (Absolute Grading for Sessionals)
    function getSessionalGradePoint(marks, totalMarks) {
        const percentage = (marks / totalMarks) * 100;
        if (marks < totalMarks / 3) return { grade: 'I', gradePoint: 0 }; // 'I' grade for < 1/3 marks
        if (percentage >= 90) return { grade: 'O', gradePoint: 10 };
        if (percentage >= 80) return { grade: 'A+', gradePoint: 9 };
        if (percentage >= 70) return { grade: 'A', gradePoint: 8 };
        if (percentage >= 60) return { grade: 'B+', gradePoint: 7 };
        if (percentage >= 50) return { grade: 'B', gradePoint: 6 };
        if (percentage >= 40) return { grade: 'C', gradePoint: 5 };
        if (percentage >= 33) return { grade: 'P', gradePoint: 4 }; // P grade for 33-39%
        return { grade: 'F', gradePoint: 0 };
    }

    // New function to convert weighted grade point to final grade (Annexure IV)
    function getFinalGradeFromWGP(wgp) {
        if (wgp > 9) return { grade: 'O', gradePoint: 10 };
        if (wgp > 8) return { grade: 'A+', gradePoint: 9 };
        if (wgp > 7) return { grade: 'A', gradePoint: 8 };
        if (wgp > 6) return { grade: 'B+', gradePoint: 7 };
        if (wgp > 5) return { grade: 'B', gradePoint: 6 };
        if (wgp > 4) return { grade: 'C', gradePoint: 5 };
        if (wgp >= 4 && wgp <= 4) return { grade: 'P', gradePoint: 4 }; // Exact match for P grade with 4 GP
        return { grade: 'F', gradePoint: 0 };
    }

    // UPDATED: Function to calculate subject grade based on new policy
    function calculateSubjectGrade(subjectName) {
        const details = courseDetails[subjectName];
        const cleanSubName = subjectName.replace(/[\s&/]/g, '');
        const validationDiv = document.getElementById(`validation_${cleanSubName}`);
        if(validationDiv) validationDiv.textContent = '';
        
        let gradeResult = { gradePoint: 0, credits: details.credits };

        if (details.type === 'Theory') {
            const s1Marks = parseInt(document.getElementById(`s1_${cleanSubName}`)?.value) || 0;
            const s2Marks = parseInt(document.getElementById(`s2_${cleanSubName}`)?.value) || 0;
            const leMarks = parseInt(document.getElementById(`le_${cleanSubName}`)?.value) || 0;
            
            // Check overall pass criteria for sessionals
            const sessionalTotal = s1Marks + s2Marks;
            if (sessionalTotal < 25) {
                gradeResult = { grade: 'F', gradePoint: 0 };
            } else {
                const s1GP_obj = getSessionalGradePoint(s1Marks, 30);
                const s2GP_obj = getSessionalGradePoint(s2Marks, 45);
                const leGP_obj = getSessionalGradePoint(leMarks, 25);
                
                // The 'I' grade is considered 4 GP at the end of the semester if criteria are met.
                const s1FinalGP = (s1GP_obj.grade === 'I') ? 4 : s1GP_obj.gradePoint;
                const s2FinalGP = (s2GP_obj.grade === 'I') ? 4 : s2GP_obj.gradePoint;
                const leFinalGP = leGP_obj.gradePoint;

                const weightedGradePoint = (s1FinalGP * 0.30) + (s2FinalGP * 0.45) + (leFinalGP * 0.25);
                
                gradeResult = getFinalGradeFromWGP(weightedGradePoint);
            }

            document.getElementById(`result_${cleanSubName}`).innerText = `${gradeResult.grade} (${(sessionalTotal).toFixed(0)})`;

        } else if (details.type === 'Lab' || subjectName.includes('Project') || subjectName.includes('Internship')) {
            const totalMarks = parseInt(document.getElementById(`total_marks_${cleanSubName}`)?.value) || 0;
            let grade = 'F', gradePoint = 0;
            if (totalMarks >= 50) { // Minimum 50% to pass for Lab/Project/Internship 
                if (totalMarks >= 90) { grade = 'O'; gradePoint = 10; }
                else if (totalMarks >= 80) { grade = 'A+'; gradePoint = 9; }
                else if (totalMarks >= 70) { grade = 'A'; gradePoint = 8; }
                else if (totalMarks >= 60) { grade = 'B+'; gradePoint = 7; }
                else if (totalMarks >= 50) { grade = 'B'; gradePoint = 6; }
            }
            document.getElementById(`result_${cleanSubName}`).innerText = `${grade} (${totalMarks})`;
            gradeResult = { gradePoint: gradePoint, credits: details.credits };

        } else if (details.type === 'Integrated') { // Combined Theory & Practical
            const s1Marks = parseInt(document.getElementById(`s1_${cleanSubName}`)?.value) || 0;
            const s2Marks = parseInt(document.getElementById(`s2_${cleanSubName}`)?.value) || 0;
            const leMarks = parseInt(document.getElementById(`le_${cleanSubName}`)?.value) || 0;
            const labMarks = parseInt(document.getElementById(`lab_internal_${cleanSubName}`)?.value) || 0;
            
            const theorySessionalTotal = s1Marks + s2Marks;
            let theoryPass = theorySessionalTotal >= 25; // Theory pass criteria
            
            const s1GP_obj = getSessionalGradePoint(s1Marks, 30);
            const s2GP_obj = getSessionalGradePoint(s2Marks, 45);
            const leGP_obj = getSessionalGradePoint(leMarks, 25);
            
            const s1FinalGP = (s1GP_obj.grade === 'I') ? 4 : s1GP_obj.gradePoint;
            const s2FinalGP = (s2GP_obj.grade === 'I') ? 4 : s2GP_obj.gradePoint;
            const leFinalGP = leGP_obj.gradePoint;

            const weightedTheoryGP = (s1FinalGP * 0.30) + (s2FinalGP * 0.45) + (leFinalGP * 0.25);
            const theoryGradeResult = getFinalGradeFromWGP(weightedTheoryGP);

            let labGrade = 'F', labGP = 0;
            if (labMarks >= 50) { // Labs require 50% to pass
                if (labMarks >= 90) { labGrade = 'O'; labGP = 10; }
                else if (labMarks >= 80) { labGrade = 'A+'; labGP = 9; }
                else if (labMarks >= 70) { labGrade = 'A'; labGP = 8; }
                else if (labMarks >= 60) { labGrade = 'B+'; labGP = 7; }
                else if (labMarks >= 50) { labGrade = 'B'; labGP = 6; }
            }
            
            // Student needs to secure a passing grade in both components
            if (theoryPass && theoryGradeResult.gradePoint > 0 && labGP > 0) {
                const finalWGP = (theoryGradeResult.gradePoint * 0.7) + (labGP * 0.3); // 70% theory, 30% practical
                gradeResult = getFinalGradeFromWGP(finalWGP);
                document.getElementById(`result_${cleanSubName}`).innerText = `${gradeResult.grade} (${finalWGP.toFixed(2)})`;
            } else {
                 if(validationDiv) {
                    if(!theoryPass) {
                        validationDiv.textContent = 'Failed: Combined Sessional marks must be at least 25.'; 
                    } else if(theoryGradeResult.gradePoint <= 0) {
                        validationDiv.textContent = 'Failed: Theory component grade is F.';
                    } else if(labGP <= 0) {
                        validationDiv.textContent = 'Failed: Lab component grade is F.';
                    }
                }
                document.getElementById(`result_${cleanSubName}`).innerText = `F (0.00)`;
                gradeResult = { gradePoint: 0, credits: details.credits };
            }
        }
        
        return gradeResult;
    }

    function calculateSGPA() {
        let totalCredits = 0, weightedGradePoints = 0;
        getUniqueSubjects().forEach(subjectName => {
            const details = courseDetails[subjectName];
            if (details && details.credits > 0) {
                const result = calculateSubjectGrade(subjectName);
                if (result.gradePoint > 0) {
                     totalCredits += result.credits;
                     weightedGradePoints += result.gradePoint * result.credits;
                }
            }
        });
        const sgpa = totalCredits > 0 ? (weightedGradePoints / totalCredits) : 0;
        document.getElementById('sgpa-result').innerText = `Estimated SGPA: ${sgpa.toFixed(2)}`;
    }

    function handleUpdateAttendance(event) {
        event.preventDefault();
        const subjects = getUniqueSubjects();
        subjects.forEach(subject => {
            const cleanSubName = subject.replace(/[\s&/]/g, '');
            const attended = parseInt(document.getElementById(`attended-${cleanSubName}`).value) || 0;
            const held = parseInt(document.getElementById(`held-${cleanSubName}`).value) || 0;
            if (subjectData[subject]) {
                subjectData[subject].attended = attended;
                subjectData[subject].bunked = held - attended;
            }
        });
        saveData('attendance');
        recalculateDailyAttendance();
        renderDashboard();
        renderAttendanceReportView();
        alert('Attendance updated successfully!');
        showView('attendance-view', document.querySelector('.sidebar-nav a'));
    }

    window.handlePasteAndUpdate = function() {
        const rawText = document.getElementById('attendance-paste-area').value;
        const knownSubjects = getUniqueSubjects();
        let updatedCount = 0;

        knownSubjects.forEach(subject => {
            const escapedSubject = subject.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(escapedSubject + '\\s*(\\d+)\\s*(\\d+)\\s*(\\d+)');
            const match = rawText.match(regex);

            if (match) {
                const present = parseInt(match[1]);
                const total = parseInt(match[2]);
                if (!isNaN(present) && !isNaN(total)) {
                    if (!subjectData[subject]) subjectData[subject] = { attended: 0, bunked: 0 };
                    subjectData[subject].attended = present;
                    subjectData[subject].bunked = total - present;
                    updatedCount++;
                }
            }
        });

        if (updatedCount > 0) {
            saveData('attendance');
            renderDashboard();
            renderAttendanceReportView();
            alert(`${updatedCount} subjects were updated successfully!`);
            showView('attendance-report-view', document.querySelector('[onclick*="attendance-report-view"]'));
        } else {
            alert("No matching subject data could be found in the pasted text. Please ensure you've copied the 'By subject' table from G-Learn.");
        }
    }

    function fetchAndDisplayIP() {
        const ipElement = document.getElementById('user-ip');
        if (!ipElement) return;
        ipElement.textContent = 'Fetching IP...';
        fetch("https://api.ipify.org?format=json")
            .then(response => response.json())
            .then(data => { ipElement.textContent = `IP: ${data.ip}`; })
            .catch(() => { ipElement.textContent = "IP not available"; });
    }

    function recalculateDailyAttendance() {
        const savedStartDate = localStorage.getItem(getUserDataKey('startDate'));
        if (!savedStartDate) return;

        const startDate = new Date(savedStartDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (startDate > today) return;

        const heldCounts = {};
        getUniqueSubjects().forEach(name => heldCounts[name] = 0);

        let currentDate = new Date(startDate);
        while (currentDate <= today) {
            (currentUserTimetable.simple[currentDate.getDay()] || []).forEach(subjectName => {
                if (heldCounts[subjectName] !== undefined) heldCounts[subjectName]++;
            });
            currentDate.setDate(currentDate.getDate() + 1);
        }

        const savedBunks = {};
        for (const subjectName of getUniqueSubjects()) {
            savedBunks[subjectName] = subjectData[subjectName]?.bunked || 0;
        }

        for (const subjectName of getUniqueSubjects()) {
            const bunks = savedBunks[subjectName];
            const totalHeld = heldCounts[subjectName] || 0;
            subjectData[subjectName] = {
                ...subjectData[subjectName],
                attended: totalHeld - bunks,
                bunked: bunks,
                totalInSem: totalHeld
            };
        }
        saveData('attendance');
        console.log("Attendance recalculated for today.");
    }

    window.resetAttendance = function() {
        if (confirm("Are you sure you want to reset all attendance data? This action cannot be undone.")) {
            localStorage.removeItem(getUserDataKey('attendance'));
            localStorage.removeItem(getUserDataKey('startDate'));
            
            window.location.reload();
        }
    }

    // --- Global Functions (attached to window for onclick) ---
    window.getUniqueSubjects = () => Array.from(new Set(Object.values(currentUserTimetable.simple || {}).flat()));
    window.showView = (viewId, element) => {
        if (viewId === 'attendance-report-view') renderAttendanceReportView();
        if (viewId === 'update-attendance-view') renderUpdateAttendanceView();
        document.querySelectorAll('.content-area.view').forEach(v => v.style.display = 'none');
        document.getElementById(viewId).style.display = 'block';
        
        document.querySelectorAll('.sidebar-nav a').forEach(a => a.classList.remove('active'));
        if (element) {
            element.classList.add('active');
        }
        
        if (document.getElementById('sidebar').classList.contains('open')) window.toggleMobileMenu();
    };
    window.toggleMobileMenu = () => {
        document.getElementById('sidebar').classList.toggle('open');
        document.getElementById('overlay').classList.toggle('open');
    };
    window.markBunked = (subjectName) => {
        if (!subjectData[subjectName]) subjectData[subjectName] = { attended: 0, bunked: 0 };
        subjectData[subjectName].bunked++;
        subjectData[subjectName].attended--;
        saveData('attendance');
        renderDashboard();
    };
    window.undoBunk = (subjectName) => {
        if (!subjectData[subjectName]) subjectData[subjectName] = { attended: 0, bunked: 0 };
        if (subjectData[subjectName].bunked > 0) {
            subjectData[subjectName].bunked--;
            subjectData[subjectName].attended++;
            saveData('attendance');
            renderDashboard();
        }
    };
    window.startTracking = () => {
        const startDateString = document.getElementById('start-date').value;
        if (!startDateString) { alert("Please select a Semester Start Date first."); return; }
        
        localStorage.setItem(getUserDataKey('startDate'), startDateString);
        
        Object.keys(subjectData).forEach(key => {
            if (subjectData[key]) {
                subjectData[key].bunked = 0;
            }
        });
        
        recalculateDailyAttendance();
        loadData();
        alert("Attendance has been recalculated from the new start date!");
    };
    window.simulateDayBunk = () => {
        const dayIndex = document.getElementById('day-to-bunk-select').value;
        const resultDiv = document.getElementById('simulation-result');
        const classesToday = currentUserTimetable.simple[dayIndex] || [];
        if (classesToday.length === 0) {
            resultDiv.innerHTML = `No classes to bunk on the selected day!`;
            return;
        }
        let totalAttended = 0, totalBunked = 0;
        Object.values(subjectData).forEach(data => {
            totalAttended += data.attended;
            totalBunked += data.bunked;
        });
        const newTotalHeld = (totalAttended + totalBunked) + classesToday.length;
        const newPercentage = newTotalHeld > 0 ? (totalAttended / newTotalHeld) * 100 : 100;
        resultDiv.innerHTML = `After bunking, your new overall percentage would be <strong>${newPercentage.toFixed(1)}%</strong>.`;
    };
    window.calculateSGPA = calculateSGPA;
    window.calculateSubjectGrade = calculateSubjectGrade;
    
    // --- Event Listeners and Initializer ---
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    
    const passwordToggleIcon = document.getElementById('password-toggle-icon');
    passwordToggleIcon.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('ri-eye-line');
        this.classList.toggle('ri-eye-off-line');
    });

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const moonIcon = 'ri-moon-line';
    const sunIcon = 'ri-sun-line';

    function applyTheme() {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        body.classList.toggle('dark-mode', isDarkMode);
        
        const icon = darkModeToggle.querySelector('i');
        if (icon) {
            if (isDarkMode) {
                icon.classList.remove(moonIcon);
                icon.classList.add(sunIcon);
                darkModeToggle.style.color = '#ffc107';
            } else {
                icon.classList.remove(sunIcon);
                icon.classList.add(moonIcon);
                darkModeToggle.style.color = getComputedStyle(body).getPropertyValue('--text-dark-color');
            }
        }
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            const isDarkMode = body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', String(isDarkMode));
            applyTheme();
        });
    }

    applyTheme();
    init();
});
