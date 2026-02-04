// Hardcoded users data with roles
export const usersData = [
    {
        id: 1,
        name: 'Carlos Administrador',
        email: 'admin@ranawalk.com',
        password: 'admin123',
        role: 'admin',
        roleName: 'Administrador',
        avatar: 'CA'
    },
    {
        id: 2,
        name: 'María Distribuidora',
        email: 'distribuidor@ranawalk.com',
        password: 'dist123',
        role: 'distributor',
        roleName: 'Distribuidor',
        avatar: 'MD'
    },
    {
        id: 3,
        name: 'Juan Cliente',
        email: 'cliente@ranawalk.com',
        password: 'cliente123',
        role: 'client',
        roleName: 'Cliente',
        avatar: 'JC'
    }
];

// Menu options for each role
export const roleMenuOptions = {
    admin: [
        { id: 'myClients', label: 'Mis Clientes', view: 'myClients' },
        { id: 'myDistributors', label: 'Mis Distribuidores', view: 'myDistributors' },
        { id: 'myProducts', label: 'Mis Productos', view: 'myProducts' },
        { id: 'orders', label: 'Pedidos', view: 'adminOrders' }
    ],
    distributor: [
        { id: 'distProducts', label: 'Mis Productos', view: 'distProducts' },
        { id: 'mySubDistributors', label: 'Mis Sub Distribuidores', view: 'mySubDistributors' },
        { id: 'myInfo', label: 'Mi Información', view: 'myInfo' },
        { id: 'distOrders', label: 'Pedidos', view: 'distOrders' }
    ],
    client: [
        { id: 'myOrders', label: 'Mis Pedidos', view: 'myOrders' },
        { id: 'clientProfile', label: 'Mi Perfil', view: 'clientProfile' }
    ]
};
