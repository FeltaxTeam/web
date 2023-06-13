export const COMMANDS: { [key: string]: CommandIntf[] } = {
  /* DEV */
  dev: [
    {
      name: "help",
      tags: ['dev', 'beta', 'slash', 'premium'],
      options: []
    },
    {
      name: "ping",
      tags: ['dev'],
      options: []
    }
  ],
  /* MAIN */
  main: [
    {
      name: "help",
      tags: ['slash'],
      options: []
    },
    {
      name: "ping",
      tags: ['premium'],
      options: []
    }
  ],
  /* MODERATION */
  moderation: [
    {
      name: "ban",
      tags: ['slash'],
      description: "Bans a user from the server.",
      options: [
        {
          name: "member",
          description: "Show this help message",
          optional: false,
        },
        {
          name: "reason",
          description: "Show this help message",
          optional: true,
        }
      ]
    },
    {
      name: "unban",
      tags: ['slash'],
      options: [
        {
          name: "member",
          description: "Show this help message",
          optional: false,
        },
        {
          name: "reason",
          description: "Show this help message",
          optional: true,
        }
      ]
    },
    {
      name: "kick",
      tags: ['slash'],
      options: [
        {
          name: "member",
          description: "Show this help message",
          optional: false,
        },
        {
          name: "reason",
          description: "Show this help message",
          optional: true,
        }
      ]
    },
    {
      name: "mute",
      tags: ['slash'],
      options: [
        {
          name: "member",
          description: "Show this help message",
          optional: false,
        },
        {
          name: "time",
          description: "Show this help message",
          optional: false,
        },
        {
          name: "reason",
          description: "Show this help message",
          optional: true,
        }
      ]
    },
    {
      name: "clear",
      tags: [],
      options: [
        {
          name: "bulk",
          description: "Show this help message",
          optional: false,
        }
      ]
    }
  ],
  /* UTILITY */
  utility: [
    {
      name: "userinfo",
      tags: ['slash'],
      options: [
        {
          name: "user",
          description: "Show this help message",
          optional: false,
        }
      ]
    },
    {
      name: "serverinfo",
      tags: ['slash'],
      options: [
        {
          name: "invite",
          description: "Show this help message",
          optional: true,
        }
      ]
    },
    {
      name: "info",
      tags: [],
      options: [],
    }
  ]
}

interface CommandIntf {
  name: string,
  tags: string[],
  description?: string,
  options: Argument[],
}
interface Argument {
  name: string,
  description: string,
  optional: boolean
}