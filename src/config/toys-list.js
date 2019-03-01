const teamList = {
    toys: [
      {
        id: 'jiinio',
        title: 'Pierre Chahwan',
        subtitle: 'Lead Software Engineer',
        description: 'Lead Software Engineer',
        url: '',
      },
      {
        id: 'oliver',
        title: 'Oliver Chlala',
        subtitle: 'Head Electronics Engineer',
        description: 'Head Electronics Engineer',
        url: '',
      },
      {
        id: 'naji',
        title: 'Naji Ibrahim',
        subtitle: 'Finance & Accounting',
        description: 'Finance & Accounting',
        url: '',
      },
      {
        id: 'anthony',
        title: 'Anthony Abdel Karim',
        subtitle: 'Events & On-Ground',
        description: 'Events & On-Ground',
        url: '',
      }
    ],
  
    getProject(id) {
      return toysList.toys.find( toy => toy.id === id );
    },
  
  };
  
  module.exports = teamList;
  