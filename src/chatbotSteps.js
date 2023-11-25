export const steps = [
    {
      id: 'Greet',
      message: 'Welcome to our chatbot!',
      trigger: 'Ask Name',
    },
    {
      id: 'Ask Name',
      message: 'Hello User, What is your name?',
      trigger: 'Waiting for name',
    },
    {
      id: 'Waiting for name',
      user: true,
      trigger: 'Name entered',
    },
    {
      id: 'Name entered',
      message: 'Hello {previousValue}, select your issue!',
      trigger: 'Select issue',
    },
    {
      id: 'Select issue',
      options: [
        { value: 'Business Hours', label: 'Business Hours', trigger: 'Show Business Hours' },
        { value: 'Location', label: 'Location', trigger: 'Location' },
        { value: 'Contact Information', label: 'Contact Information', trigger: 'Contact Information' },
        { value: 'Camera setup', label: 'Start again', trigger: 'Greet' },
        { value: 'Billing query', label: 'Start again', trigger: 'Greet' },
        { value: 'Camera catlog', label: 'Start again', trigger: 'Greet' },
        { value: 'Start again', label: 'Start again', trigger: 'Greet' },
        { value: 'End', label: 'End', trigger: 'End' },
      ],
    },
    {
      id: 'Show Business Hours',
      message: 'Our business hours are from 9am-5pm from Monday to Friday!',
      trigger: 'Select issue'
    },
    {
        id: 'Location',
        message: 'We are located at 1 Washington Sq, San Jose, CA 95192',
        trigger: 'Select issue'
    },
    {
        id: 'Contact Information',
        message: 'Please reach out to us on 408-924-1678',
        trigger: 'Select issue'
    },
    {
      id: 'Camera setup',
      message: 'For information pertenaning the setup please check out - page.',
      trigger: 'Select issue'
    },
    {
      id: 'Billing query',
      message: 'For any billing related questions, please log in to your account and scroll down to "Billing" option.',
      trigger: 'Select issue'
    },
    {
        id: 'Camera catlog',
        message: 'We currently provide support for CCTV, IP cameras only',
        trigger: 'Select issue'
    },
    {
        id: 'Start again',
        message: 'What would you like us to assist you with?',
        trigger: 'Select issue'
    },
    {
        id: 'End',
        message: 'Thank-you for chatting with us!',
        end:true
    },
    
  ];
  