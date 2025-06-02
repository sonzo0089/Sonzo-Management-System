// Current user and active page tracking
let currentUser = null;
let activePage = 'dashboard';

// Page navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    // Show selected page
    document.getElementById(pageId).style.display = 'block';
    activePage = pageId;
}

// Login function
function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const loginError = document.getElementById('loginError');

    if (!email || !password) {
        loginError.textContent = 'Please fill in all fields';
        loginError.style.display = 'block';
        return;
    }

    // Simulate successful login
    currentUser = { email: email };
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('mainSystem').style.display = 'block';
    showPage('dashboard');
}

// Logout function
function logout() {
    currentUser = null;
    document.getElementById('loginPage').style.display = 'block';
    document.getElementById('mainSystem').style.display = 'none';
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
}

// Inventory Management Functions
function showAddInventoryForm() {
    document.getElementById('addInventoryForm').style.display = 'block';
}

function addInventoryItem() {
    const name = document.getElementById('itemName').value;
    const quantity = document.getElementById('itemQuantity').value;
    const price = document.getElementById('itemPrice').value;

    if (!name || !quantity || !price) {
        alert('Please fill in all fields');
        return;
    }

    // Add item to table (in real app, this would save to a database)
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${name}</td>
        <td>${quantity}</td>
        <td>$${parseFloat(price).toFixed(2)}</td>
        <td><button class="button" onclick="editItem(${Date.now()})">Edit</button></td>
    `;
    document.getElementById('inventoryList').appendChild(tr);

    // Clear form
    document.getElementById('itemName').value = '';
    document.getElementById('itemQuantity').value = '';
    document.getElementById('itemPrice').value = '';
    document.getElementById('addInventoryForm').style.display = 'none';
}

// Customer Management Functions
function showAddCustomerForm() {
    document.getElementById('addCustomerForm').style.display = 'block';
}

function addCustomer() {
    const name = document.getElementById('customerName').value;
    const email = document.getElementById('customerEmail').value;
    const phone = document.getElementById('customerPhone').value;

    if (!name || !email || !phone) {
        alert('Please fill in all fields');
        return;
    }

    // Add customer to table
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td><button class="button" onclick="editCustomer(${Date.now()})">Edit</button></td>
    `;
    document.getElementById('customerList').appendChild(tr);

    // Clear form
    document.getElementById('customerName').value = '';
    document.getElementById('customerEmail').value = '';
    document.getElementById('customerPhone').value = '';
    document.getElementById('addCustomerForm').style.display = 'none';
}

// Order Management Functions
function showAddOrderForm() {
    document.getElementById('addOrderForm').style.display = 'block';
}

function createOrder() {
    const customer = document.getElementById('orderCustomer').value;
    const items = document.getElementById('orderItems').value;

    if (!customer || !items) {
        alert('Please select customer and items');
        return;
    }

    // Add order to table
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>#${Date.now().toString().slice(-3)}</td>
        <td>${document.getElementById('orderCustomer').options[document.getElementById('orderCustomer').selectedIndex].text}</td>
        <td>$${(Math.random() * 100).toFixed(2)}</td>
        <td>Pending</td>
        <td><button class="button" onclick="viewOrder(${Date.now()})">View</button></td>
    `;
    document.getElementById('orderList').appendChild(tr);

    // Clear form
    document.getElementById('orderCustomer').value = '';
    document.getElementById('orderItems').value = '';
    document.getElementById('addOrderForm').style.display = 'none';
}

// Report Generation
function generateReport() {
    const reportType = document.getElementById('reportType').value;
    const dateRange = document.getElementById('reportDateRange').value;

    if (!reportType) {
        alert('Please select a report type');
        return;
    }

    // Simulate report generation
    document.getElementById('reportContent').innerHTML = `
        <h3>${reportType.charAt(0).toUpperCase() + reportType.slice(1)} Report</h3>
        <p>Report generated for the last ${dateRange} days</p>
        <div style="width: 100%; height: 200px; background-color: #f5f5f5; display: flex; align-items: center; justify-content: center;">
            Chart Placeholder
        </div>
    `;
}

// Initialize the dashboard on load
showPage('dashboard');