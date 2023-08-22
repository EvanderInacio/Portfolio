const works = [
  {
    id: 1,
    url: 'spedisco',
    img: '/work/spedisco/dashboard.png',
    logo: '/work/spedisco/spedisco-logo.png',
    title: 'Spedisco',
    subTitle: 'Freelancer',
    description:
      'Responsável pelo front-end e pela integração do back-end de uma plataforma de envio de mensagens via api do WhatsApp e e-mail, onde o cliente pode se cadastrar e se conectar via WhatsApp por meio de um qrcode. Podendo visualizar seus contatos do próprio whatsApp dentro da plataforma, assim como criar trabalhos e grupos de contatos em um trabalho específico e podendo enviar mensagens para seus contatos do whatsApp e e-mail.',
    tags: [
      { name: 'Html', icon: '/skills/html.svg' },
      { name: 'Css', icon: '/skills/css.svg' },
      { name: 'React JS', icon: '/skills/react.svg' },
      { name: 'JavaScript', icon: '/skills/javascript.svg' },
      { name: 'MaterialUL', icon: '/skills/material-ui.svg' },
      { name: 'NodeJS', icon: '/skills/nodejs.svg' },
      { name: 'MongoDB', icon: '/skills/mongodb.svg' }
    ],
    date: 'Mar 2023 - Jun 2023',
    prints: [
      {
        name: 'Dashboard',
        image: '/work/spedisco/dashboard.png',
        description:
          'Após se autenticar, o usuário é redirecionado para a dashboard pagina inicial da aplicação, onde existe uma tabela com histórico de mensagens do email e whatsApp. A tabela ainda conta com a opção de ver o histórico de mensagem das últimas 24 horas, mensal, etc.'
      },
      {
        name: 'Contacts',
        image: '/work/spedisco/contacts.png',
        description:
          'Na página de contatos o usuário tem a opção de adicionar um novo contato e assim poder usar o chat da plataforma para se comunicar por meio de mensagens de emails ou whatsApp.'
      },
      {
        name: 'Contacts Import',
        image: '/work/spedisco/contacts-import.png',
        description:
          'Ainda na página de contatos o usuário pode visualizar uma tabela com os contatos já cadastrados e vinculados aquele usuário.'
      },
      {
        name: 'Filters',
        image: '/work/spedisco/filter.png',
        description:
          'Página de filters o usuário pode filtrar um contato, assim criar, deletar e editar um filtro.'
      },
      {
        name: 'Group',
        image: '/work/spedisco/group.png',
        description:
          'Página de group o usuário pode criar/deletar/editar um grupo de um ou mais contatos.'
      },
      {
        name: 'Settings Email',
        image: '/work/spedisco/settings-email.png',
        description:
          'Página de configuração o usuário pode cadastrar um WhatsApp dele via um qrcode ou e-mail, assim como o tipo de serviço daquele e-mail como hotmail, gmail, yahoo, etc...'
      },
      {
        name: 'Settings Lang',
        image: '/work/spedisco/settings-lang.png',
        description:
          'Ainda dentro da página de configuração existe a opção de escolher a linguagem da plataforma entre Italiano que é o padrão da plataforma ou inglês.'
      }
    ]
  },
]

export default works
