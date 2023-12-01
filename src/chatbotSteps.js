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
        { value: 'Camera setup', label: 'Camera setup', trigger: 'Camera setup' },
        { value: 'Billing query', label: 'Billing query', trigger: 'Billing query' },
        { value: 'Camera catalog', label: 'Camera catalog', trigger: 'Camera catalog' },
        { value: 'AI query', label: 'AI query', trigger: 'AI query' },
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
      message: 'Do all home security cameras require Wi-Fi? Not all home security cameras  Wi-Fi. Some cameras, like the Arlo Go and the Reolink Go, can use LTE plans instead of Wi-Fi. Other home security cameras arent connected to the internet at all but rather record onto local storage like hard drives.',
      trigger: 'Select issue'
    },
    {
      id: 'AI query',
      message: 'We are currently useing YOLOv8 to process all our AI request',
      trigger: 'Select issue'
    },
    {
      id: 'Billing query',
      message: 'For any billing related questions, please log in to your account and scroll down to "Billing" option.',
      trigger: 'Select issue'
    },
    {
        id: 'Camera catalog',
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
  