/**
 * META LOGIC - GLOBAL COMMAND CENTER
 * Master Script v2.0
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. ساعة النظام العالمية (GMT Clock) ---
    function updateClock() {
        const now = new Date();
        const hours = String(now.getUTCHours()).padStart(2, '0');
        const minutes = String(now.getUTCMinutes()).padStart(2, '0');
        const seconds = String(now.getUTCSeconds()).padStart(2, '0');
        const clockElement = document.getElementById('gmt-clock');
        if (clockElement) clockElement.textContent = `${hours}:${minutes}:${seconds} GMT`;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // --- 2. محاكي الأرقام في الصفحة الرئيسية (index.html) ---
    let userCount = 3071452100;
    let revenue = 39120.5;

    function simulateLiveStats() {
        // تحديث عدد المستخدمين
        const userEl = document.getElementById('user-counter');
        if (userEl) {
            userCount += Math.floor(Math.random() * 50) + 5;
            userEl.innerText = userCount.toLocaleString();
        }

        // تحديث الأرباح
        const revEl = document.getElementById('money-counter');
        if (revEl) {
            revenue += Math.random() * 0.8;
            revEl.innerText = revenue.toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 1});
        }
    }
    setInterval(simulateLiveStats, 2000);

    // --- 3. محرك صفحة الأمن السيبراني (security.html) ---
    const attackTable = document.getElementById('attack-logs');
    if (attackTable) {
        const attackTypes = ['DDoS Attack', 'SQL Injection', 'Brute Force', 'Malware Script', 'Zero Day Exploit'];
        const targets = ['Main Cluster', 'User Vault', 'Ad API', 'Edge Node 04', 'Llama Core'];

        setInterval(() => {
            const ip = `${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}`;
            const type = attackTypes[Math.floor(Math.random()*attackTypes.length)];
            const target = targets[Math.floor(Math.random()*targets.length)];

            const row = document.createElement('tr');
            row.className = "animate__animated animate__headShake";
            row.innerHTML = `
                <td class="text-danger font-monospace" style="letter-spacing: 1px;">${ip}</td>
                <td class="text-warning">${type}</td>
                <td class="text-info">${target}</td>
                <td><span class="badge bg-success shadow-sm"><i class="fas fa-check-circle me-1"></i> Blocked</span></td>
            `;
            attackTable.prepend(row);
            if (attackTable.rows.length > 8) attackTable.deleteRow(8);
        }, 2500);
    }

    // --- 4. محرك صفحة الذكاء الاصطناعي (ai-lab.html) ---
    const aiNodes = document.querySelectorAll('.server-node');
    if (aiNodes.length > 0) {
        setInterval(() => {
            aiNodes.forEach(node => {
                const rand = Math.random();
                if (rand > 0.8) node.className = 'server-node node-busy';
                else if (rand > 0.2) node.className = 'server-node node-online';
                else node.className = 'server-node';
            });
        }, 800);
    }

    // --- 5. الرسم البياني (Charts) ---
    // رسم الدونات (Platforms Split)
    const platCtx = document.getElementById('platformPieChart');
    if (platCtx) {
        new Chart(platCtx, {
            type: 'doughnut',
            data: {
                labels: ['FB', 'IG', 'WA', 'Threads'],
                datasets: [{
                    data: [62, 22, 12, 4],
                    backgroundColor: ['#0866FF', '#E4405F', '#25D366', '#000000'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '80%',
                plugins: { legend: { position: 'bottom', labels: { color: '#94a3b8' } } }
            }
        });
    }

    // رسم التعلم (AI Learning)
    const aiChartEl = document.getElementById('aiLearningChart');
    if (aiChartEl) {
        new Chart(aiChartEl.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
                datasets: [{
                    data: [40, 55, 45, 90, 85, 120],
                    borderColor: '#00f2ff',
                    backgroundColor: 'rgba(0, 242, 255, 0.1)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { display: false }, x: { grid: { display: false }, ticks: { color: '#94a3b8' } } }
            }
        });
    }

    // --- 6. تفاعلات القائمة (UI Interactions) ---
    const menuToggle = document.getElementById('menu-toggle');
    const wrapper = document.getElementById('wrapper');
    if (menuToggle && wrapper) {
        menuToggle.addEventListener('click', () => {
            wrapper.classList.toggle('toggled');
        });
    }

    // زرار الـ Dark Mode التخيلي
    const darkBtn = document.getElementById('dark-toggle');
    if (darkBtn) {
        darkBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            const icon = darkBtn.querySelector('i');
            icon.classList.toggle('fa-moon');
            icon.classList.toggle('fa-sun');
        });
    }

    // محاكي الـ Transaction Feed (في الـ Index)
    const feed = document.querySelector('.transaction-feed');
    if (feed) {
        const locations = ['Cairo, EG', 'London, UK', 'Tokyo, JP', 'New York, US', 'Berlin, DE'];
        setInterval(() => {
            const log = document.createElement('div');
            log.className = 'log-entry d-flex align-items-center mb-3 p-2 rounded border-start border-primary border-3 animate__animated animate__fadeInRight';
            log.innerHTML = `
                <div class="log-icon bg-primary-light text-primary me-3"><i class="fas fa-sync-alt fa-spin"></i></div>
                <div>
                    <small class="d-block text-muted">${locations[Math.floor(Math.random()*locations.length)]} | Now</small>
                    <p class="mb-0 fw-bold" style="font-size: 0.8rem;">Data Sync Completed</p>
                </div>
            `;
            feed.prepend(log);
            if (feed.children.length > 6) feed.removeChild(feed.lastChild);
        }, 4000);
    }
});
// ======================================================
// 9. محاكي الأسهم (Financials Page)
// ======================================================
const stockCtx = document.getElementById('stockChart');
if (stockCtx) {
    new Chart(stockCtx, {
        type: 'line',
        data: {
            labels: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm'],
            datasets: [{
                label: 'Meta Stock Price',
                data: [470, 475, 472, 480, 485, 482, 488],
                borderColor: '#00ff88',
                backgroundColor: 'rgba(0, 255, 136, 0.1)',
                fill: true,
                tension: 0.3
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });

    // تحديث سعر السهم لايف
    setInterval(() => {
        const priceEl = document.getElementById('stock-price');
        if (priceEl) {
            let currentPrice = parseFloat(priceEl.innerText.replace('$', ''));
            currentPrice += (Math.random() * 0.5) - 0.2;
            priceEl.innerText = `$${currentPrice.toFixed(2)}`;
        }
    }, 2000);
}

// ======================================================
// 10. محاكي الجمهور (Audience Page)
// ======================================================
const ageCtx = document.getElementById('ageChart');
if (ageCtx) {
    new Chart(ageCtx, {
        type: 'bar',
        data: {
            labels: ['13-17', '18-24', '25-34', '35-44', '45+'],
            datasets: [{
                label: 'Active Users (Millions)',
                data: [400, 850, 1200, 700, 500],
                backgroundColor: '#0866FF'
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });
}

// محاكي الهاشتاجات المتغيرة
const topicsContainer = document.getElementById('trending-topics');
if (topicsContainer) {
    const tags = ['#AI_Revolution', '#ZuckMind', '#VR_Future', '#Web3', '#MetaLogic', '#CodingLife'];
    setInterval(() => {
        const tag = document.createElement('span');
        tag.className = 'badge rounded-pill bg-primary p-2 animate__animated animate__bounceIn';
        tag.innerText = tags[Math.floor(Math.random() * tags.length)];
        topicsContainer.prepend(tag);
        if (topicsContainer.children.length > 15) topicsContainer.removeChild(topicsContainer.lastChild);
    }, 3000);
}
// ======================================================
// 11. محاكي سجلات النظام (System Logs)
// ======================================================
const terminal = document.getElementById('terminal-output');
if (terminal) {
    const logCommands = [
        'GET /api/v4/user_data HTTP/1.1 200 OK',
        'POST /security/firewall/update_rules - Access Granted',
        'Llama-4 Core: Neural synapse re-calculation complete.',
        'CRITICAL: Peak traffic detected in Asia-Pacific node.',
        'DB_REPLICA: Synchronized with California HQ.',
        'ENCRYPTION: AES-512 re-shuffling initiated.'
    ];
    setInterval(() => {
        const cmd = logCommands[Math.floor(Math.random() * logCommands.length)];
        const p = document.createElement('p');
        p.textContent = `> [${new Date().toLocaleTimeString()}] ${cmd}`;
        terminal.appendChild(p);
        terminal.scrollTop = terminal.scrollHeight; // سكرول تلقائي لأسفل
        if (terminal.children.length > 25) terminal.removeChild(terminal.firstChild);
    }, 1500);
}

// ======================================================
// 12. محاكي رادار الـ Reels
// ======================================================
const veloCtx = document.getElementById('velocityChart');
if (veloCtx) {
    new Chart(veloCtx, {
        type: 'radar',
        data: {
            labels: ['Entertainment', 'News', 'Tech', 'Music', 'Fashion'],
            datasets: [{
                label: 'Engagement Score',
                data: [90, 45, 75, 80, 60],
                backgroundColor: 'rgba(255, 75, 75, 0.2)',
                borderColor: '#ff4b4b'
            }]
        },
        options: {
            plugins: { legend: { display: false } },
            scales: { r: { grid: { color: '#334155' }, angleLines: { color: '#334155' } } }
        }
    });
}
// ======================================================
// 13. محاكي تدفق الواتساب (WhatsApp Traffic Stream)
// ======================================================
function simulateWhatsAppFlow() {
    const waCounter = document.getElementById('wa-flow-counter');
    if (waCounter) {
        let count = parseInt(waCounter.innerText.replace(/,/g, '')) || 500000;
        setInterval(() => {
            count += Math.floor(Math.random() * 150);
            waCounter.innerText = count.toLocaleString();
        }, 1000);
    }
}
simulateWhatsAppFlow();

// ======================================================
// 14. رادار الأقمار الصناعية (Satellite Tracker Logic)
// ======================================================
function updateSatelliteStatus() {
    const statusText = document.getElementById('sat-status');
    if (statusText) {
        const statuses = ['Tracking...', 'Syncing...', 'Signal Strong', 'Recalibrating'];
        setInterval(() => {
            statusText.innerText = statuses[Math.floor(Math.random() * statuses.length)];
            statusText.style.color = Math.random() > 0.1 ? '#00f2ff' : '#ff4b4b';
        }, 3000);
    }
}
updateSatelliteStatus();