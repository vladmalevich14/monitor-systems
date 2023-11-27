const fetchUsers = async () => {
    try {
        const response = await fetch('http://localhost:3000/users');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const users = await response.json();
        console.log('users: ',users);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
};

fetchUsers();
