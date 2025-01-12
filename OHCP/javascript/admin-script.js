document.addEventListener('DOMContentLoaded', () => {
    loadUserData();
    loadContentData();
    loadUserActivityData();
    loadAnalyticsData();

    function loadUserData() {
        const userTableBody = document.getElementById('user-table-body');
        // Sample user data (this would typically come from a database/API)
        const users = [
            { username: 'john_doe', email: 'john@example.com', status: 'Active' },
            { username: 'jane_smith', email: 'jane@example.com', status: 'Inactive' },
        ];

        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.status}</td>
                <td>
                    <button class="toggle-status">Toggle Status</button>
                    <button class="delete-user">Delete</button>
                </td>
            `;
            userTableBody.appendChild(row);
        });
    }

    function loadContentData() {
        const contentTableBody = document.getElementById('content-table-body');
        // Sample content data (this would typically come from a database/API)
        const contents = [
            { title: 'Exploring Nature', user: 'john_doe', status: 'Approved' },
            { title: 'Cooking Tips', user: 'jane_smith', status: 'Pending' },
        ];

        contents.forEach(content => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${content.title}</td>
                <td>${content.user}</td>
                <td>${content.status}</td>
                <td>
                    <button class="approve-post">Approve</button>
                    <button class="delete-post">Delete</button>
                </td>
            `;
            contentTableBody.appendChild(row);
        });
    }

    function loadUserActivityData() {
        const registeredUsersBody = document.getElementById('registered-users-body');
        const loggedInUsersBody = document.getElementById('logged-in-users-body');
        const visitedUsersBody = document.getElementById('visited-users-body');

        // Sample registered users data
        const registeredUsers = [
            { username: 'john_doe', email: 'john@example.com', date: '2022-01-15' },
            { username: 'jane_smith', email: 'jane@example.com', date: '2022-02-20' },
        ];

        // Sample logged-in users data
        const loggedInUsers = [
            { username: 'john_doe', email: 'john@example.com', lastLogin: '2025-01-04' },
            { username: 'jane_smith', email: 'jane@example.com', lastLogin: '2025-01-03' },
        ];

        // Sample visited users data
        const visitedUsers = [
            { username: 'john_doe', email: 'john@example.com', visitDate: '2025-01-04' },
            { username: 'jane_smith', email: 'jane@example.com', visitDate: '2025-01-03' },
        ];

        // Load registered users
        registeredUsers.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.date}</td>
            `;
            registeredUsersBody.appendChild(row);
        });

        // Load logged-in users
        loggedInUsers.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.lastLogin}</td>
            `;
            loggedInUsersBody.appendChild(row);
        });

        // Load visited users
        visitedUsers.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.visitDate}</td>
            `;
            visitedUsersBody.appendChild(row);
        });
    }

    function loadAnalyticsData() {
        // Sample analytics data
        const totalUsers = 150; // Replace with actual data
        const totalPosts = 200; // Replace with actual data
        const totalEvents = 25;  // Replace with actual data

        document.getElementById('total-users').innerText = totalUsers;
        document.getElementById('total-posts').innerText = totalPosts;
        document.getElementById('total-events').innerText = totalEvents;
    }
});
