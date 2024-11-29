export interface Role{
  name: string;
  color: string;
  permissions: string[]
}

const ROLES = {
  USER_ROLES: [
    {
      name: 'Shareholder',
      color: 'bg-green-900',
      permissions: ['standing', 'regular']
    },
    {
      name: 'Gold',
      color: 'bg-yellow-400',
      permissions: ['regular']
    },
    {
      name: 'Silver',
      color: 'bg-gray-400',
      permissions: ['regular']
    },
    {
      name: 'Bronze',
      color: 'bg-yellow-600',
      permissions: ['regular']
    },
    {
      name: 'Cooper',
      color: 'bg-pink-400',
      permissions: []
    },
  ] as Role[]
}

export default ROLES