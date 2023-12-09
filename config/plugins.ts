export default ({ env }) => ({
  'users-permissions': {
    config: {
      register: {
        allowedFields: ['phone', 'avatar', 'timeZone'],
      },
    },
  },
})
