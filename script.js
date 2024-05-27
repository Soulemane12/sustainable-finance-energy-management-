document.addEventListener('DOMContentLoaded', () => {
    // Energy Consumption Dashboard
    const energyChart = document.getElementById('energy-chart');
    const energyTips = document.getElementById('energy-tips');
    
    // Simulated energy data
    const energyData = [120, 130, 110, 140, 150, 170, 160];
    
    // Function to display energy chart (placeholder for actual chart library integration)
    function displayEnergyChart(data) {
        energyChart.innerHTML = `<p>Energy Usage: ${data.join(', ')} kWh</p>`;
    }
    
    // Function to display energy saving tips
    function displayEnergyTips() {
        energyTips.innerHTML = `
            <h3>Energy Saving Tips</h3>
            <ul>
                <li>Turn off lights when not in use.</li>
                <li>Use energy-efficient appliances.</li>
                <li>Install smart thermostats.</li>
            </ul>
        `;
    }
    
    displayEnergyChart(energyData);
    displayEnergyTips();

    // Sustainable Spending Tracker
    const spendingChart = document.getElementById('spending-chart');
    const spendingTips = document.getElementById('spending-tips');
    
    // Simulated spending data
    const spendingData = { ecoFriendly: 40, nonEcoFriendly: 60 };
    
    // Function to display spending chart (placeholder for actual chart library integration)
    function displaySpendingChart(data) {
        spendingChart.innerHTML = `<p>Eco-friendly: ${data.ecoFriendly}%, Non Eco-friendly: ${data.nonEcoFriendly}%</p>`;
    }
    
    // Function to display spending tips
    function displaySpendingTips() {
        spendingTips.innerHTML = `
            <h3>Sustainable Spending Tips</h3>
            <ul>
                <li>Buy from eco-friendly brands.</li>
                <li>Reduce single-use plastics.</li>
                <li>Support local businesses.</li>
            </ul>
        `;
    }
    
    displaySpendingChart(spendingData);
    displaySpendingTips();

    // Educational Platform
    const courses = document.getElementById('courses');
    
    // Simulated courses data
    const courseList = [
        { title: 'Sustainable Living 101', description: 'Introduction to sustainable living practices.' },
        { title: 'Climate Tech Innovations', description: 'Learn about the latest in Climate Tech.' },
        { title: 'Green Investments', description: 'How to invest in sustainable projects.' }
    ];
    
    // Function to display courses
    function displayCourses(courses) {
        courses.innerHTML = '<h3>Courses</h3>';
        courses.innerHTML += courses.map(course => `
            <div>
                <h4>${course.title}</h4>
                <p>${course.description}</p>
            </div>
        `).join('');
    }
    
    displayCourses(courseList);

    // Gamified Rewards
    const rewards = document.getElementById('rewards');
    
    // Simulated rewards data
    const rewardList = [
        { action: 'Used public transport', points: 10 },
        { action: 'Recycled waste', points: 5 },
        { action: 'Purchased eco-friendly product', points: 15 }
    ];
    
    // Function to display rewards
    function displayRewards(rewards) {
        rewards.innerHTML = '<h3>Rewards</h3>';
        rewards.innerHTML += rewards.map(reward => `
            <div>
                <p>${reward.action}: ${reward.points} points</p>
            </div>
        `).join('');
    }
    
    displayRewards(rewardList);

    // Green Investment Portal
    const investmentTools = document.getElementById('investment-tools');
    
    // Simulated investment data
    const investments = [
        { project: 'Solar Farm', impact: 'High', returns: 'Moderate' },
        { project: 'Wind Turbine', impact: 'High', returns: 'High' },
        { project: 'Green Building', impact: 'Moderate', returns: 'High' }
    ];
    
    // Function to display investment tools
    function displayInvestments(investments) {
        investmentTools.innerHTML = '<h3>Investment Opportunities</h3>';
        investmentTools.innerHTML += investments.map(investment => `
            <div>
                <h4>${investment.project}</h4>
                <p>Environmental Impact: ${investment.impact}</p>
                <p>Expected Returns: ${investment.returns}</p>
            </div>
        `).join('');
    }
    
    displayInvestments(investments);

    // Eco-friendly Loan Products
    const loanCalculator = document.getElementById('loan-calculator');
    
    // Function to calculate and display loan information
    function displayLoanCalculator() {
        loanCalculator.innerHTML = `
            <h3>Loan Calculator</h3>
            <label for="amount">Loan Amount:</label>
            <input type="number" id="amount" name="amount" placeholder="Enter amount" />
            <label for="rate">Interest Rate:</label>
            <input type="number" id="rate" name="rate" placeholder="Enter rate" />
            <label for="years">Term (years):</label>
            <input type="number" id="years" name="years" placeholder="Enter term" />
            <button onclick="calculateLoan()">Calculate</button>
            <div id="loan-result"></div>
        `;
    }
    
    // Function to perform loan calculation
    window.calculateLoan = function() {
        const amount = document.getElementById('amount').value;
        const rate = document.getElementById('rate').value;
        const years = document.getElementById('years').value;
        const interest = (amount * (rate * 0.01)) / years;
        const payment = ((amount / (years * 12)) + interest).toFixed(2);
        document.getElementById('loan-result').innerHTML = `<p>Monthly Payment: $${payment}</p>`;
    }
    
    displayLoanCalculator();
});
