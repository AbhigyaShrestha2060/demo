export const fetchUniversities = async () => {
  // Dummy API call simulation (can be replaced with real API)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: 'The Institute of Chartered Accountants of Nepal (ICAN)',
          location: 'Satdobato, Lalitpur',
          image:
            'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop',
          type: 'Institute',
          featured: true,
          rating: 4.8,
          students: '2,500+',
          established: '1997',
          programs: 12,
          description: 'Premier accounting education institute in Nepal',
          tags: ['Professional', 'Accounting', 'Finance'],
        },
        {
          id: 2,
          name: 'Rapti Academy of Health Sciences',
          location: 'Ghorahi, Dang',
          image:
            'https://www.collegenp.com/uploads/2025/04/rapti-technical-school-dang-building.jpg',
          type: 'Academy',
          featured: false,
          rating: 4.5,
          students: '1,800+',
          established: '2010',
          programs: 8,
          description: 'Leading health sciences education in western Nepal',
          tags: ['Medical', 'Health Sciences', 'Research'],
        },
        {
          id: 3,
          name: 'Madan Bhandari University of Science and Technology',
          location: 'Chitlang, Hetauda, Makwanpur',
          image:
            'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop',
          type: 'University',
          featured: true,
          rating: 4.7,
          students: '3,200+',
          established: '2017',
          programs: 15,
          description: 'Modern university focusing on science and technology',
          tags: ['Science', 'Technology', 'Innovation'],
        },
        {
          id: 4,
          name: 'Pashupati Hindu University',
          location: 'Manohara, Kathmandu',
          image:
            'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=400&h=300&fit=crop',
          type: 'University',
          featured: false,
          rating: 4.3,
          students: '2,100+',
          established: '2015',
          programs: 10,
          description: 'Traditional and modern education in cultural context',
          tags: ['Cultural Studies', 'Traditional', 'Liberal Arts'],
        },
        {
          id: 5,
          name: 'Manmohan Technical University',
          location: 'Sundarijal, Kathmandu',
          image:
            'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop',
          type: 'Technical University',
          featured: true,
          rating: 4.9,
          students: '4,500+',
          established: '2010',
          programs: 20,
          description: 'Leading technical education and research institution',
          tags: ['Engineering', 'Technical', 'Research'],
        },
        {
          id: 6,
          name: 'Nepal Medical College',
          location: 'Jorpati, Kathmandu',
          image:
            'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
          type: 'Medical College',
          featured: false,
          rating: 4.6,
          students: '1,200+',
          established: '1997',
          programs: 6,
          description: 'Excellence in medical education and healthcare',
          tags: ['Medicine', 'Healthcare', 'Research'],
        },
      ]);
    }, 1000); // simulate delay
  });
};
