export interface Role{
  name: string;
  memberId: string;
  label: string;
  color: string;
  permissions: string[]
}

const ROLES = {
  USER_ROLES: [
    {
      name: 'Shareholder',
      memberId: '100000001',
      label: 'Yuzeng',
      color: 'bg-green-900',
      permissions: ['standing', 'regular']
    },
    {
      name: 'Gold',
      memberId: '100000002',
      label: 'John',
      color: 'bg-yellow-400',
      permissions: ['regular']
    },
    {
      name: 'Silver',
      memberId: '100000003',
      label: 'Jane',
      color: 'bg-gray-400',
      permissions: ['regular']
    },
    {
      name: 'Bronze',
      memberId: '100000004',
      label: 'Alex',
      color: 'bg-yellow-600',
      permissions: ['regular']
    },
    {
      name: 'Cooper',
      memberId: '100000005',
      label: 'Chris',
      color: 'bg-pink-400',
      permissions: []
    },
  ] as Role[]
}

export default ROLES